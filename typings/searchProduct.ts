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
  meta: Meta;
  price: number;
  title: string;
  images: string[];
  rating: Rating;
  seller: Seller;
  currency: string;
  warranty: string;
  breadcrumbs: string[];
  description: string;
  out_of_stock: boolean;
  free_delivery: boolean;
  specifications: Specification[];
  parse_status_code: number;
}

export interface Meta {
  sku: string;
  gtin: string;
}

export interface Rating {
  count: number;
  rating: number;
}

export interface Seller {
  id: string;
  url: string;
  name: string;
  catalog_id: string;
  official_name: string;
}

export interface Specification {
  key: string;
  value: string;
}
