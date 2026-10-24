import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Reveal } from "@/components/motion";

interface ClosingCtaProps {
  title?: string;
  subtitle?: string;
  buttonText?: string;
  buttonLink?: string;
}

export function ClosingCta({
  title = "Create a Living Space That Feels Like Yours",
  subtitle = "By collaborating with GALERYA, you are supporting responsible design practices that honor the artisan, the environment, and the longevity of Indonesian craftsmanship.",
  buttonText = "Contact Us",
  buttonLink = "/contact",
}: ClosingCtaProps) {
  return (
    <section className="relative py-28 text-center text-white overflow-hidden">
      {/* Background Image with dark overlay */}
      <div className="absolute inset-0 -z-10 bg-black">
        <Image
          src="https://images.unsplash.com/photo-1615066390971-03e4e1c36ddf?q=80&w=1600&auto=format&fit=crop"
          alt="GALERYA Craftsmanship"
          fill
          className="object-cover opacity-45"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      <div className="container-custom max-w-3xl relative z-10 space-y-6">
        <Reveal direction="up" delay={0.1}>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light tracking-tight text-white leading-tight">
            {title}
          </h2>
        </Reveal>

        <Reveal direction="up" delay={0.25}>
          <p className="text-sm md:text-base text-white/85 leading-relaxed font-light max-w-2xl mx-auto">
            {subtitle}
          </p>
        </Reveal>

        <Reveal direction="up" delay={0.35}>
          <div className="pt-4">
            <Link href={buttonLink} className="btn-solid-white">
              {buttonText}
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
