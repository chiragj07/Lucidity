import TableHeaderRow from "./TableHeaderRow"
import "../css/Table.css"
import TableRow from "./TableRow"
import Modal from "./Modal"
import { useState } from "react"

interface InventoryInterface{
  name: string,
  category: string,
  value: string,
  quantity: number,
  price: string,
  isDisabled: boolean
}

const MaganementTable = ({inventoryData, setInvetoryData, isAdmin}: {inventoryData: InventoryInterface[], isAdmin: boolean, setInvetoryData: (val: InventoryInterface[]) => void }) => {
  
  const disableToggle = (name: string) => {
    if (!isAdmin) return;
    setInvetoryData(inventoryData.map((item) => item.name === name ? {...item, isDisabled: !item.isDisabled} : item))
  }

  const deleteRow = (name: string) => {
    if (!isAdmin) return;
    setInvetoryData(inventoryData.filter((item) => item.name !== name))
  }

  const [showModal, setShowModal] = useState({state: false, data: {}});

  return (
    <div className="table-container">
      <TableHeaderRow />
      {inventoryData.map((item) => <TableRow key={item.name} rowData={item} disableToggle={disableToggle} deleteRow={deleteRow} isAdmin={isAdmin} setShowModal={setShowModal}/> )}
      <Modal setInvetoryData={setInvetoryData} inventoryData={inventoryData} showModal={showModal} setShowModal={setShowModal} />
    </div>
  )
}

export default MaganementTable