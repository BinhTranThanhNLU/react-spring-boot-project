import React, { useEffect, useState } from "react";
import { ProductCard } from "../../utils/ProductCard";
import { Product } from "../../../models/Product";
import { API_BASE_URL } from "../../../config/config";
import { ErrorMessage } from "../../utils/ErrorMessage";
import { SpinningLoading } from "../../utils/SpinningLoading";
import { Pagination } from "../../utils/Pagination";
import { ProductPageResponse } from "../../../models/ProductPageResponse";
import { SearchProductListProps } from "../../../types/SearchProductListProps";

export const SearchProductList: React.FC<SearchProductListProps> = ({ keyword, page, setPage, onTotalResultsChange }) => {

  const [products, setProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [httpError, setHttpError] = useState<string | null>(null);

  // pagination
  const productsPerPage = 9;
  const [totalPages, setTotalPages] = useState(0);
  const [totalItems, setTotalItems] = useState(0);

  const paginate = (pageNumber: number) => setPage(pageNumber);

  useEffect(() => {
    const fetchProducts = async () => {
      setIsLoading(true);
      try {
        const params = new URLSearchParams();
        params.set("page", String(page - 1));
        params.set("size", String(productsPerPage));
        if (keyword) params.set("keyword", keyword);

        const response = await fetch(
          `${API_BASE_URL}/products/search?${params.toString()}`
        );
        if (!response.ok) throw new Error("Something went wrong !!");

        const data: ProductPageResponse = await response.json();
        setProducts(data.products);
        setTotalPages(data.totalPages);
        setTotalItems(data.totalItems);
        onTotalResultsChange(data.totalItems);
      } catch (error: any) {
        setHttpError(error.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchProducts();
  }, [page, keyword]);

  if (isLoading) return <SpinningLoading />;
  if (httpError) return <ErrorMessage message={httpError} />;

  return (
    <>
      <section id="search-product-list" className="search-product-list section">
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

          {/* thông tin số lượng */}
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
