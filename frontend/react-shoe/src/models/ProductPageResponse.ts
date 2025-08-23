import { Product } from "./Product";

export interface ProductPageResponse {
  products: Product[];
  currentPage: number;
  totalPages: number;
  totalItems: number;
}
