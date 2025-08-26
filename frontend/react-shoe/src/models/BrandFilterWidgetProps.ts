import { Brand } from "./Brand";

export interface BrandFilterWigetProps {
  brands: number[];
  setBrands: (value: number[]) => void;
  allBrands: Brand[];
}
