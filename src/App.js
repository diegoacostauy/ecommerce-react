import React from 'react';
import './App.css';
import Homepage from './pages/Homepage/Homepage.component';
import Shoppage from './pages/Shoppage/Shoppage.component';
import SignInAndSignUp from './pages/SignInAndSignUp/SignInAndSignUp.component';
import Header from './components/Header/Header.component';
import Footer from './components/Footer/Footer.component';
import { Route, Switch } from 'react-router-dom';

function App() {
  return (
    <>
      <Header />
      <Switch>
        <Route exact path="/" component={Homepage}/>
        <Route path="/shop" component={Shoppage}/>
        <Route path="/signin" component={SignInAndSignUp}/>
      </Switch>
      <Footer />
    </>
  );
}

export default App;
