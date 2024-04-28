import SummaryCards from "./SummaryCard"
import "../css/Summarycard.css"
import { useEffect, useState } from "react"
interface InventoryInterface{
  name: string,
  category: string,
  value: string,
  quantity: number,
  price: string,
  isDisabled: boolean
}
const SummaryCardsContainer = ({inventoryData} : {inventoryData : InventoryInterface[]}) => {
  const [data, setData] = useState({
    totalProducts: 0,
    totalStoreValue: 0,
    outOfStock: 0,
    noOfCategory: 0
  });

  useEffect(() => {
    if (inventoryData.length > 0) {
      
      let value = 0;
      let zeroQuantity = 0;
      const cateCount = new Set(); 

      inventoryData.forEach((item) => {
        if (!item.isDisabled) {
          cateCount.add(item.category);
          const val = item.value === "0" ? 0 : item.value.split("$")[1];
          value+=Number(val);
          item.quantity <=0 && zeroQuantity++;
      }
      })

      setData({
        totalProducts: inventoryData.filter(item => !item.isDisabled).length,
        totalStoreValue: value,
        outOfStock: zeroQuantity,
        noOfCategory: cateCount.size
      })
    }
  }, [inventoryData]);

  return (
     <div className="summary-card-container">
       <SummaryCards  title="Total Products" value={`${data.totalProducts}`}/>
       <SummaryCards  title="Total Store Value" value={`${data.totalStoreValue}`}/>
       <SummaryCards  title="Out Of Stock" value={`${data.outOfStock}`}/>
       <SummaryCards  title="Total Categories" value={`${data.noOfCategory}`}/>
     </div>
  )
}

export default SummaryCardsContainer