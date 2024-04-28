import "../css/Modal.css"
import CloseIcon from '@mui/icons-material/Close';
import InputField from "./InputField";
import { useEffect, useState } from "react";
interface InventoryInterface{
  name: string,
  category: string,
  value: string,
  quantity: number,
  price: string,
  isDisabled: boolean
}

function isValid(str) {
    return /^\d+$/.test(str);
}


const Modal = ({setShowModal,inventoryData, setInvetoryData, showModal} : {showModal: { state: boolean, data:InventoryInterface} , setShowModal: ({state, data}: {state: false, data: InventoryInterface }) => void, setInvetoryData: (data: InventoryInterface[]) => void, inventoryData: InventoryInterface[] } ) => {
  console.log(showModal);
  const [category, setCategory]= useState("")
  const [price, setPrice]= useState("")
  const [quantity, setQuantity]= useState(0)
  const [value, setValue]= useState("")

  const handleClose = () => {
	setError("")
	setShowModal({state: false, data: {}})
	
  }


  const [error, setError] = useState(""); 

  const handleSaveData = () => {
     const {data} = showModal;
     if (!isValid(price)) {
	setError("Price can only be a number")
	return
      }
     if (!isValid(value)) {
	setError("Value can only be a number")
	return
      }
     
     const newInventory = inventoryData.map((item) => item.name !== data.name ? item : {...item, 
      price: price === "0" ? "0" : `$${price}`,
      value: value === "0" ? "0" : `$${value}`,
      quantity: quantity,
      category: category
    })
     setInvetoryData(newInventory)
     setShowModal({state: false, data: {}})
  }

  useEffect(() => {
    if (Object.keys(showModal.data). length > 0) {
      const {category, price, value, quantity} = showModal.data;
       setCategory(category)
       setPrice(price.startsWith("$") ? price.split("$")[1] : price)
       setValue(value.startsWith("$") ? value.split("$")[1] : value)
       setQuantity(quantity)
    }
  }, [showModal])

  return (
    <div className='modal-container' style={{display: showModal.state ? "flex" : "none"}}>
      <div className="modal-content">
        <div className="modal-header">
          <h2>{"Edit Product"}</h2>
          <CloseIcon onClick={handleClose} style={{color: "#CEED51", cursor: "pointer"}} />
        </div>
        <span>{showModal.data?.name}</span>
        <div className="input-field-containers">
          <InputField label="Category" type="text" placeholder="Category" value={category} onChange={(e: any) => setCategory(e.target.value) } />
          <InputField label="Price" type="text" placeholder="Price" value={price} onChange={(e: any) => {
		setError("");	
		setPrice(e.target.value)} }/>
          <InputField label="Quantity" type="number" placeholder="Quantity" value={String(quantity)} onChange={(e: any) => setQuantity(e.target.value) }/>
          <InputField label="Value" type="text" placeholder="Value" value={value} onChange={(e: any) => {
		setError("")
		setValue(e.target.value)} } />
        </div>
        <span style={{color: "#EA3323"}}> {error} </span>
        <div className="modal-actions">
          <p onClick={handleClose}>{"Cancel"}</p>
          <button className="save-button" onClick={handleSaveData}>{"Save"}</button>
        </div>
      </div>
    </div>
  )
}

export default Modal