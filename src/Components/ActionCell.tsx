
import EditIcon from '@mui/icons-material/Edit';
import VisibilityIcon from '@mui/icons-material/Visibility';
import DeleteIcon from '@mui/icons-material/Delete';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';

interface InventoryInterface{
  name: string,
  category: string,
  value: string,
  quantity: number,
  price: string,
  isDisabled: boolean
}

const ActionCell = ({disableToggle, rowData, deleteRow, isAdmin, setShowModal}: {isAdmin: boolean, disableToggle: (val: string) => void, deleteRow: (val: string) => void, rowData: InventoryInterface, setShowModal: ({state, data}: {state: boolean, data: InventoryInterface}) => void}) => {
  return (
    <div className='action-cell'>
     <EditIcon onClick= {() => isAdmin && setShowModal({state: true, data: rowData})} style={{cursor: isAdmin ? "pointer" : "not-allowed", color: isAdmin ? "#387C21" : "gray"}} />
     { !rowData.isDisabled ?  <VisibilityIcon onClick={() => disableToggle(rowData.name)} style={{cursor: isAdmin ? "pointer": "not-allowed", color: isAdmin ? "#A47EB0": "gray"}} /> : <VisibilityOffIcon onClick={() => disableToggle(rowData.name)} style={{cursor: "pointer", color: "#A47EB0"}} />}
     <DeleteIcon onClick = {() => deleteRow(rowData.name)} style={{cursor: isAdmin ? "pointer": "not-allowed", color: isAdmin ? "#EA3323" : "gray"}}/>
    </div>
  )
}

export default ActionCell