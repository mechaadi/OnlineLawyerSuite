/* eslint-disable react/jsx-pascal-case */
import React from 'react';
import './App.css';
import About from './pages/About';
import Login from './pages/Login';
import Register from './pages/Register';
import Profile from './pages/Profile';
import Pricing from './pages/Pricing';
import Lawyer from './pages/Lawyer';
import Lawyer_Search from './pages/Lawyer_Search';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>

        <Switch>
          <Route exact path="/">
            <About />
          </Route>
          <Route path="/Login">
            <Login />
          </Route>
          <Route path="/Register">
            <Register />
          </Route>
          <Route path="/Lawyer">
            <Lawyer />
          </Route>
          <Route path="/Lawyer_Search">
            <Lawyer_Search />
          </Route>
          <Route path="/Pricing">
            <Pricing />
          </Route>
          <Route path="/Profile">
            <Profile />
          </Route>
        </Switch>

      </Router>
    </div>
  );
}

export default App;
