import './css/App.css'
import SummaryCardsContainer from './Components/SummaryCardsContainer'
import MaganementTable from './Components/MaganementTable'
import { useCallback, useEffect, useState } from 'react'
import Navbar from './Components/Navbar';

function App() { 
  const [inventoryData, setInvetoryData] = useState([]);
  const [isAdmin, setIsAdmin] = useState(true);
  const fetchData = useCallback(async() => {
      const res = await fetch("https://dev-0tf0hinghgjl39z.api.raw-labs.com/inventory")
      const data = await res.json();
      console.log(data);
      
      setInvetoryData(data.map((item) => ({...item, isDisabled: false})));
  }, []);

  useEffect(() => {
    fetchData()
  }, [fetchData])

  return (
    <div className='app'> 
        <Navbar isAdmin={isAdmin} setIsAdmin={setIsAdmin} />
        <SummaryCardsContainer inventoryData={inventoryData} />
        <MaganementTable isAdmin = {isAdmin} inventoryData={inventoryData} setInvetoryData={setInvetoryData}/>
    </div>
  )
}

export default App
