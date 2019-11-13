import React, { Component } from 'react';
import './App.css';
import Homepage from './pages/Homepage/Homepage.component';
import Shoppage from './pages/Shoppage/Shoppage.component';
import SignInAndSignUp from './pages/SignInAndSignUp/SignInAndSignUp.component';
import Header from './components/Header/Header.component';
import Footer from './components/Footer/Footer.component';
import { Route, Switch } from 'react-router-dom';
import { auth } from './firebase/firebase.utils';

class App extends Component {
  state = {
    currentUser: ''
  };

  unsuscribeFromAuth = null;

  componentDidMount() {
    this.unsuscribeFromAuth = auth.onAuthStateChanged(user => {
      this.setState({
        currentUser: user
      })
    })
  }

  componentWillUnmount() {
    this.unsuscribeFromAuth();
  }

  render() {
    return (
      <>
        <Header currentUser={this.state.currentUser}/>
        <Switch>
          <Route exact path="/" component={Homepage}/>
          <Route path="/shop" component={Shoppage}/>
          <Route path="/signin" component={SignInAndSignUp}/>
        </Switch>
        <Footer />
      </>
    );
  }
}

export default App;
