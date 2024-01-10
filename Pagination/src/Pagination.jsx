import { useEffect, useState } from "react";
import axios from "axios";

//* =========================== Pagination in using Frontend

export default function Pagination() {
  const [products, setProducts] = useState();
  const [page, setPage] = useState(1);
console.log(products?.length);
  function fetchProducts() {
    return axios.get(`https://dummyjson.com/products?limit=100`);
  }

  useEffect(() => {
    try {
      fetchProducts().then((data) => setProducts(data?.data?.products || []));
    } catch (error) {
      console.log(error.message);
    }
  }, []);

  const productsArr =
    Array.isArray(products) && products?.length > 0 ? products : [];

  function handlePagination(selectedPage) {
    if (
      selectedPage > 0 &&
      selectedPage <= products.length / 10 &&
      selectedPage !== page
    )
      setPage(selectedPage);
  }

  return (
    <>
      <div className="products">
        {productsArr.slice(page * 10 - 10, page * 10).map((item) => (
          <span key={item.id} className="products__single">
            <img src={item.thumbnail} alt={item.title} />
            <span>{item.title}</span>
          </span>
        ))}
      </div>
      <div className="pagination">
        <span
          onClick={() => handlePagination(page - 1)}
          className={page === 1 ? "disabledBtn" : ""}
        >
          ◀
        </span>
        {[...Array(Array.isArray(products) && products.length / 10)].map((_, i) => (
          <span
            key={i}
            onClick={() => handlePagination(i + 1)}
            className={page === i + 1 ? "activeBtn" : ""}
          >
            {i + 1}
          </span>
        ))}
        <span
          onClick={() => handlePagination(page + 1)}
          className={page  === products.length / 10 ? "disabledBtn" : ""}
        >
          ▶
        </span>
      </div>
    </>
  );
}
