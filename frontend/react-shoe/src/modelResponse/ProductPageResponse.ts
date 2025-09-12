import { ProductModel } from "../models/ProductModel";

export interface ProductPageResponse {
  products: ProductModel[];
  currentPage: number;
  totalPages: number;
  totalItems: number;
}
