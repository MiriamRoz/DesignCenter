import React from 'react';
import './App.css';
import HomePage from './components/homePage';
import Category from './components/category';
import './components/points.css';
import './components/point.html';
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";

function App() {
  return (

    <Router>
      <div >
        <Switch>
          <Route path="/">
            <HomePage />
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
