import { useEffect, useState } from "react";
import { BrandFilterWidget } from "./components/BrandFilterWidget";
import { ColorFilterWidget } from "./components/ColorFilterWidget";
import { FilterBar } from "./components/FilterBar";
import { PageTitle } from "../utils/PageTitle";
import { PricingRangeWidget } from "./components/PricingRangeWidget";
import { ProductCategoriesWidget } from "./components/ProductCategoriesWidget";
import { ProductList } from "./components/ProductList";
import { BrandModel } from "../../models/BrandModel";
import { API_BASE_URL } from "../../config/config";
import { useParams, useSearchParams } from "react-router-dom";

export const CategoryPage = () => {
  //state category
  const { id } = useParams<{ id: string }>();
  const categoryId = id ? parseInt(id) : 1;

  //state brand
  const [brandsList, setBrandsList] = useState<BrandModel[]>([]);

  //search params
  const [searchParams, setSearchParams] = useSearchParams();

  //state filter
  const [minPrice, setMinPrice] = useState<number | null>(
    searchParams.get("minPrice") ? Number(searchParams.get("minPrice")) : null
  );
  const [maxPrice, setMaxPrice] = useState<number | null>(
    searchParams.get("maxPrice") ? Number(searchParams.get("maxPrice")) : null
  );
  const [brands, setBrands] = useState<number[]>(
    searchParams.getAll("brands").map(Number)
  );
  const [colors, setColors] = useState<string[]>(searchParams.getAll("colors"));
  const [keyword, setKeyword] = useState<string>(
    searchParams.get("keyword") || ""
  );
  //state page
  const [page, setPage] = useState<number>(
    searchParams.get("page") ? Number(searchParams.get("page")) : 1
  );

  useEffect(() => {
    const fetchBrands = async () => {
      try {
        const response = await fetch(`${API_BASE_URL}/brands`);
        if (!response.ok) throw new Error("Something went wrong");
        const data: BrandModel[] = await response.json();
        setBrandsList(data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchBrands();
  }, []);

  useEffect(() => {
    const params: any = {};
    if (minPrice !== null) params.minPrice = String(minPrice);
    if (maxPrice !== null) params.maxPrice = String(maxPrice);
    if (keyword) params.keyword = keyword;
    if (brands.length > 0) params.brands = brands.map(String);
    if (colors.length > 0) params.colors = colors;
    if (page > 1) params.page = String(page);

    setSearchParams(params);
  }, [minPrice, maxPrice, brands, colors, keyword, page, setSearchParams]);

  return (
    <main className="main">
      <PageTitle
        title="Danh mục sản phẩm"
        breadcrumbs={[
          { label: "Trang chủ", path: "/home" },
          { label: "Danh mục" },
        ]}
      />

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
              <ColorFilterWidget colors={colors} setColors={setColors} />
              <BrandFilterWidget
                brands={brands}
                setBrands={setBrands}
                allBrands={brandsList}
              />
            </div>
          </div>

          <div className="col-lg-8">
            <FilterBar keyword={keyword} setKeyword={setKeyword} />
            <ProductList
              keyword={keyword}
              categoryId={categoryId}
              minPrice={minPrice}
              maxPrice={maxPrice}
              brands={brands}
              colors={colors}
              page={page}
              setPage={setPage}
            />
          </div>
        </div>
      </div>
    </main>
  );
};
