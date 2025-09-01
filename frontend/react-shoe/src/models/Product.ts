import { ProductImage } from "./ProductImage";
import { ProductVariant } from "./ProductVariant";

export interface Product {
    id: number,
    name: string,
    price: number,
    discountPercent: number;
    discountedPrice: number;
    description: string,
    totalQuantity: number;
    brand: string | null,
    category: string | null,
    images: ProductImage[];
    variants: ProductVariant[];
}