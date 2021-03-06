/* eslint-disable react/jsx-pascal-case */
/* eslint-disable */
import React from 'react';
import './App.css';
import About from './pages/About';
import Login from './pages/Login';
import Register from './pages/Register';
import Profile from './pages/Profile';
import Pricing from './pages/Pricing';
import Lawyer from './pages/Lawyer';
import Lawyer_Search from './pages/Lawyer_Search';
import Posts from "./pages/Posts"
import Help from "./pages/Help"

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
          <Route path="/Lawyer/:id">
            <Lawyer />
          </Route>
          <Route path="/Lawyers">
            <Lawyer_Search />
          </Route>
          <Route path="/Pricing">
            <Pricing />
          </Route>
          <Route path="/Profile/">
            <Profile />
          </Route>
          <Route path="/Posts/">
            <Posts />
          </Route>
          <Route path="/Help">
            <Help />
          </Route>
        </Switch>

      </Router>   
    </div>
  );
}

export default App;
