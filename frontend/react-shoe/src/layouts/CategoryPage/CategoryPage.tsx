import { useState } from "react";
import { BrandFilterWidget } from "./components/BrandFilterWidget";
import { ColorFilterWidget } from "./components/ColorFilterWidget";
import { FilterBar } from "./components/FilterBar";
import { PageTitle } from "./components/PageTitle";
import { PricingRangeWidget } from "./components/PricingRangeWidget";
import { ProductCategoriesWidget } from "./components/ProductCategoriesWidget";
import { ProductList } from "./components/ProductList";

export const CategoryPage = () => {
  //state filter
  const [minPrice, setMinPrice] = useState<number | null>(null);
  const [maxPrice, setMaxPrice] = useState<number | null>(null);
  const [brand, setBrand] = useState<number | null>(null);
  const [color, setColor] = useState<string | null>(null);

  return (
    <main className="main">
      <PageTitle />

      <div className="container">
        <div className="row">
          <div className="col-lg-4 sidebar">
            <div className="widgets-container">
              <ProductCategoriesWidget />
              <PricingRangeWidget
                minPrice={minPrice}
                maxPrice={maxPrice}
                setMinPrice={setMinPrice}
                setMaxPrice={setMaxPrice}
              />
              <ColorFilterWidget />
              <BrandFilterWidget />
            </div>
          </div>

          <div className="col-lg-8">
            <FilterBar />
            <ProductList
              minPrice={minPrice}
              maxPrice={maxPrice}
              brand={brand}
              color={color}
            />
          </div>
        </div>
      </div>
    </main>
  );
};
