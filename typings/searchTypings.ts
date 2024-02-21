export interface Result {
  content: Content;
  created_at: Date;
  updated_at: Date;
  page: number;
  url: string;
  job_id: string;
  status_code: number;
  parser_type: string;
}

export interface Content {
  url: string;
  organic: Organic[];
  parse_status_code: number;
  total_results: number;
}

export interface Organic {
  url: string;
  price: Price;
  title: string;
  rating: Rating;
  image: string;
  seller: Seller;
  product_id: string;
  badge?: string;
  variants?: Variant[];
}

export enum Badge {
  BestSeller = "Best seller",
  EarlyAccess = "Early access",
  ReducedPrice = "Reduced price",
  Rollback = "Rollback",
}

export interface Price {
  price: number;
  currency: string;
}

export enum Currency {
  Dollar = "$",
}

export interface Rating {
  count: number;
  rating: number;
}

export interface Seller {
  name: string;
}

export interface Variant {
  url: string;
  title: string;
  product_id: string;
}
