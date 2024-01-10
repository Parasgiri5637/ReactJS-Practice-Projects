import { useQuery } from "@tanstack/react-query";
import axios from "axios";

function fetchSuperHeroes() {
  return axios.get(`http://localhost:4000/superheroes`);
}

export default function useHeroes(onSuccess, onError) {
  return useQuery(
    ["super-Heroes"],
    fetchSuperHeroes,

    {
      // cacheTime: 5000, //* Default Time is 5 minutes
      // staleTime: 30000, //* Default Time is 0
      // refetchOnMount: true, //* Default is True we can change to "false" or "always"
      // refetchOnWindowFocus: true, //* Default is True we can change to "false" or "always"
      // refetchInterval: 2000, //* Pulling:automatic refething is paused if window loses focus if want background refething at regular intervals we need to use " refetchIntervalInBackground"
      // refetchIntervalInBackground: true,
      //enabled: false, //* stop React Query to fetch data on mount we want fetch data on Click with "refetch funtion"
      onSuccess,
      onError,
    }
  );
}
