import React from "react";


function Child({title,image,price}){
    

    return(
        <div className="card">
        
        <img src={image}/>
        <p>{title}</p>
        <p>${price}</p>
        </div>
    )
}
export default Child