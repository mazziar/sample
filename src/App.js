import logo from './logo.svg';
import React from 'react';
import './App.css';
import { Switch, BrowserRouter, Route } from 'react-router-dom'
import MainPage from './MainPage';
import SocketController from './SocketController';
import Users from './component/Users';
import Products from './component/Products';
import Prices from './component/Prices';
import styled from 'styled-components'
const Th = styled.th`
  color: Gray;
  font-size: 1em;
  margin-left: auto;
  margin-right: auto;
  margin-top: 100px;
  width: 30vw;
  padding: 0.25em 1em;
  border: 3px solid;
  border-radius: 30px;
  background-color: rgba(38, 25, 83, 0.8);
  vertical-align: top;
`;
function App() {
  return (
    <div style={{ backgroundColor: 'rgba(110, 53, 34, 1)' }}>
      <SocketController />
      <table cellspacing="30" style={{ width: '100%', "padding-top": "10px" }}>
        <tr >
          <Th>
            <Users />
          </Th>
          <Th>
            <Products />
          </Th>
          <Th>
            <Prices />
          </Th>
        </tr>
      </table>
    </div>
  )
}

export default App;
