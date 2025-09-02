export interface ProductListProps {
    keyword?: string;
    categoryId: number;
    minPrice: number|null;
    maxPrice: number|null;
    brands: number[]|null;
    colors: string[]|null;
    page: number;
    setPage: (value: number) => void;
}