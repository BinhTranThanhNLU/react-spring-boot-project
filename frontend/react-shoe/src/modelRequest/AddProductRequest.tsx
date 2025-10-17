export interface AddProductRequest {
  id?: number;
  name: string;
  price: number;
  description: string;
  brand: number;
  category: number;
  color: string;
  size: string;
  stockQuantity: number;
  imageUrl: string;
}