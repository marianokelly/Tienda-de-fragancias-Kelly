import "./Item.css"
import Itemcount from '../Itemcount/Itemcount'
import { Link } from "react-router-dom";

const Item = ({ title, image, price }) => {
  return (
    <div class="contenedor-producto">
      <h1 class="nombre-producto">{title}</h1>
      <img src={image} alt="imagen"/>
      <h2 class="precio-producto">${price}</h2>
      <Itemcount stock={5} initial={1}/>
      <Link to={"/item/" + Item?.id} > 
      <button className="detalle">Ver Detalle</button> </Link>
    </div>
    
  );
};
export default Item;

