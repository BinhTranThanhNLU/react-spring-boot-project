import { ProductImage } from "./ProductImage";

export interface Product {
    id: number,
    name: string,
    price: number,
    description: string,
    brand: string | null,
    category: string | null,
    images: ProductImage[];
}