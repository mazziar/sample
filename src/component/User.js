import React, { useState } from 'react';
const User = ({item}) => {
  return (
       <>
        <div> 
          <img src={item.avatar} style={{width:"50px",height:"50px"}}/> 
        </div> 
        <div> 
         {item.first_name} {item.last_name} <br/> {item.email}
        </div> 
      </>
   );
}

export default User;
