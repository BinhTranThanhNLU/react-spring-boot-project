import { ProductImage } from "./ProductImage";
import { ProductVariant } from "./ProductVariant";

export interface Product {
    id: number,
    name: string,
    price: number,
    description: string,
    brand: string | null,
    category: string | null,
    images: ProductImage[];
    variants: ProductVariant[];
}