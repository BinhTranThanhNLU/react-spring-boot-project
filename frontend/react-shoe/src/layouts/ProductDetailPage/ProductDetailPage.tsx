import { useParams, useSearchParams } from "react-router-dom";
import { PageTitle } from "../utils/PageTitle";
import { ProductGallery } from "./components/ProductGallery";
import { ProductInfor } from "./components/ProductInfo";
import { ProductTabs } from "./components/ProductTabs";
import { useEffect, useState } from "react";
import { Product } from "../../models/Product";
import { API_BASE_URL } from "../../config/config";
import { SpinningLoading } from "../utils/SpinningLoading";
import { ErrorMessage } from "../utils/ErrorMessage";

export const ProductDetailPage = () => {
  const { id } = useParams<{ id: string }>();
  const [product, setProduct] = useState<Product | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [httpError, setHttpError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        setIsLoading(true);
        setHttpError(null);

        const url = `${API_BASE_URL}/products/${id}`;
        const response = await fetch(url);
        if (!response.ok) throw new Error("Something went wrong !!!");

        const data: Product = await response.json();
        setProduct(data);
      } catch (error: any) {
        setHttpError(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    if (id) fetchProduct();
  },[id]);

  if (isLoading) return <SpinningLoading />;
  if (httpError) return <ErrorMessage message={httpError} />;
  if (!product) return null;

  return (
    <main className="main">
      <PageTitle />
      <section id="product-details" className="product-details section">
        <div className="container" data-aos="fade-up" data-aos-delay="100">
          <div className="row g-4">
            <ProductGallery images={product.images} name={product.name}/>
            <ProductInfor product={product}/>
          </div>
          <ProductTabs />
        </div>
      </section>
    </main>
  );
};
