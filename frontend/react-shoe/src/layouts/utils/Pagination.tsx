import React from "react";

export const Pagination: React.FC<{
  currentPage: number;
  totalPage: number;
  paginate: (page: number) => void;
}> = ({ currentPage, totalPage, paginate }) => {
  const pageNumber = [];

  for (let i = currentPage - 2; i <= currentPage + 2; i++) {
    if (i >= 1 && i <= totalPage) {
      pageNumber.push(i);
    }
  }

  return (
    <section id="category-pagination" className="category-pagination section">
      <div className="container">
        <nav
          className="d-flex justify-content-center"
          aria-label="Page navigation"
        >
          <ul className="pagination">
            <li className={`page-item ${currentPage === 1 ? "disabled" : ""}`}>
              <a
                href="#"
                className="page-link"
                aria-label="Previous page"
                onClick={(e) => {
                  e.preventDefault();
                  if (currentPage > 1) paginate(currentPage - 1);
                }}
              >
                <i className="bi bi-arrow-left"></i>
              </a>
            </li>

            {pageNumber.map((page) => (
              <li
                key={page}
                className={`page-item ${currentPage === page ? "active" : ""}`}
              >
                <a
                  href="#"
                  className="page-link"
                  onClick={(e) => {
                    e.preventDefault();
                    paginate(page);
                  }}
                >
                  {page}
                </a>
              </li>
            ))}

            <li
              className={`page-item ${
                currentPage === totalPage ? "disabled" : ""
              }`}
            >
              <a
                href="#"
                className="page-link"
                aria-label="Next page"
                onClick={(e) => {
                  e.preventDefault();
                  if (currentPage < totalPage) paginate(currentPage + 1);
                }}
              >
                <i className="bi bi-arrow-right"></i>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </section>
  );
};
