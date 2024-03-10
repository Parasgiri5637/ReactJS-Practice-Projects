import { useEffect, useState } from "react";
import Nav from "./Nav";
import axios from "axios";

export default function Heroes() {
  const [data, setdata] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, isError] = useState(null);

  useEffect(() => {
    async function fetchHeroes() {
      try {
        const res = await axios.get(`http://localhost:4000/superheroes`);
        setdata(res.data);
      } catch (e) {
        isError(e.message);
      } finally {
        setIsLoading(false);
      }
    }
    fetchHeroes();
  }, []);

  return (
    <>
      <Nav />
      <h2 className="text-center">Traditional Way To Fetch Data</h2>
      {isLoading && <h1 className="text-center">Loading...</h1>}
      {error && <h1 className="text-center">{error}</h1>}
      <div className="heroCard">
        {!isLoading &&
          !error &&
          Array.isArray(data) &&
          data.map((hero) => (
            <div key={hero.id} className="card" style={{ width: "18rem" }}>
              <div className="card-body">
                <h5 className="card-title">Name:{hero.name}</h5>
                <h6 className="card-subtitle mb-2 text-body-secondary">
                  Original Name : {hero.alterEgo}
                </h6>
              </div>
            </div>
          ))}
      </div>
    </>
  );
}
