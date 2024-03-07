import './App.css';
import React from 'react';
import Child from './Child';
import { useState,useEffect } from 'react';
function App(){
  let [product,updateProduct]=useState([])
 
   useEffect(
    ()=>{getProduct()},[]
   )
async function getProduct(){
  let res=await fetch("https://fakestoreapi.com/products")
  let productList=await res.json()
  updateProduct(productList)
  
}

 if (product.length===0){
  return <h1>Fetching data.....</h1>
 }

  return(
    <>
    <div className="product">
     {product.map((p)=><Child {...p}></Child>)}
    </div>
    </>
  )
 }
export default App;
