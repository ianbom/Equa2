import { Product } from "@/types";

export const PRODUCTS: Product[] = [
  // ==================== INDOOR - CABINETS ====================
  {
    id: "prod-1",
    name: "Calabria Wooden Sideboard",
    slug: "calabria-wooden-sideboard",
    category: "indoor-furniture",
    categoryLabel: "Indoor Furniture",
    subcategory: "cabinet",
    subcategoryLabel: "Cabinet",
    description:
      "A testament to understated craftsmanship. Featuring curved solid teak doors, soft magnetic latches, and internal storage divisions engineered for modern living.",
    dimensions: "154 x 42.5 x 82.5 cm",
    materials: "Solid Teak, Mindi Veneer, Brass Hardware",
    woodFinishing: "Smoked Natural",
    featured: true,
    images: [
      "https://images.unsplash.com/photo-1595428774223-ef52624120d2?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1538688525198-9b88f6f53126?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?q=80&w=1000&auto=format&fit=crop",
    ],
    finishes: [
      { name: "Smoked Natural", colorHex: "#C4A482" },
      { name: "Bleached Ash", colorHex: "#E6D7C3" },
      { name: "Deep Charcoal", colorHex: "#2E2B2A" },
    ],
  },
  {
    id: "prod-2",
    name: "Selva Credenza 3 Doors",
    slug: "selva-credenza-3-doors",
    category: "indoor-furniture",
    categoryLabel: "Indoor Furniture",
    subcategory: "cabinet",
    subcategoryLabel: "Cabinet",
    description:
      "Sculptural storage combining woven cane inserts with solid mindi wood framing. Clean lines and tactile warmth create a focal point in any dining or living room.",
    dimensions: "165 x 45 x 80 cm",
    materials: "Mindi Wood, Natural Rattan Cane Weave",
    woodFinishing: "Natural Matte",
    featured: true,
    images: [
      "https://images.unsplash.com/photo-1538688525198-9b88f6f53126?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1595428774223-ef52624120d2?q=80&w=1000&auto=format&fit=crop",
    ],
    finishes: [
      { name: "Natural Matte", colorHex: "#D8BC9D" },
      { name: "Oiled Walnut", colorHex: "#5C4033" },
    ],
  },
  {
    id: "prod-3",
    name: "Liora Fluted Console",
    slug: "liora-fluted-console",
    category: "indoor-furniture",
    categoryLabel: "Indoor Furniture",
    subcategory: "cabinet",
    subcategoryLabel: "Cabinet",
    description:
      "Architectural rhythm defined by gentle fluted wood panels. Includes discreet cable pass-throughs and dual soft-closing drawers for entryways and living rooms.",
    dimensions: "120 x 38 x 78 cm",
    materials: "Solid Oak, Black Powder-Coated Steel",
    woodFinishing: "Smoked Oak",
    featured: true,
    images: [
      "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1595428774223-ef52624120d2?q=80&w=1000&auto=format&fit=crop",
    ],
    finishes: [
      { name: "Smoked Oak", colorHex: "#4A3E3D" },
      { name: "Natural White Oak", colorHex: "#E1D5C9" },
    ],
  },
  {
    id: "prod-4",
    name: "Cedaris Low TV Console",
    slug: "cedaris-low-tv-console",
    category: "indoor-furniture",
    categoryLabel: "Indoor Furniture",
    subcategory: "cabinet",
    subcategoryLabel: "Cabinet",
    description:
      "Low-profile media unit celebrating continuous wood grain across horizontal surfaces. Open acoustic shelving flanked by concealed sliding cabinets.",
    dimensions: "180 x 42 x 45 cm",
    materials: "Teak Wood, Matte Black Steel Legs",
    woodFinishing: "Golden Teak Satin",
    featured: true,
    images: [
      "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1595428774223-ef52624120d2?q=80&w=1000&auto=format&fit=crop",
    ],
    finishes: [
      { name: "Golden Teak", colorHex: "#A97148" },
      { name: "Espresso Black", colorHex: "#1F1D1D" },
    ],
  },

  // ==================== INDOOR - TABLES ====================
  {
    id: "prod-5",
    name: "Nusa Solid Oak Dining Table",
    slug: "nusa-solid-oak-dining-table",
    category: "indoor-furniture",
    categoryLabel: "Indoor Furniture",
    subcategory: "tables",
    subcategoryLabel: "Tables",
    description:
      "An heirloom dining table built with rounded pillared trestle legs and a chamfered solid wood top. Comfortably seats eight.",
    dimensions: "220 x 95 x 76 cm",
    materials: "Solid White Oak",
    woodFinishing: "Matte Organic Wax",
    featured: true,
    images: [
      "https://images.unsplash.com/photo-1615066390971-03e4e1c36ddf?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1577140917170-285929fb55b7?q=80&w=1000&auto=format&fit=crop",
    ],
    finishes: [
      { name: "Matte Organic Wax", colorHex: "#E3D3C1" },
      { name: "Smoked Amber", colorHex: "#8B5A2B" },
    ],
  },
  {
    id: "prod-6",
    name: "Terra Organic Coffee Table",
    slug: "terra-organic-coffee-table",
    category: "indoor-furniture",
    categoryLabel: "Indoor Furniture",
    subcategory: "tables",
    subcategoryLabel: "Tables",
    description:
      "Sensuous organic pebble form crafted from sculpted solid teak. The low-slung proportion anchors contemporary lounge settings with tactile presence.",
    dimensions: "110 x 75 x 35 cm",
    materials: "Solid Teak Root / Heartwood",
    woodFinishing: "Hand-Rubbed Natural Oil",
    featured: true,
    images: [
      "https://images.unsplash.com/photo-1533090161767-e6ffed986c88?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1615066390971-03e4e1c36ddf?q=80&w=1000&auto=format&fit=crop",
    ],
    finishes: [
      { name: "Natural Oil", colorHex: "#B8860B" },
      { name: "Charcoal Ceruse", colorHex: "#363636" },
    ],
  },
  {
    id: "prod-7",
    name: "Bolton Architectural Dining Table",
    slug: "bolton-architectural-dining-table",
    category: "indoor-furniture",
    categoryLabel: "Indoor Furniture",
    subcategory: "tables",
    subcategoryLabel: "Tables",
    description:
      "Minimalist engineering balancing a slender beveled tabletop over a cantilevered black architectural steel trestle base.",
    dimensions: "200 x 90 x 75 cm",
    materials: "Sungkai Wood Top, Structural Steel Base",
    woodFinishing: "Weathered Ash Finish",
    featured: false,
    images: [
      "https://images.unsplash.com/photo-1577140917170-285929fb55b7?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1615066390971-03e4e1c36ddf?q=80&w=1000&auto=format&fit=crop",
    ],
    finishes: [
      { name: "Weathered Ash", colorHex: "#C5B9AC" },
      { name: "Natural Teak", colorHex: "#996515" },
    ],
  },

  // ==================== INDOOR - CHAIRS ====================
  {
    id: "prod-8",
    name: "Aruna Sculptural Dining Chair",
    slug: "aruna-sculptural-dining-chair",
    category: "indoor-furniture",
    categoryLabel: "Indoor Furniture",
    subcategory: "chairs",
    subcategoryLabel: "Chairs",
    description:
      "Refined joinery meets ergonomic comfort. Curved steam-bent backrest cradles the spine, paired with high-resilience upholstered seat cushion in textured Belgian linen.",
    dimensions: "54 x 52 x 78 cm (Seat Height: 46 cm)",
    materials: "Solid White Ash, Belgian Linen Cushion",
    woodFinishing: "Natural Satin",
    featured: true,
    images: [
      "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1540574163026-643ea20ade25?q=80&w=1000&auto=format&fit=crop",
    ],
    finishes: [
      { name: "Natural Ash", colorHex: "#E5D9C5" },
      { name: "Ebonized Black", colorHex: "#1C1B1A" },
    ],
  },
  {
    id: "prod-9",
    name: "Sora Handwoven Lounge Chair",
    slug: "sora-handwoven-lounge-chair",
    category: "indoor-furniture",
    categoryLabel: "Indoor Furniture",
    subcategory: "chairs",
    subcategoryLabel: "Chairs",
    description:
      "A celebration of Indonesian weaving traditions. Solid mindi frame cradling tight loom weave rattan seating with deep, relaxing recline angle.",
    dimensions: "68 x 76 x 74 cm",
    materials: "Mindi Wood, Natural Core Rattan",
    woodFinishing: "Honey Warm Matte",
    featured: true,
    images: [
      "https://images.unsplash.com/photo-1540574163026-643ea20ade25?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?q=80&w=1000&auto=format&fit=crop",
    ],
    finishes: [
      { name: "Honey Warm", colorHex: "#C99B67" },
      { name: "Bleached Natural", colorHex: "#E7DACB" },
    ],
  },
  {
    id: "prod-10",
    name: "Kanso Minimalist Wooden Chair",
    slug: "kanso-minimalist-wooden-chair",
    category: "indoor-furniture",
    categoryLabel: "Indoor Furniture",
    subcategory: "chairs",
    subcategoryLabel: "Chairs",
    description:
      "Stackable solid wood chair inspired by Japanese simplicity and Scandinavian proportion. Mortise and tenon joinery built for hospitality longevity.",
    dimensions: "50 x 50 x 76 cm",
    materials: "Solid Teak",
    woodFinishing: "Unfinished Natural Touch",
    featured: false,
    images: [
      "https://images.unsplash.com/photo-1503602642458-232111445657?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?q=80&w=1000&auto=format&fit=crop",
    ],
    finishes: [
      { name: "Natural Teak", colorHex: "#A0714F" },
      { name: "Matte Black", colorHex: "#222222" },
    ],
  },

  // ==================== INDOOR - SOFAS ====================
  {
    id: "prod-11",
    name: "Aster Modular Linen Sofa",
    slug: "aster-modular-linen-sofa",
    category: "indoor-furniture",
    categoryLabel: "Indoor Furniture",
    subcategory: "sofas",
    subcategoryLabel: "Sofas",
    description:
      "Deep generous proportions with removable down-blend cushions. Tailored in heavy slub-linen with hidden interlocking base clips for custom spatial arrangements.",
    dimensions: "280 x 105 x 72 cm",
    materials: "Kiln-Dried Hardwood Frame, Feather Down, Belgian Linen",
    woodFinishing: "Concealed Oak Feet",
    featured: true,
    images: [
      "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?q=80&w=1000&auto=format&fit=crop",
    ],
    finishes: [
      { name: "Oatmeal Linen", colorHex: "#D7CFC7" },
      { name: "Warm Olive", colorHex: "#706E56" },
      { name: "Chalk White", colorHex: "#F2EFE9" },
    ],
  },
  {
    id: "prod-12",
    name: "Kumo Curved Daybed",
    slug: "kumo-curved-daybed",
    category: "indoor-furniture",
    categoryLabel: "Indoor Furniture",
    subcategory: "sofas",
    subcategoryLabel: "Sofas",
    description:
      "Sculptural chaise featuring continuous radius curves and an integrated circular oak side-table ledge. Designed for relaxing readouts and architectural living spaces.",
    dimensions: "190 x 85 x 65 cm",
    materials: "Solid Oak Base, High Resilience Foam, Bouclé Wool",
    woodFinishing: "Natural White Oak",
    featured: false,
    images: [
      "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?q=80&w=1000&auto=format&fit=crop",
    ],
    finishes: [
      { name: "Ivory Bouclé", colorHex: "#ECEAE4" },
      { name: "Camel Tweed", colorHex: "#B8977E" },
    ],
  },

  // ==================== OUTDOOR - CHAIRS ====================
  {
    id: "prod-13",
    name: "Breeze Woven Patio Chair",
    slug: "breeze-woven-patio-chair",
    category: "outdoor-furniture",
    categoryLabel: "Outdoor Furniture",
    subcategory: "chairs",
    subcategoryLabel: "Chairs",
    description:
      "Weather-defying synthetic weave hand-wrapped around an electro-coated aluminum tube frame. Includes quick-dry polyurethane outdoor cushions.",
    dimensions: "58 x 60 x 82 cm",
    materials: "All-Weather PE Synthetic Fiber, Aluminum, Sunbrella Fabric",
    woodFinishing: "Textured Sand Powder Coat",
    featured: true,
    images: [
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1000&auto=format&fit=crop",
    ],
    finishes: [
      { name: "Dune Sand", colorHex: "#C5B29B" },
      { name: "Slate Charcoal", colorHex: "#474A51" },
    ],
  },
  {
    id: "prod-14",
    name: "Solace Teak Outdoor Armchair",
    slug: "solace-teak-outdoor-armchair",
    category: "outdoor-furniture",
    categoryLabel: "Outdoor Furniture",
    subcategory: "chairs",
    subcategoryLabel: "Chairs",
    description:
      "Grade-A sustainable teak armchair constructed with stainless steel mortise hardware. Develops a distinguished silver patina naturally over time.",
    dimensions: "64 x 62 x 80 cm",
    materials: "Grade-A Javanese Teak, Marine-Grade Stainless Steel",
    woodFinishing: "Unsealed Sanded Teak",
    featured: false,
    images: [
      "https://images.unsplash.com/photo-1519710164239-da123dc03ef4?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=1000&auto=format&fit=crop",
    ],
    finishes: [
      { name: "Natural Teak", colorHex: "#B37A4C" },
      { name: "Weathered Gray", colorHex: "#8A8A8A" },
    ],
  },

  // ==================== OUTDOOR - SOFAS ====================
  {
    id: "prod-15",
    name: "Vela Circular Outdoor Lounge",
    slug: "vela-circular-outdoor-lounge",
    category: "outdoor-furniture",
    categoryLabel: "Outdoor Furniture",
    subcategory: "sofas",
    subcategoryLabel: "Sofas",
    description:
      "The signature circular outdoor sectional seen on luxury verandas. High-density woven wicker base with 360-degree radial cushions and matching circular cocktail table.",
    dimensions: "260 x 260 x 85 cm",
    materials: "HDPE Synthetic Wicker, Aluminum Substructure, QuickDry Foam",
    woodFinishing: "Warm Earth Rattan Tone",
    featured: true,
    images: [
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=1000&auto=format&fit=crop",
    ],
    finishes: [
      { name: "Warm Honey Weave", colorHex: "#C29661" },
      { name: "Ash Gray Weave", colorHex: "#777777" },
    ],
  },
  {
    id: "prod-16",
    name: "Solstice Outdoor 3-Seater Sofa",
    slug: "solstice-outdoor-3-seater-sofa",
    category: "outdoor-furniture",
    categoryLabel: "Outdoor Furniture",
    subcategory: "sofas",
    subcategoryLabel: "Sofas",
    description:
      "Linear teak framing with wide armrest ledges and nautical-grade rope back weave. Water-repellent cushions designed to stay outdoors year-round.",
    dimensions: "215 x 88 x 74 cm",
    materials: "Solid Teak, Polypropylene Nautical Rope, Outdoor Olefin",
    woodFinishing: "Natural Teak Oil",
    featured: false,
    images: [
      "https://images.unsplash.com/photo-1519710164239-da123dc03ef4?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1000&auto=format&fit=crop",
    ],
    finishes: [
      { name: "Natural Teak & Sand Cushion", colorHex: "#D9C7B2" },
      { name: "Natural Teak & Navy Cushion", colorHex: "#2C3E50" },
    ],
  },

  // ==================== OUTDOOR - TABLES ====================
  {
    id: "prod-17",
    name: "Alba Teak Outdoor Dining Table",
    slug: "alba-teak-outdoor-dining-table",
    category: "outdoor-furniture",
    categoryLabel: "Outdoor Furniture",
    subcategory: "tables",
    subcategoryLabel: "Tables",
    description:
      "Heavy-duty slatted outdoor table allowing rain drainage while maintaining a continuous refined silhouette. Accommodates umbrella pole insert.",
    dimensions: "220 x 100 x 76 cm",
    materials: "Sustainable Plantation Teak",
    woodFinishing: "Fine Sanded Natural",
    featured: false,
    images: [
      "https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1615066390971-03e4e1c36ddf?q=80&w=1000&auto=format&fit=crop",
    ],
    finishes: [{ name: "Golden Teak", colorHex: "#B8860B" }],
  },
  {
    id: "prod-18",
    name: "Maya Bistro Concrete & Teak Table",
    slug: "maya-bistro-table",
    category: "outdoor-furniture",
    categoryLabel: "Outdoor Furniture",
    subcategory: "tables",
    subcategoryLabel: "Tables",
    description:
      "Compact cafe and terrace table pairing a fiber-reinforced light concrete terrazzo top with tripod solid teak legs.",
    dimensions: "80 x 80 x 74 cm",
    materials: "Engineered Concrete Composite, Teak Legs",
    woodFinishing: "Sealed Matte Surface",
    featured: false,
    images: [
      "https://images.unsplash.com/photo-1533090161767-e6ffed986c88?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=1000&auto=format&fit=crop",
    ],
    finishes: [{ name: "Light Gray Concrete", colorHex: "#CECECE" }],
  },

  // ==================== OUTDOOR - SUNLOUNGERS ====================
  {
    id: "prod-19",
    name: "Haven Teak Sun Lounger",
    slug: "haven-teak-sun-lounger",
    category: "outdoor-furniture",
    categoryLabel: "Outdoor Furniture",
    subcategory: "sunloungers",
    subcategoryLabel: "Sunloungers",
    description:
      "Adjustable 4-position reclining poolside lounger with concealed rubber-tread teak wheels and slide-out cocktail tray.",
    dimensions: "200 x 68 x 34 cm",
    materials: "Solid Indonesian Teak, Brass Fittings, QuickDry Cushion",
    woodFinishing: "Natural Teak Protective Seal",
    featured: true,
    images: [
      "https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=1000&auto=format&fit=crop",
    ],
    finishes: [
      { name: "Natural Teak & Canvas", colorHex: "#DDD4C5" },
      { name: "Natural Teak & Charcoal", colorHex: "#3A3A3A" },
    ],
  },
  {
    id: "prod-20",
    name: "Oasis Minimalist Daybed Lounger",
    slug: "oasis-minimalist-daybed-lounger",
    category: "outdoor-furniture",
    categoryLabel: "Outdoor Furniture",
    subcategory: "sunloungers",
    subcategoryLabel: "Sunloungers",
    description:
      "Wide-profile double sunlounger with Batyline mesh sling support underneath plush water-resistant cushions.",
    dimensions: "195 x 140 x 36 cm",
    materials: "Powder Coated Aluminum, French Batyline Sling",
    woodFinishing: "Matte White Finish",
    featured: false,
    images: [
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=1000&auto=format&fit=crop",
    ],
    finishes: [{ name: "Pure White", colorHex: "#F7F7F7" }],
  },

  // ==================== HOME DECORATION - LAMPS ====================
  {
    id: "prod-21",
    name: "Kanso Ceramic Pendant Lamp",
    slug: "kanso-ceramic-pendant-lamp",
    category: "home-decoration",
    categoryLabel: "Home Decoration",
    subcategory: "lamp",
    subcategoryLabel: "Lamp",
    description:
      "Wheel-thrown stoneware lamp finished in textured reactive matte glaze. Casts a warm, focused ambient glow over dining tables and kitchen islands.",
    dimensions: "32 x 32 x 28 cm (Cord: 200 cm)",
    materials: "East Java Stoneware, Brass Fittings, Twisted Linen Cord",
    woodFinishing: "Sand Reactive Glaze",
    featured: true,
    images: [
      "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?q=80&w=1000&auto=format&fit=crop",
    ],
    finishes: [
      { name: "Textured Sand", colorHex: "#DDD2C3" },
      { name: "Terracotta Earth", colorHex: "#C86445" },
    ],
  },
  {
    id: "prod-22",
    name: "Seta Rattan Floor Lamp",
    slug: "seta-rattan-floor-lamp",
    category: "home-decoration",
    categoryLabel: "Home Decoration",
    subcategory: "lamp",
    subcategoryLabel: "Lamp",
    description:
      "Tall sculptural column woven from fine natural wicker strips over an internal diffuser. Projects ambient geometric shadow play across room surfaces.",
    dimensions: "35 x 35 x 135 cm",
    materials: "Fine Natural Rattan, Internal Fabric Diffuser, Solid Ash Base",
    woodFinishing: "Unfinished Natural Cane",
    featured: false,
    images: [
      "https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?q=80&w=1000&auto=format&fit=crop",
    ],
    finishes: [{ name: "Natural Cane", colorHex: "#E3C8A0" }],
  },

  // ==================== HOME DECORATION - MIRRORS ====================
  {
    id: "prod-23",
    name: "Sol Arch Minimalist Mirror",
    slug: "sol-arch-minimalist-mirror",
    category: "home-decoration",
    categoryLabel: "Home Decoration",
    subcategory: "mirror",
    subcategoryLabel: "Mirror",
    description:
      "Full-length standing or wall-mounted arch mirror framed in seamless steamed solid oak with subtle shadowline border.",
    dimensions: "80 x 4 x 180 cm",
    materials: "Solid White Oak, High-Definition Silver Mirror Glass",
    woodFinishing: "Smoked Natural Oak",
    featured: true,
    images: [
      "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1615066390971-03e4e1c36ddf?q=80&w=1000&auto=format&fit=crop",
    ],
    finishes: [
      { name: "Smoked Natural Oak", colorHex: "#A58C73" },
      { name: "Ebonized Black", colorHex: "#1E1E1E" },
    ],
  },
  {
    id: "prod-24",
    name: "Eos Round Beveled Mirror",
    slug: "eos-round-beveled-mirror",
    category: "home-decoration",
    categoryLabel: "Home Decoration",
    subcategory: "mirror",
    subcategoryLabel: "Mirror",
    description:
      "Statement circular mirror with an asymmetric deep solid teak ledge shelf below, ideal for entryways, vanities, or powder rooms.",
    dimensions: "90 x 12 x 90 cm",
    materials: "Solid Javanese Teak, Distortion-Free Mirror",
    woodFinishing: "Natural Teak Satin Wax",
    featured: false,
    images: [
      "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?q=80&w=1000&auto=format&fit=crop",
    ],
    finishes: [{ name: "Natural Teak", colorHex: "#B87F4A" }],
  },
];
