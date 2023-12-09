import React from "react"
import { useState } from "react"
import Data from "./Data"




const ListItem = () => {
   const [items, setItems] = useState([])
   const [itemName, setItemName] = useState("")
   const [idCounter, setIdCounter] = useState(0)

   const addItem = ()=>{
    if(itemName.trim() !== ""){
        const newItem = {
            id: idCounter,
            name: itemName
        };
        setItems([...items, newItem])
        setItemName("")
        setIdCounter(idCounter + 1)
    }
   }

   const deleteItem = (id) => {
    const updatedItems = items.filter((item) => item.id !== id)
    setItems(updatedItems)
   }

  return (
    <div className="container">
    <div>
        <h2>Shopping List</h2>
    </div>
    <div className="quote-container">
       <div className="input">
        <input type="text" value={itemName} onChange={(e)=> setItemName(e.target.value)}/>
        <button onClick={addItem}>Add</button>
        </div>
        <ul className="lists">
  {items.map((item) => (
    <Data key={item.id} item={item} deleteItem={deleteItem} />
  ))}
</ul>
    </div>
</div>
  )
}
export default ListItem