
import { useState } from 'react';
import { Button } from "react-bootstrap";
import  "./Itemcountstyles.css"


const ItemCount = ({ stock, initial }) => {
    const [count, setCount] = useState(initial);

    const onIncrease = () => {
        const newValue = count + 1;
        if (newValue <= stock) {
          setCount(newValue);
        }
    };

    const onDecrease = () => {
        const newValue = count - 1;
        if (newValue >= initial) {
          setCount(newValue);
        }
    };

    const onAdd = () => {
        const messageSingular = `Agregaste ${count} unidad a tu carrito de compras`;
        const message= `Agregaste ${count} unidades a tu carrito de compras`;
        count === 1 ? alert(messageSingular) : alert(message);
      };

    return (
        <div className="d-flexflex-column">
          <div className="d-flexmt-3">
            <Button variant="primary"  onClick={onDecrease} className="px-3mx-3">
              -
            </Button>{" "}
            <div><h3 className="px-3 mx-3">{count}</h3></div>
            <Button variant="primary" onClick={onIncrease} className="px-3mx-3">
              +
            </Button>{" "}
          </div>
          <Button variant="danger" onClick={onAdd}  className="mt-3">
            Unidades
          </Button>{" "}
        </div>
      );
}

export default ItemCount