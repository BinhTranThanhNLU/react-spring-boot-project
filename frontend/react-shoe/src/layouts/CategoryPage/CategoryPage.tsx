import { useEffect, useState } from "react";
import { BrandFilterWidget } from "./components/BrandFilterWidget";
import { ColorFilterWidget } from "./components/ColorFilterWidget";
import { FilterBar } from "./components/FilterBar";
import { PageTitle } from "./components/PageTitle";
import { PricingRangeWidget } from "./components/PricingRangeWidget";
import { ProductCategoriesWidget } from "./components/ProductCategoriesWidget";
import { ProductList } from "./components/ProductList";
import { Brand } from "../../models/Brand";
import { API_BASE_URL } from "../../config/config";

export const CategoryPage = () => {

  //state category
  const [selectedCategoryId, setSelectedCategoryId] = useState<number>(1);

  //state brand
  const [brandsList, setBrandsList] = useState<Brand[]>([]);

  //state filter
  const [minPrice, setMinPrice] = useState<number | null>(null);
  const [maxPrice, setMaxPrice] = useState<number | null>(null);
  const [brands, setBrands] = useState<number[]>([]);
  const [colors, setColors] = useState<string[]>([]);
  const [keyword, setKeyword] = useState<string>("");

  useEffect(() => {
    const fetchBrands = async () => {
      try {
        const response = await fetch(`${API_BASE_URL}/brands`);
        if (!response.ok) throw new Error("Something went wrong");
        const data: Brand[] = await response.json();
        setBrandsList(data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchBrands();
  }, []);

  return (
    <main className="main">
      <PageTitle />

      <div className="container">
        <div className="row">
          <div className="col-lg-4 sidebar">
            <div className="widgets-container">
              <ProductCategoriesWidget setSelectedCategoryId={setSelectedCategoryId}/>
              <PricingRangeWidget
                minPrice={minPrice}
                maxPrice={maxPrice}
                setMinPrice={setMinPrice}
                setMaxPrice={setMaxPrice}
              />
              <ColorFilterWidget colors={colors} setColors={setColors} />
              <BrandFilterWidget brands={brands} setBrands={setBrands} allBrands={brandsList}/>
            </div>
          </div>

          <div className="col-lg-8">
            <FilterBar keyword={keyword} setKeyword={setKeyword}/>
            <ProductList
              keyword={keyword}
              categoryId={selectedCategoryId}
              minPrice={minPrice}
              maxPrice={maxPrice}
              brands={brands}
              colors={colors}
            />
          </div>
        </div>
      </div>
    </main>
  );
};
