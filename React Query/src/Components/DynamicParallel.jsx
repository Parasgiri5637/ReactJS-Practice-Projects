import { useQueries } from "@tanstack/react-query";
import axios from "axios";
import Nav from "./Nav";

function fetchSuperHero(heroId) {
  return axios.get(`http://localhost:4000/superheroes/${heroId}`);
}

export default function DynamicParallel({ heroId }) {
  const dynamicQueries = useQueries(
    heroId.map((id) => {
      return {
        queryKey: ["super-hero", id],
        queryFn: () => fetchSuperHero(id),
      };
    })
  );

  console.log(dynamicQueries);

  return (
    <div>
      <Nav />
      DynamicParallel
    </div>
  );
}
