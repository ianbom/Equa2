export type ProductCategory = 'indoor-furniture' | 'outdoor-furniture' | 'home-decoration';

export type ProductSubcategory =
  | 'chairs'
  | 'sofas'
  | 'tables'
  | 'cabinet'
  | 'sunloungers'
  | 'lamp'
  | 'mirror';

export interface ProductFinish {
  name: string;
  colorHex?: string;
  image?: string;
}

export interface Product {
  id: string;
  name: string;
  slug: string;
  category: ProductCategory;
  categoryLabel: string;
  subcategory: ProductSubcategory;
  subcategoryLabel: string;
  description: string;
  dimensions: string;
  materials: string;
  woodFinishing: string;
  images: string[];
  finishes?: ProductFinish[];
  featured?: boolean;
}

export interface CatalogItem {
  id: string;
  title: string;
  subtitle: string;
  coverImage: string;
  year: string;
  pages: number;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'indoor' | 'outdoor';
  image: string;
  aspect?: 'landscape' | 'portrait' | 'square';
}
