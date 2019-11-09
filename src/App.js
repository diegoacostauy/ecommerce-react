import React from 'react';
import logo from './logo.svg';
import './App.css';
import Homepage from './pages/Homepage/Homepage.component';
import { Route, Switch } from 'react-router-dom';

function HatsPage() {
  return (
    <h1>Hats Page</h1>
  )
}

function App() {
  return (
    <Switch>
      <Route exact path="/" component={Homepage}/>
      <Route  path="/shop/hats" component={HatsPage}/>
    </Switch>
  );
}

export default App;
