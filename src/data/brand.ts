export const BRAND = {
  name: "GALERYA",
  tagline: "Thoughtfully Crafted for Modern Living",
  description:
    "Discover timeless furniture shaped by natural materials, thoughtful design, and contemporary craftsmanship.",
  location: "Surabaya, Jawa Timur, Indonesia",
  phone: "0811112222",
  phoneFormatted: "+62 811 112 222",
  phoneLink: "tel:+62811112222",
  email: "galery@gmail.com",
  emailLink: "mailto:galery@gmail.com",
  whatsappLink: "https://wa.me/62811112222",
  socials: {
    instagram: "https://instagram.com",
    linkedin: "https://linkedin.com",
    youtube: "https://youtube.com",
  },
};

export interface NavCategory {
  title: string;
  slug: string;
  subcategories: { title: string; slug: string }[];
}

export const PRODUCT_CATEGORIES: NavCategory[] = [
  {
    title: "Indoor Furniture",
    slug: "indoor-furniture",
    subcategories: [
      { title: "Chairs", slug: "chairs" },
      { title: "Sofas", slug: "sofas" },
      { title: "Tables", slug: "tables" },
      { title: "Cabinet", slug: "cabinet" },
    ],
  },
  {
    title: "Outdoor Furniture",
    slug: "outdoor-furniture",
    subcategories: [
      { title: "Chairs", slug: "chairs" },
      { title: "Sofas", slug: "sofas" },
      { title: "Tables", slug: "tables" },
      { title: "Sunloungers", slug: "sunloungers" },
    ],
  },
  {
    title: "Home Decoration",
    slug: "home-decoration",
    subcategories: [
      { title: "Lamp", slug: "lamp" },
      { title: "Mirror", slug: "mirror" },
    ],
  },
];

export const NAV_LINKS = [
  { label: "About Us", href: "/about-us" },
  { label: "Studio", href: "/studio" },
  { label: "Products", href: "/products", hasMegaMenu: true },
  { label: "Catalog", href: "/catalog" },
  { label: "Gallery", href: "/gallery" },
  { label: "Sustainability", href: "/sustainability" },
  { label: "Careers", href: "/careers" },
];
