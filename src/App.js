import React from 'react';
import { Switch, Route } from 'react-router-dom';
import SocketController from './SocketController';
import User from './component/Users';
import Product from './component/Products';
import Price from './component/Prices';
import Login from './pages/login'
import Post from './pages/post'
import LandingPage from './pages/landingPage'
import homePage from './pages/homePage'
import theme from './theme'
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';


function App() {
  return (
    <>
    <ThemeProvider theme={theme}>
    <CssBaseline /> 
    {/* <SocketController /> */}
    <Switch>
      <Route exact path="/" component={LandingPage} />
      <Route exact path="/homePage" component={homePage} />
      <Route exact path="/post/:Id?" component={Post} />
      <Route exact path="/3" component={User} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/register" component={Price} />
      <Route exact path="/verification" component={Price} />
      <Route exact path="/forgotPassword" component={Price} />
      <Route exact path="/newPassword/:token?" component={Price} />
      <Route exact path="/traders" component={Price} />
      <Route exact path="/charts/:symbol?" component={Price} />
      <Route exact path="/markets" component={Price} />
      <Route exact path="/trader/:id?" component={Price} />
      <Route>
        {true ? (
          <Switch>
            <Route exact path="/dashboard" component={User} />
            <Route exact path="/*" component={User} />
          </Switch>
        ) : (
            <Switch>
              <Route exact path="/dashboard" component={User} />
              <Route exact path="/*" component={User} />
            </Switch>
          )}
      </Route>
    </Switch>
   </ThemeProvider> 
  </>
  )
}

export default App;
