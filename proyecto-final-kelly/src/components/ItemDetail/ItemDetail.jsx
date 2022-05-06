import React from "react";
import Itemcount from "../Itemcount/Itemcount";
import "./ItemDetail.css"

function ItemDetail ({item}) {
    return (
        <div className="Item-detail">
            <div className="left">
                <div className="img-detail-container">
                    <img src={item?.imageUrl} alt="Imagen Producto" />
                </div>
            </div>
            <div className="right">
                <div className="titulo">
                    <h2>{item?.title}</h2> <p>{item?.price}</p>
                </div>
                <div className="count-container">
                    <Itemcount initial={0} stock={item.stock} onAdd={()=>{}}/>
                </div>
            </div>
        </div>
    )

};

export default ItemDetail;