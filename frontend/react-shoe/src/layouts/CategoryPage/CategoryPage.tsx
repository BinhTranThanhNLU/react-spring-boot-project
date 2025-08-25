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
  const [brands, setBrands] = useState<number[]>([]);
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
              <ColorFilterWidget color={color} setColor={setColor} />
              <BrandFilterWidget brands={brands} setBrands={setBrands} />
            </div>
          </div>

          <div className="col-lg-8">
            <FilterBar />
            <ProductList
              minPrice={minPrice}
              maxPrice={maxPrice}
              brands={brands}
              color={color}
            />
          </div>
        </div>
      </div>
    </main>
  );
};
