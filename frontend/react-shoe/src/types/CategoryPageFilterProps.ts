import { BrandModel } from "../models/BrandModel";

export interface BrandFilterWigetProps {
  brands: number[];
  setBrands: (value: number[]) => void;
  allBrands: BrandModel[];
}

export interface ColorFilterWidgetProps {
  colors: string[];
  setColors: (colors: string[]) => void;
}

export interface FilterBarProps {
    keyword: string;
    setKeyword: (value: string) => void;
}

export interface PricingRangeWidgetProps {
    minPrice: number | null;
    maxPrice: number | null;
    setMinPrice: (value: number | null) => void;
    setMaxPrice: (value: number | null) => void;
}