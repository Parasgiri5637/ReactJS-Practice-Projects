import { useReducer } from "react";

const initialState = { jokes: "", error: "", isLoading: false };

function reducer(state, action) {
  switch (action.type) {
    case "loadingTrue":
      return { ...state, isLoading: true };
    case "loadingFalse":
      return { ...state, isLoading: false };
    case "jokes":
      return { ...state, jokes: action.payload };
    case "emptyError":
      return { ...state, error: "" };
    case "error":
      return { ...state, error: action.payload };
    default:
      throw new Error(`Unknown action type: ${action.type}`);
  }
}

export default function useFetchJokes() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const { jokes, error, isLoading } = state;

  async function fetchJokes() {
    try {
      dispatch({ type: "loadingTrue" });

      dispatch({ type: "emptyError" });
      const res = await fetch(`https://icanhazdadjoke.com/`, {
        headers: {
          Accept: "application/json",
        },
      });
      if (!res.ok)
        throw new Error(`Could not fetch jokes, status: ${res.status}`);
      const data = await res.json();

      dispatch({ type: "jokes", payload: data.joke });

      dispatch({ type: "emptyError" });
    } catch (e) {
      dispatch({ type: "error", payload: e.message });
    } finally {
      dispatch({ type: "loadingFalse" });
    }
  }

  return { jokes, error, isLoading, fetchJokes };
}

//* =============================================== With useSate

/* 
import { useState } from "react";

export default function useFetchJokes() {
  const [jokes, setJokes] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  async function fetchJokes() {
    try {
      setIsLoading(true);
      setError("");
      const res = await fetch(`https://icanhazdadjoke.com/`, {
        headers: {
          Accept: "application/json",
        },
      });
      if (!res.ok)
        throw new Error(`Could not fetch jokes, status: ${res.status}`);
      const data = await res.json();
      setJokes(data.joke);
      setError("");
    } catch (e) {
      setError(e.message);
    } finally {
      setIsLoading(false);
    }
  }

  return { jokes, error, isLoading, fetchJokes };
}

*/
