import "./Item.css"
import Itemcount from '../Itemcount/Itemcount'

const Item = ({ title, image, price }) => {
  return (
    <div class="contenedor-producto">
      <h1 class="nombre-producto">{title}</h1>
      <img src={image} alt="imagen"/>
      <h2 class="precio-producto">${price}</h2>
      <Itemcount stock={5} initial={1}/>
    </div>
  );
};
export default Item;

