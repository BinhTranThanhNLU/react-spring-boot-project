import React from "react";

export const Pagination:React.FC<{currentPage:number, totalPage:number, paginate:any}> = ({currentPage, totalPage, paginate}) => {

  const pageNumber = [];

  for(let i=currentPage-2; i<=currentPage+2; i++) {
    if(i>=1 && i<=totalPage) {
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
          <ul>
            <li>
              <a href="#" aria-label="Previous page" onClick={() => {paginate(1)}}>
                <i className="bi bi-arrow-left"></i>
                <span className="d-none d-sm-inline">Previous</span>
              </a>
            </li>

            {
              pageNumber.map((page) => (
                <li key={page} className={currentPage===page ? "active" : ""} onClick={() => {paginate(page)}}>
                  <a>{page}</a>
                </li>
              ))
            }


            <li>
              <a href="#" aria-label="Next page" onClick={() => {paginate(totalPage)}}>
                <span className="d-none d-sm-inline">Next</span>
                <i className="bi bi-arrow-right"></i>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </section>
  );
};
