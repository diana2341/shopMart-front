import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom'
import { Route, Switch } from "react-router";
import Home from './components/Home'
import Navbar from './components/Navabar'
import Login from './components/Login'

import{createStore,combineReducers} from 'redux'
import{Provider,connect} from 'react-redux'

import Cart from './components/Cart'

function App() {
  return (
    <Router>
      <Navbar/>
      <Switch>
        <Route exact path='/'><Home/></Route>
        <Route exact path='/login'><Login/></Route>
        <Route exact path='/cart'><Cart/></Route>
      </Switch>
    </Router>
  );
}

export default App;
