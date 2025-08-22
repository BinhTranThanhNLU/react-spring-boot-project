import { useEffect, useState } from "react";
import { ProductCard } from "./ProductCard";
import { Product } from "../../../models/Product";
import { API_BASE_URL } from "../../../config/config";
import { ErrorMessage } from "../../utils/ErrorMessage";
import { SpinningLoading } from "../../utils/SpinningLoading";

export const ProductList = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [httpError, setHttpError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(`${API_BASE_URL}/products/category/1`);
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
  );
};
