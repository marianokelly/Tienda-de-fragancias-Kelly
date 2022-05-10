import React, {useEffect, useState} from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import "./ItemDetailContainer.css"

function getItem (){
    const myPromise= new Promise ((resolve, reject)=>{
        const item={
            id: 1,
            title: "Versace Dylan Blue",
            price:"$13.500",
            stock:5,
            description:"Sus notas de salida aparecen en un inusual acorde frutal de grosellas negras, manzana Granny Smith, trébol blanco, nomeolvides y shiso. En su corazón un bouquet floral de rosa silvestre, rosa, jazmín, melocotón y petalia. Dan paso a un fondo intenso de styrax, maderas blancas, almizcle y pachuli.",
            imageUrl:"https://www.versace.com/dw/image/v2/ABAO_PRD/on/demandware.static/-/Sites-ver-master-catalog/default/dw72dfb616/original/90_R721008-R050MLS_RNUL_20_DylanBluePourHomme50ml-Fragrances-versace-online-store_3_7.jpg?sw=748&sh=1050&sm=fit"
        };
        setTimeout(()=>{
            resolve (item);
        },2000);
    });
    return myPromise;
}

function ItemDetailContainer () {
    const [item, setItem]= useState({});

    useEffect(()=> {
        getItem()
            .then(res=>{
                setItem (res);
             })
           .catch(err=> {
                console.log(err);
            });
    }, []);

    return(
        <div className="item-detail-container">
            <ItemDetail item={item}/>
        </div>
    )

}

export default ItemDetailContainer;*/