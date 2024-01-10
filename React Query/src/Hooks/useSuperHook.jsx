import { useQuery } from "@tanstack/react-query";
import axios from "axios";

function fetchSuperHero(heroId) {
  return axios.get(`http://localhost:4000/superheroes/${heroId}`);
}

export default function useSuperHook(onSuccess, onError, id) {
  return useQuery(["super-Heroes", id], () => fetchSuperHero(id), {
    onError,
    onSuccess,
  });
}
