import { useEffect, useState } from "react"


export default function Capitals({capitalName}) {
const [capitalNM,setCapitalNM] = useState()



    useEffect( () =>  {
    async function fetchAllCountry(){
        try {
            const fetchCapital = await fetch(`https://restcountries.com/v3.1/capital/${capitalName}`);
        const res = await fetchCapital.json()
        setCapitalNM(res)
        } catch (error) {
            console.log(error.message);
        }   
    }
    fetchAllCountry()
},[capitalName])

  return (
    <div>
    <h3>Capitals</h3>
    {Array.isArray(capitalNM) && capitalNM[0]?.capital ? capitalNM[0]?.capital.map((curr, i) => (
    <h4 key={i}>{curr}</h4>
)) : null}

    </div>
  )
}
