import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom'
import { Route, Switch } from "react-router";
import Home from './components/Home'
import Navbar from './components/Navabar'
import Login from './components/Login'
import{createStore,combineReducers} from 'redux'
import{Provider,connect} from 'react-redux'

function App() {
  return (
    <Router>
      <Navbar/>
      <Switch>
        <Route exact path='/'><Home/></Route>
        <Route exact path='/login'><Login/></Route>
      </Switch>
    </Router>
  );
}

export default App;
