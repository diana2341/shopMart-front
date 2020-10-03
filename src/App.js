import React, { useEffect } from 'react';
import { BrowserRouter as Router } from 'react-router-dom'
import { Route, Switch } from "react-router";
import Home from './components/Home'
import Navbar from './components/Navabar'

import Login from './components/Login'
import ProductPage from './components/productPage'
import Cart from './components/Cart'
import SignUp from './components/SignUp';
import {autoLogin} from './actions'
import {connect} from 'react-redux'

function App(props) {


  useEffect(()=>{
    props.autoLogin()
  },[])
  return (
    <Router>
      <Navbar/>
      <Switch>
      <Route exact path='/' render={(routerprops)=><Home routerProps={routerprops}/>}/>
        <Route exact path='/login'><Login/></Route>
        <Route exact path='/signup'><SignUp/></Route>

        <Route exact path='/cart'><Cart/></Route>
        <Route exact path='/:id' render={(routerprops)=><ProductPage routerProps={routerprops}/>}/>

      </Switch>
    </Router>
  );
}

export default connect(null, {autoLogin})(App);
