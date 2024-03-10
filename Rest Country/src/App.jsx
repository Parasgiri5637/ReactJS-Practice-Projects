
import './App.css'
import AllCountry from './AllCountry'
import Capitals from './Capitals'
import { useState } from 'react'

function App() {
  const [capitalName,setCapitalName] = useState()
 
  return (
    <div className='App'>
     <AllCountry setCapitalName={setCapitalName}/>
     <Capitals capitalName={capitalName} />
    </div>
  )
}

export default App
