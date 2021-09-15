import React, { useState ,useEffect } from 'react';
import axios from 'axios';
import { useEffectAsync } from './reactHelper';
import User from './User'
import { usersActions } from './store';
const Users = () => {
  const [items, setItems] = useState([]);
     useEffectAsync(async () => {
    const response = await fetch('https://reqres.in/api/users');
    if (response.ok) {
      const users = await response.json();
       setItems(users.data)
    }
  },[]);
  return (
       <><br/>
          {items.map((item) => (
           <> {item.id == 3 &&<> <User item={item}/>
           <hr style={{'background-color':'Gray','border': '0', 'height':'2px'}}/><br/>
           </>}
           </>
         ))}
         {items.map((item) => (
           <> {item.id != 3 &&<> <User item={item}/> <br/></>}</>
         ))}
      </>
   );
}

export default Users;
