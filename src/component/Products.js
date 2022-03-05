import React, { useState } from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { useEffectAsync } from '../reactHelper';
import Product from './Product'
import styled from 'styled-components';


const Products = () => {
  const [items, setItems] = useState([]);
  const [filter, setFilter] = useState(false);

  function filterButton() {
    setFilter(!filter)
  }
  useEffectAsync(async () => {
    const response = await fetch('https://reqres.in/api/products');
    if (response.ok) {
      const products = await response.json();
      setItems(products.data)
    }
  }, []);
  return (
    <>
      page 3
    </>
  );
}
export default Products;
