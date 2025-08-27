export interface ProductListProps {
    categoryId: number;
    minPrice: number|null;
    maxPrice: number|null;
    brands: number[]|null;
    colors: string[]|null;
}