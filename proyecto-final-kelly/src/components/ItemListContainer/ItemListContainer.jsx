import React from 'react'
import "./ItemListContainer.css"
import ItemCount from '../Itemcount/Itemcount'
import ItemList from '../ItemList/ItemList'
import getData from '../services/getData'

import { useState , useEffect } from 'react'

const ItemListContainer = (props) => {

  const [products, setProducts] = useState([]);

  useEffect(() => {
    getData
      .then((response) => setProducts(response))
      .catch((error) => console.log("error: ", error));
  }, []);

  return (
    <> 
      <div>{props.saludo}</div>
      <ItemCount stock={5} initial={1}/>
      <ItemList products={products} />
    </>
    
  );
};

export default ItemListContainer

