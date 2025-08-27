import React, { useEffect, useState } from "react";
import { Category } from "../../../models/Category";
import { API_BASE_URL } from "../../../config/config";
import { SpinningLoading } from "../../utils/SpinningLoading";
import { CategoryWidgetProps } from "../../../models/CategoryWidgetProps";

export const ProductCategoriesWidget: React.FC<CategoryWidgetProps> = ({
  setSelectedCategoryId,
}) => {
  const [categories, setCategories] = useState<Category[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const url = `${API_BASE_URL}/categories`;
        const response = await fetch(url);
        if (!response.ok) throw new Error("Something went wrong !!!");

        const data: Category[] = await response.json();
        setCategories(data);
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchCategories();
  }, []);

  if (isLoading) return <SpinningLoading />;

  return (
    <div className="product-categories-widget widget-item">
      <h3 className="widget-title">Danh mục</h3>

      <ul className="category-tree list-unstyled mb-0">
        {categories.map((category) => (
          <li className="category-item" key={category.id}>
            <div
              className="d-flex justify-content-between align-items-center category-header collapsed"
              data-bs-toggle="collapse"
              data-bs-target={`#category-root-${category.id}`}
              aria-expanded="false"
              aria-controls={`category-root-${category.id}`}
            >
              <a
                href="javascript:void(0)"
                className="category-link"
                onClick={() => setSelectedCategoryId(category.id)}
              >
                {category.name}
              </a>
              {category.subCategories?.length > 0 && (
                <span className="category-toggle">
                  <i className="bi bi-chevron-down"></i>
                  <i className="bi bi-chevron-up"></i>
                </span>
              )}
            </div>

            {category.subCategories?.length > 0 && (
              <ul
                id={`category-root-${category.id}`}
                className="subcategory-list list-unstyled collapse ps-3 mt-2"
              >
                {category.subCategories.map((sub) => (
                  <li className="category-item" key={sub.id}>
                    <div
                      className="d-flex justify-content-between align-items-center category-header collapsed"
                      data-bs-toggle="collapse"
                      data-bs-target={`#category-${category.id}-${sub.id}`}
                      aria-expanded="false"
                      aria-controls={`category-${category.id}-${sub.id}`}
                    >
                      <a
                        href="javascript:void(0)"
                        className="category-link"
                        onClick={() => setSelectedCategoryId(sub.id)}
                      >
                        {sub.name}
                      </a>
                      {sub.subCategories?.length > 0 && (
                        <span className="category-toggle">
                          <i className="bi bi-chevron-down"></i>
                          <i className="bi bi-chevron-up"></i>
                        </span>
                      )}
                    </div>

                    {sub.subCategories?.length > 0 && (
                      <ul
                        id={`category-${category.id}-${sub.id}`}
                        className="subcategory-list list-unstyled collapse ps-3 mt-2"
                      >
                        {sub.subCategories.map((child) => (
                          <li className="category-item" key={child.id}>
                            <a
                              href="javascript:void(0)"
                              className="category-link"
                              onClick={() => setSelectedCategoryId(child.id)}
                            >
                              {child.name}
                            </a>
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};
