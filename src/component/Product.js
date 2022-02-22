import React, { useState } from 'react';
import styled from 'styled-components'
const Product = ({ item }) => {
  const Hr = styled.hr`
    width:50%;
    height:5px;
    text-align:center;
    margin-left:auto;
    border: 0;
    border-radius: 3px;
  `;

  return (
    <>

      <div>
        {item.name} <br />
        {item.pantone_value} <br />
        {item.year} <Hr style={{ 'backgroundColor': item.color }} />
      </div>

    </>
  );
}

export default Product;
