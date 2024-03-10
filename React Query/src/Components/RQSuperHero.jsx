import Nav from "./Nav";
import { Link, useParams } from "react-router-dom";
import useSuperHook from "../Hooks/useSuperHook";

export default function RQSuperHero() {
  const { id } = useParams();
  function onSuccess(data) {
    console.log(`Perform side effect after data fetching`, data);
  }

  function onError(error) {
    console.log(`${error.message}`);
  }
  const { data, isLoading, error, isError, isFetching } = useSuperHook(
    onSuccess,
    onError,
    id
  );
  // console.log(isLoading, isFetching);
  const heroList = data?.data;

  return (
    <>
      <Nav />
      <h2 className="text-center">Using React Query to Fetch Data</h2>

      <div className="heroCard">
        {!heroList && isFetching && isLoading && (
          <h1 className="text-center">Loading...</h1>
        )}
        {isError && <h1 className="text-center">{error.message}</h1>}
        {!isLoading && !isError && (
          <div key={heroList.id} className="card" style={{ width: "18rem" }}>
            <div className="card-body">
              <h5 className="card-title">Name:{heroList.name}</h5>
              <h6 className="card-subtitle mb-2 text-body-secondary">
                Original Name : {heroList.alterEgo}
              </h6>
            </div>
            <Link to={`/rqheroes`}>Back</Link>
          </div>
        )}
      </div>
    </>
  );
}
