import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom'
import { Route, Switch } from "react-router";
import Home from './components/Home'
import Navbar from './components/Navabar'
import Login from './components/Login'
import Cart from './components/Cart'
import SignUp from './components/SignUp';

function App() {
  return (
    <Router>
      <Navbar/>
      <Switch>
        <Route exact path='/'><Home/></Route>
        <Route exact path='/login'><Login/></Route>
        <Route exact path='/signup'><SignUp/></Route>

        <Route exact path='/cart'><Cart/></Route>
      </Switch>
    </Router>
  );
}

export default App;
