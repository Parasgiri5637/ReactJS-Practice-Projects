import { useEffect, useState } from "react";

export default function AllCountry({ setCapitalName }) {
  const [allCountry, setAllCountry] = useState();
  useEffect(() => {
    async function fetchAllCountry() {
      try {
        const fetchCountry = await fetch("https://restcountries.com/v3.1/all");
        const res = await fetchCountry.json();
        setAllCountry(res);
      } catch (error) {
        console.log(error.message);
      }
    }
    fetchAllCountry();
  }, []);

  function handleCountry(e) {
    const country = e.target.value.toLowerCase();
    setCapitalName(country);
  }



//   console.log(Array.isArray(allCountry) && allCountry);
  return (
    <div>
      <h3>AllCountry</h3>
      <select name="" id="" onChange={handleCountry}>
        {Array.isArray(allCountry)
          ? allCountry.map((curr, i) => (
              <option value={curr?.capital} key={i}>
                {curr?.name?.common}
              </option>
            ))
          : null}
      </select>
    </div>
  );
}
