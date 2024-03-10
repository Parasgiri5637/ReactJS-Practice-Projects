import { useEffect, useState } from "react";
import axios from "axios";

//* =========================== Pagination in using Backend

export default function Pagination2() {
  const [products, setProducts] = useState();
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  function fetchProducts(page) {
    return axios.get(
      `https://dummyjson.com/products?limit=10&skip=${page * 10 - 10}`
    );
  }

  useEffect(() => {
    try {
      fetchProducts(page).then((data) => {
        setProducts(data?.data?.products || []);
        setTotalPages(data?.data?.total / 10);
        
      });
    } catch (error) {
      console.log(error.message);
    }
  }, [page]);

  const productsArr = Array.isArray(products) ? products : [];

  function handlePagination(selectedPage) {
    if (selectedPage > 0 && selectedPage <= totalPages && selectedPage !== page)
      setPage(selectedPage);
  }

  return (
    <>
      <div className="products">
        {productsArr.map((item) => (
          <span key={item.id} className="products__single">
            <img src={item?.thumbnail} alt={item?.title} />
            <span>{item?.title}</span>
          </span>
        ))}
      </div>
      <div className="pagination">
        <span onClick={() => handlePagination(page - 1)} className={page === 1 ? "disabledBtn" : ""}>◀</span>
        {[...Array(totalPages)].map((_, i) => (
          <span
            key={i}
            onClick={() => handlePagination(i + 1)}
            className={page === i + 1 ? "activeBtn" : ""}
          >
            {i + 1}
          </span>
        ))}
        <span onClick={() => handlePagination(page + 1)} className={page  === totalPages ? "disabledBtn" : ""}>▶</span>
      </div>
    </>
  );
}
