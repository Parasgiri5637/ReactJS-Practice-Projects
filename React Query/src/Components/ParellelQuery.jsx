import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import Nav from "./Nav";

function fetchSuperHero() {
  return axios.get(`http://localhost:4000/superheroes`);
}

function fetchFriends() {
  return axios.get(`http://localhost:4000/friends`);
}

export default function ParellelQuery() {
  const { data: superHero, isLoading: isSuperHeroLoading } = useQuery(
    ["super-heroes"],
    fetchSuperHero
  );
  const { data: friends, isLoading: isFriendsLoading } = useQuery(
    ["friends"],
    fetchFriends
  );

  return (
    <div>
      <Nav />
      ParellelQuery
    </div>
  );
}
