import React, { useEffect, useState } from "react";
import { ProductCard } from "./ProductCard";
import { Product } from "../../../models/Product";
import { API_BASE_URL } from "../../../config/config";
import { ErrorMessage } from "../../utils/ErrorMessage";
import { SpinningLoading } from "../../utils/SpinningLoading";
import { Pagination } from "./Pagination";
import { ProductPageResponse } from "../../../models/ProductPageResponse";

export const ProductList = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [httpError, setHttpError] = useState<string | null>(null);

  // pagination
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 9;
  const [totalPages, setTotalPages] = useState(0);
  const [totalItems, setTotalItems] = useState(0);

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  useEffect(() => {
    const fetchProducts = async () => {
      setIsLoading(true);
      try {
        const url = `${API_BASE_URL}/products/category/1?page=${
          currentPage - 1
        }&size=${productsPerPage}`;
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
  }, [currentPage, productsPerPage]);

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
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          {/* hiển thị thông tin số lượng */}
          <div className="mt-3 text-end text-muted small">
            Trang {currentPage}/{totalPages} · Tổng {totalItems} sản phẩm
          </div>
        </div>
      </section>

      {totalPages > 1 && (
        <Pagination
          currentPage={currentPage}
          totalPage={totalPages}
          paginate={paginate}
        />
      )}
    </>
  );
};
