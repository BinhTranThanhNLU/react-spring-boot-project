import { useState } from "react";
import { BrandFilterWidget } from "./components/BrandFilterWidget";
import { ColorFilterWidget } from "./components/ColorFilterWidget";
import { FilterBar } from "./components/FilterBar";
import { PageTitle } from "./components/PageTitle";
import { Pagination } from "./components/Pagination";
import { PricingRangeWidget } from "./components/PricingRangeWidget";
import { ProductCategoriesWidget } from "./components/ProductCategoriesWidget";
import { ProductList } from "./components/ProductList";

export const CategoryPage = () => {

  return (
    <main className="main">
      <PageTitle />

      <div className="container">
        <div className="row">
          <div className="col-lg-4 sidebar">
            <div className="widgets-container">
              <ProductCategoriesWidget />
              <PricingRangeWidget />
              <ColorFilterWidget />
              <BrandFilterWidget />
            </div>
          </div>

          <div className="col-lg-8">
            <FilterBar />
            <ProductList />
            
          </div>
        </div>
      </div>
    </main>
  );
};
