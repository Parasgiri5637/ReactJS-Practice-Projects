import { FirstName, LastName } from "./App";

export default function CompoC() {
  return (
    <>
      <FirstName.Consumer>
        {(fName) => {
          return (
            <LastName.Consumer>
              {(lastname) => {
                return (
                  <h1>
                    My name is {fName} {lastname}
                  </h1>
                );
              }}
            </LastName.Consumer>
          );
        }}
      </FirstName.Consumer>
    </>
  );
}
