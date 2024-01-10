import Nav from "./Nav";
import useHeroes from "../Hooks/useHeroes";
import { Link } from "react-router-dom";

export default function RQHeroes() {
  function onSuccess(data) {
    console.log(`Perform side effect after data fetching`, data);
  }

  function onError(error) {
    console.log(`${error.message}`);
  }
  const { data, isLoading, error, isError, isFetching, refetch } = useHeroes(
    onSuccess,
    onError
  );
  // console.log(isLoading, isFetching);
  const heroList = data?.data;
  return (
    <>
      <Nav />
      <h2 className="text-center">Using React Query to Fetch Data</h2>
      <button onClick={refetch}>Fetch Heroes</button>
      <div className="heroCard">
        {!heroList && isFetching && isLoading && (
          <h1 className="text-center">Loading...</h1>
        )}
        {isError && <h1 className="text-center">{error.message}</h1>}
        {!isLoading &&
          !isError &&
          Array.isArray(heroList) &&
          heroList.map((hero) => (
            <div key={hero.id} className="card" style={{ width: "18rem" }}>
              <div className="card-body">
                <h5 className="card-title">Name:{hero.name}</h5>
              </div>
              <Link to={`/rqsuperhero/${hero.id}`}>View</Link>
            </div>
          ))}
      </div>
    </>
  );
}
