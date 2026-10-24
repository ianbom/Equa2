"use client";

import React, { useState } from "react";
import { WORLD_MAP_PATHS, ACTIVE_COUNTRY_IDS } from "@/data/worldMapData";

// Major destination hubs for trade connection arcs
const HUBS = [
  { id: "usa-west", label: "Los Angeles, USA", x: 145, y: 198 },
  { id: "usa-east", label: "New York, USA", x: 238, y: 182 },
  { id: "europe-uk", label: "London, UK", x: 472, y: 144 },
  { id: "europe-de", label: "Frankfurt, Germany", x: 495, y: 156 },
  { id: "middle-east", label: "Dubai, UAE", x: 598, y: 265 },
  { id: "japan", label: "Tokyo, Japan", x: 812, y: 210 },
  { id: "australia", label: "Sydney, Australia", x: 840, y: 435 },
];

// Origin: Surabaya, East Java, Indonesia
const ORIGIN = { label: "Surabaya, Indonesia (Origin)", x: 766, y: 362 };

export function WorldMap() {
  const [hovered, setHovered] = useState<string | null>(null);

  return (
    <div className="relative w-full bg-white border border-[#eeeeee] p-4 sm:p-6 md:p-8 shadow-xs">
      {/* Interactive Tooltip Badge */}
      <div className="flex items-center justify-between mb-4 pb-3 border-b border-[#f0f0f0] min-h-[32px]">
        <div className="flex items-center gap-2 text-xs">
          <span className="w-2.5 h-2.5 rounded-full bg-[#f05c1a]" />
          <span className="font-semibold text-[#1b1b1b]">
            {hovered ? `Region: ${hovered.toUpperCase()}` : "Global Export Network"}
          </span>
          {hovered && (
            <span className="text-[11px] text-[#f05c1a] font-medium ml-1">
              • Active Partner Destination
            </span>
          )}
        </div>
        <div className="text-[11px] text-[#5a5758] hidden sm:block">
          Hover over countries to explore distribution
        </div>
      </div>

      {/* SVG Map Container */}
      <div className="relative w-full aspect-16/9 overflow-hidden bg-[#fafafa] rounded-sm flex items-center justify-center p-2">
        <svg
          viewBox="0 0 950 560"
          className="w-full h-full select-none"
          style={{ maxHeight: "480px" }}
        >
          <defs>
            <linearGradient id="routeGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#f05c1a" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#f05c1a" stopOpacity="0.2" />
            </linearGradient>
            <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="3" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
          </defs>

          {/* Graticule Background Grid Lines */}
          <g className="stroke-[#f0f0f0]" strokeWidth="0.5" strokeDasharray="3 3">
            <line x1="0" y1="140" x2="950" y2="140" />
            <line x1="0" y1="280" x2="950" y2="280" />
            <line x1="0" y1="420" x2="950" y2="420" />
            <line x1="237" y1="0" x2="237" y2="560" />
            <line x1="475" y1="0" x2="475" y2="560" />
            <line x1="712" y1="0" x2="712" y2="560" />
          </g>

          {/* All World Map Country Paths */}
          <g>
            {WORLD_MAP_PATHS.map((path, idx) => {
              const isActive = ACTIVE_COUNTRY_IDS.has(path.id);
              const isHovered = hovered === path.id;

              return (
                <path
                  key={`${path.id}-${idx}`}
                  d={path.d}
                  fill={isActive ? (isHovered ? "#d94f14" : "#f05c1a") : "#d8dce2"}
                  stroke="#ffffff"
                  strokeWidth="0.5"
                  className={`transition-colors duration-200 ${
                    isActive ? "cursor-pointer" : ""
                  }`}
                  onMouseEnter={() => {
                    if (isActive && path.id) {
                      setHovered(path.id);
                    }
                  }}
                  onMouseLeave={() => setHovered(null)}
                >
                  <title>{path.id ? path.id.toUpperCase() : "Country"}</title>
                </path>
              );
            })}
          </g>

          {/* Trade Connection Arc Lines from Surabaya to Global Hubs */}
          <g className="pointer-events-none">
            {HUBS.map((hub) => {
              // Calculate curved control point
              const midX = (ORIGIN.x + hub.x) / 2;
              const midY = Math.min(ORIGIN.y, hub.y) - Math.abs(ORIGIN.x - hub.x) * 0.15;
              const pathD = `M ${ORIGIN.x} ${ORIGIN.y} Q ${midX} ${midY} ${hub.x} ${hub.y}`;

              return (
                <g key={hub.id}>
                  {/* Arc glow path */}
                  <path
                    d={pathD}
                    fill="none"
                    stroke="#f05c1a"
                    strokeWidth="1.5"
                    strokeDasharray="4 4"
                    strokeOpacity="0.45"
                  />
                  {/* Destination Hub Dot */}
                  <circle
                    cx={hub.x}
                    cy={hub.y}
                    r="4"
                    fill="#1b1b1b"
                    stroke="#ffffff"
                    strokeWidth="1.5"
                  />
                  <circle
                    cx={hub.x}
                    cy={hub.y}
                    r="6"
                    fill="none"
                    stroke="#f05c1a"
                    strokeWidth="1"
                    opacity="0.8"
                  />
                </g>
              );
            })}
          </g>

          {/* Origin: Surabaya, Indonesia Radar Pulse Beacon */}
          <g className="pointer-events-none">
            {/* Pulsing beacon circles */}
            <circle
              cx={ORIGIN.x}
              cy={ORIGIN.y}
              r="22"
              fill="#f05c1a"
              opacity="0.15"
              className="animate-ping"
            />
            <circle
              cx={ORIGIN.x}
              cy={ORIGIN.y}
              r="12"
              fill="#f05c1a"
              opacity="0.3"
            />
            <circle
              cx={ORIGIN.x}
              cy={ORIGIN.y}
              r="5"
              fill="#f05c1a"
              stroke="#ffffff"
              strokeWidth="2"
            />
            {/* Origin Label Callout */}
            <g transform={`translate(${ORIGIN.x - 55}, ${ORIGIN.y + 16})`}>
              <rect
                x="0"
                y="0"
                width="110"
                height="18"
                rx="2"
                fill="#1b1b1b"
                opacity="0.9"
              />
              <text
                x="55"
                y="12"
                textAnchor="middle"
                fill="#ffffff"
                fontSize="8.5"
                fontWeight="600"
                letterSpacing="0.05em"
              >
                SURABAYA (HQ)
              </text>
            </g>
          </g>
        </svg>
      </div>

      {/* Map Legend & Metrics Footer */}
      <div className="pt-4 mt-4 border-t border-[#eeeeee] flex flex-wrap items-center justify-between gap-4 text-xs">
        <div className="flex flex-wrap items-center gap-6">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-[#f05c1a] border border-white shadow-xs" />
            <span className="font-semibold text-[#1b1b1b]">
              Export Destinations (20+ Countries)
            </span>
          </div>

          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-[#d8dce2]" />
            <span className="text-[#5a5758]">Global Shipping Corridors</span>
          </div>

          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#1b1b1b] ring-2 ring-[#f05c1a]" />
            <span className="text-[#5a5758]">Major Ports & Reception Hubs</span>
          </div>
        </div>

        <div className="text-[11px] text-[#5a5758] font-medium bg-[#f5f5f5] px-3 py-1.5 rounded-xs">
          Port of Origin: Tanjung Perak, Surabaya (ID)
        </div>
      </div>
    </div>
  );
}
