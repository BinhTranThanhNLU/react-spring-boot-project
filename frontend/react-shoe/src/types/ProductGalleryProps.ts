import { ProductImageModel } from "../models/ProductImageModel";

export interface ProductGalleryProps {
    images: ProductImageModel[];
    name: string;
}