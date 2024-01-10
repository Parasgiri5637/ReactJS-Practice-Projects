import { useQuery } from "@tanstack/react-query";
import axios from "axios";

import Nav from "./Nav";

function fecthUserByEmail(id) {
  return axios.get(`http://localhost:4000/users/${id}`);
}

function fetchChannelId(channeId) {
  return axios.get(`http://localhost:4000/channels/${channeId}`);
}

export default function DependentQueries({ email }) {
  const { data: user } = useQuery(["user", email], () =>
    fecthUserByEmail(email)
  );

  const emailId = user?.data.id;

  const { data: channel } = useQuery(["channel", emailId], () =>
    fetchChannelId(emailId)
  );

  console.log(channel?.data.id);

  return (
    <div>
      <Nav />
      DependentQueries
    </div>
  );
}
