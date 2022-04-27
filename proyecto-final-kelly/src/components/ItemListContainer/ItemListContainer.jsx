import React from 'react'
import "./ItemListContainer.css"
import ItemCount from '../Itemcount/Itemcount'

const ItemListContainer = (props) => {
  return (
    <> 
      <div>{props.saludo}</div>
      <ItemCount stock={5} initial={1}/>
    </>
    
  )
}

export default ItemListContainer

