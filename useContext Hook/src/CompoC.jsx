import { useContext } from "react";
import { FirstName, LastName } from "./App";

export default function CompoC() {
  const fName = useContext(FirstName);
  const lName = useContext(LastName);
  return (
    <h1>
      {fName} {lName}
    </h1>
  );
}
