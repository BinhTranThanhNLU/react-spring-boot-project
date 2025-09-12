import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ProductModel } from "../../../models/ProductModel";
import { API_BASE_URL } from "../../../config/config";
import { SpinningLoading } from "../../utils/SpinningLoading";
import { ErrorMessage } from "../../utils/ErrorMessage";
import { StarsReview } from "../../utils/StarsReview";

export const RelatedProductsCarousel = () => {
  const { id } = useParams<{ id: string }>();
  const [relatedProducts, setRelatedProducts] = useState<ProductModel[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [httpError, setHttpError] = useState<string | null>(null);

  const chunkArray = (arr: any[], size: number) => {
    return arr.reduce((chunks, item, i) => {
      const chunkIndex = Math.floor(i / size);
      if (!chunks[chunkIndex]) {
        chunks[chunkIndex] = [];
      }
      chunks[chunkIndex].push(item);
      return chunks;
    }, [] as any[][]);
  };

  const slides = chunkArray(relatedProducts, 4);

  useEffect(() => {
    const fetchRelated = async () => {
      try {
        setIsLoading(true);
        setHttpError(null);

        const url = `${API_BASE_URL}/products/${id}/related?limit=8`;
        const response = await fetch(url);
        if (!response.ok) throw new Error("Không thể tải sản phẩm liên quan");

        const data: ProductModel[] = await response.json();
        setRelatedProducts(data);
      } catch (error: any) {
        setHttpError(error.message);
      } finally {
        setIsLoading(false);
      }
    };

    if (id) fetchRelated();
  }, [id]);

  if (isLoading) return <SpinningLoading />;
  if (httpError) return <ErrorMessage message={httpError} />;

  return (
    <div
      id="relatedProductsCarousel"
      className="carousel slide"
      data-bs-ride="carousel"
    >
      <div className="carousel-inner">
        {slides.map((group: ProductModel[], index: number) => (
          <div
            className={`carousel-item ${index === 0 ? "active" : ""}`}
            key={index}
          >
            <div className="row g-4">
              {group.map((product) => (
                <div className="col-md-3" key={product.id}>
                  <div className="product-card">
                    <div className="product-image">
                      <img
                        src={product.images[0]?.imageUrl}
                        className="main-image img-fluid"
                        alt={product.name}
                      />
                    </div>
                    <div className="product-details">
                      <div className="product-category">{product.brand}</div>
                      <h6 className="product-title">{product.name}</h6>
                      <div className="product-price">
                        <span className="fw-bold">
                          {product.discountedPrice.toLocaleString("vi-VN", {
                            style: "currency",
                            currency: "VND",
                          })}
                        </span>
                        <span className="fw-bold">
                          <StarsReview rating={5} reviews={128} size={10} />
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#relatedProductsCarousel"
        data-bs-slide="prev"
      >
        <span
          className="carousel-control-prev-icon"
          style={{ backgroundColor: "rgba(0,0,0,0.5)", borderRadius: "50%" }}
        ></span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#relatedProductsCarousel"
        data-bs-slide="next"
      >
        <span
          className="carousel-control-next-icon"
          style={{ backgroundColor: "rgba(0,0,0,0.5)", borderRadius: "50%" }}
        ></span>
      </button>
    </div>
  );
};
