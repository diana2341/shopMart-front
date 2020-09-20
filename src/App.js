import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom'
import { Route, Switch } from "react-router";
import Home from './components/Home'
import Navbar from './components/Navabar'
import Login from './components/Login'

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
