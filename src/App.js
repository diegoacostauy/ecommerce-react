import React from 'react';
import './App.css';
import Homepage from './pages/Homepage/Homepage.component';
import Shoppage from './pages/Shoppage/Shoppage.component';
import { Route, Switch } from 'react-router-dom';

function App() {
  return (
    <Switch>
      <Route exact path="/" component={Homepage}/>
      <Route path="/shop" component={Shoppage}/>
    </Switch>
  );
}

export default App;
