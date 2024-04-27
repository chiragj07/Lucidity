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



const Modal = ({setShowModal,inventoryData, setInvetoryData, showModal} : {showModal: { state: boolean, data:InventoryInterface} , setShowModal: ({state, data}: {state: false, data: InventoryInterface }) => void, setInvetoryData: (data: InventoryInterface[]) => void, inventoryData: InventoryInterface[] } ) => {
  console.log(showModal);
  const [category, setCategory]= useState("")
  const [price, setPrice]= useState("")
  const [quantity, setQuantity]= useState(0)
  const [value, setValue]= useState("")

  

  const handleSaveData = () => {
     const {data} = showModal;
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
          <CloseIcon onClick={() => setShowModal({state: false, data: {}})} style={{color: "#CEED51", cursor: "pointer"}} />
        </div>
        <span>{showModal.data?.name}</span>
        <div className="input-field-containers">
          <InputField label="Category" type="text" placeholder="Category" value={category} onChange={(e: any) => setCategory(e.target.value) } />
          <InputField label="Price" type="text" placeholder="Price" value={price} onChange={(e: any) => setPrice(e.target.value) }/>
          <InputField label="Quantity" type="number" placeholder="Quantity" value={String(quantity)} onChange={(e: any) => setQuantity(e.target.value) }/>
          <InputField label="Value" type="text" placeholder="Value" value={value} onChange={(e: any) => setValue(e.target.value) } />
        </div>
        <div className="modal-actions">
          <p onClick={() => setShowModal({state: false, data: {}})}>{"Cancel"}</p>
          <button className="save-button" onClick={handleSaveData}>{"Save"}</button>
        </div>
      </div>
    </div>
  )
}

export default Modal