import React, { useEffect, useState } from "react";
import { ProductCard } from "../../utils/ProductCard";
import { API_BASE_URL } from "../../../config/config";
import { ErrorMessage } from "../../utils/ErrorMessage";
import { SpinningLoading } from "../../utils/SpinningLoading";
import { Pagination } from "../../utils/Pagination";
import { ProductListProps } from "../../../types/ProductListProps";
import { ProductModel } from "../../../models/ProductModel";
import { ProductPageResponse } from "../../../modelResponse/ProductPageResponse";

export const ProductList: React.FC<ProductListProps> = ({
  keyword,
  categoryId,
  minPrice,
  maxPrice,
  brands,
  colors,
  page,
  setPage
}) => {
  // state product
  const [products, setProducts] = useState<ProductModel[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [httpError, setHttpError] = useState<string | null>(null);

  // state pagination
  const productsPerPage = 9;
  const [totalPages, setTotalPages] = useState(0);
  const [totalItems, setTotalItems] = useState(0);

  const paginate = (pageNumber: number) => setPage(pageNumber);

  useEffect(() => {
    setPage(1);
  }, [minPrice, maxPrice, brands, colors, categoryId]);

  useEffect(() => {
    const fetchProducts = async () => {
      setIsLoading(true);
      try {
        const params = new URLSearchParams();
        params.set("page", String(page - 1));
        params.set("size", String(productsPerPage));
        if (minPrice !== null) params.set("minPrice", String(minPrice));
        if (maxPrice !== null) params.set("maxPrice", String(maxPrice));
        if (colors && colors.length > 0) {
          colors.forEach((color) => params.append("colors", color));
        }
        if (brands && brands.length > 0) {
          brands.forEach((brand) => params.append("brands", String(brand)));
        }
        if (keyword) params.set("keyword", keyword);

        const url = keyword
          ? `${API_BASE_URL}/products/search?${params.toString()}`
          : `${API_BASE_URL}/products/category/${categoryId}?${params.toString()}`;

        const response = await fetch(url);
        if (!response.ok) throw new Error("Something went wrong !!");

        const data: ProductPageResponse = await response.json();

        setProducts(data.products);
        setTotalPages(data.totalPages);
        setTotalItems(data.totalItems);
      } catch (error: any) {
        setHttpError(error.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchProducts();
  }, [page, minPrice, maxPrice, brands, colors, categoryId, keyword]);

  if (isLoading) return <SpinningLoading />;
  if (httpError) return <ErrorMessage message={httpError} />;

  return (
    <>
      <section
        id="category-product-list"
        className="category-product-list section"
      >
        <div className="container" data-aos="fade-up" data-aos-delay="100">
          <div className="row g-4">
            {products.length > 0 ? (
              products.map((p) => <ProductCard key={p.id} product={p} />)
            ) : (
              <div className="mt-3">
                <div className="alert alert-warning text-center rounded shadow-sm">
                  <i className="bi bi-exclamation-triangle-fill me-2"></i>
                  Không tìm thấy sản phẩm
                </div>
              </div>
            )}
          </div>

          {/* hiển thị thông tin số lượng */}
          <div className="mt-3 text-end text-muted small">
            Trang {page}/{totalPages} · Tổng {totalItems} sản phẩm
          </div>
        </div>
      </section>

      {totalPages > 1 && (
        <Pagination
          currentPage={page}
          totalPage={totalPages}
          paginate={paginate}
        />
      )}
    </>
  );
};
