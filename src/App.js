import React, { useEffect } from 'react';
import { BrowserRouter as Router } from 'react-router-dom'
import { Route, Switch } from "react-router";
import Home from './components/Home'
import Navbar from './components/Navabar'
import Footer from './components/Footer'

import Login from './components/Login'
import ProductPage from './components/productPage'
import Product from './components/Products'
import Prod from './components/Prod'


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
        <Route exact path='/:product' render={(routerprops)=><Product routerProps={routerprops}/>}/>

        <Route exact path='/product/:id' render={(routerprops)=><ProductPage routerProps={routerprops}/>}/>
        <Route exact path='/:product/:kind' render={(routerprops)=><Prod routerProps={routerprops}/>}/>

        <Route exact path='/cart'><Cart/></Route>

      </Switch>
      <br/> <br/> <br/> <br/> <br/> <br/>
      <Footer/>
    </Router>
  );
}

export default connect(null, {autoLogin})(App);
