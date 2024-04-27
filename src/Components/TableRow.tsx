import ActionCell from "./ActionCell"
import Cell from "./Cell"
interface InventoryInterface{
  name: string,
  category: string,
  value: string,
  quantity: number,
  price: string,
  isDisabled: boolean
}


const TableRow  = ({rowData, disableToggle, deleteRow, isAdmin, setShowModal}: { rowData: InventoryInterface, isAdmin: boolean, disableToggle: (val: string) => void, deleteRow: (val: string) => void, setShowModal: ({state, data}: {state: boolean, data: InventoryInterface}) => void}) => {
  return (
    <div className="table-row">
      <Cell value={rowData.name}/>
      <Cell value={rowData.category}/>
      <Cell value={rowData.price}/>
      <Cell value={String(rowData.quantity)}/>
      <Cell value={rowData.value}/>
      <ActionCell setShowModal={setShowModal} isAdmin={isAdmin} disableToggle={disableToggle} rowData={rowData} deleteRow = {deleteRow} />     
      
    </div>
  )
}

export default TableRow