import React from "react"

 const Data = ({item, deleteItem}) => {
const {id, name} = item

  return (
    <div className="listitems">
     <li>{name}</li> 
    <button onClick={()=> deleteItem(id)}>X</button>
    </div>
  )
}

export default Data