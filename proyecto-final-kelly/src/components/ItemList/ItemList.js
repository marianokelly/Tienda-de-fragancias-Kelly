import Item from "../Item/Item";

const ItemList= ({products}) =>{
    return(
    <>
     {products.map((product=>{
         return(
             <Item key={product.id} title={product.title} image={product.image} price={product.price} stock={product.stock}/>
         );
     }))}
    </>
    );
};

export default ItemList