import React, { useState } from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { useEffectAsync } from './reactHelper';
import Product from './Product'
import { informationActions } from './store';
import styled from 'styled-components';
const Button = styled.button`
  color: Gray;
  font-size: 1.25em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid Gray;
  border-radius: 10px;
  background-color: rgba(38, 25, 83, 0.8);
   &:hover {
     color: LightGray;    
     border: 2px solid LightGray;
  }
`;

const Products = () => {
 const [items, setItems] = useState([]);
 const [filter, setFilter] = useState(false);
 
 function filterButton (){
   setFilter(!filter)
 } 
 useEffectAsync(async () => {
   const response = await fetch('https://reqres.in/api/products');
     if (response.ok) {
       const products = await response.json();
       setItems(products.data)
    }
  },[]);
  return (
        <>
         <Button onClick={filterButton}>{filter ? "all products" : "older than 2004"} </Button>
         {items.map((item) => (
           <>{!filter ? 
               <><Product item={item}/> </> 
               : 
               <>{item.year<2004 &&<> <Product item={item}/></>}</>}</>
         ))}
      </>
   );
}
export default Products;
