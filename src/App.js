import React from 'react';
import './App.css';
import HomePage from './components/homePage';
import Category from './components/category';
import Order from './components/order';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from './components/login';

function App() {
  return (

    <Router>
      <div >
        <Switch>
          <Route path="/" exact>
            <HomePage />
            {/* <Login/> */}
          </Route>
          <Route path="/category">
            <Category />
          </Route>
          <Route path="/order">
            <Order />
          </Route>
        </Switch>
      </div>
    </Router>

  );
}

export default App;
