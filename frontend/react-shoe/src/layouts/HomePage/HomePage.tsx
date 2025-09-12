import { useEffect, useState } from "react";
import { ProductModel } from "../../models/ProductModel";
import { Categories } from "./components/Categories";
import { Hero } from "./components/Hero";
import { ListProductHome } from "./components/ListProductHome";
import { SpinningLoading } from "../utils/SpinningLoading";
import { ErrorMessage } from "../utils/ErrorMessage";

export const HomePage = () => {
  const [products, setProducts] = useState<ProductModel[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [httpError, setHttpError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      const baseUrl: string = "http://localhost:8080/api/products";

      const response = await fetch(baseUrl);

      if (!response.ok) {
        throw new Error("Something went wrong !!");
      }

      const data: ProductModel[] = await response.json();
      setProducts(data);
      setIsLoading(false);
    };

    fetchProducts().catch((error: any) => {
      setIsLoading(false);
      setHttpError(error.message);
    });
  }, []);

  if (isLoading) return <SpinningLoading />;
  if (httpError) return <ErrorMessage message={httpError} />;

  return (
    <main className="main">
      <Hero />
      <Categories />
      <ListProductHome products={products} />
    </main>
  );
};
