
import "./Item.css"
import Itemcount from '../Itemcount/Itemcount'

const Item = ({title, price, image, stock}) => {
  return (
    <div class="contenedor-producto">
        <h1 class="nombre-producto">{title}</h1>
        <img src={image} alt="imagen"/>
        <h2>${price}</h2>
        <Itemcount stock={stock} initial={1}/>
    </div>
  );
};
export default Item;


