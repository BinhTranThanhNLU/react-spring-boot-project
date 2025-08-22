import React, { useEffect, useState } from "react";
import { ProductCard } from "./ProductCard";
import { Product } from "../../../models/Product";
import { API_BASE_URL } from "../../../config/config";
import { ErrorMessage } from "../../utils/ErrorMessage";
import { SpinningLoading } from "../../utils/SpinningLoading";
import { Pagination } from "./Pagination";

export const ProductList = () => {
  //product
  const [products, setProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [httpError, setHttpError] = useState<string | null>(null);

  //pagination
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage, setProductsPerPage] = useState(16);
  const [totalAmountOfProducts, setTotalAmountOfProducts] = useState(0);
  const [totalPages, setTotalPages] = useState(0);

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  let lastItem =
    productsPerPage * currentPage <= totalAmountOfProducts
      ? productsPerPage * currentPage
      : totalAmountOfProducts;

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const url = `${API_BASE_URL}/products/category/1?page=${
          currentPage - 1
        }&size=${productsPerPage}`;
        const response = await fetch(url);
        if (!response.ok) throw new Error("Something went wrong !!");

        const data: Product[] = await response.json();
        setProducts(data);
      } catch (error: any) {
        setHttpError(error.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchProducts();
  }, []);

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
