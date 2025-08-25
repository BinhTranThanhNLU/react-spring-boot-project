export interface PricingRangeWidgetProps {
    minPrice: number | null;
    maxPrice: number | null;
    setMinPrice: (value: number | null) => void;
    setMaxPrice: (value: number | null) => void;
}