/*import React from "react";
import Itemcount from "../Itemcount/Itemcount";
import "./ItemDetail.css"

function ItemDetail ({title, price, image, stock}) {
    return (
        <div className="Item-detail">
            <div className="left">
                <div className="img-detail-container">
                    <img src={image} alt="Imagen Producto" />
                </div>
            </div>
            <div className="right">
                <div className="info-container">
                    <h2 className="titulo">{title}</h2>
                    <p>{price}</p>
                    <div className="count-container">
                        <Itemcount initial={0} stock={stock} onAdd={()=>{}}/>
                    </div>
                </div>
            </div>
        </div>
    )

};

export default ItemDetail; 