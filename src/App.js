import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setCurrentUser } from './redux/user/user.actions';
import './App.css';
import Homepage from './pages/Homepage/Homepage.component';
import Shoppage from './pages/Shoppage/Shoppage.component';
import SignInAndSignUp from './pages/SignInAndSignUp/SignInAndSignUp.component';
import Header from './components/Header/Header.component';
import Footer from './components/Footer/Footer.component';
import { Route, Switch } from 'react-router-dom';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';

class App extends Component {

  unsuscribeFromAuth = null;

  componentDidMount() {
    this.unsuscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {

        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapshot => {
          this.props.setCurrentUser({
            id: snapshot.id,
            ...snapshot.data()
          });
        });
      } else {
        this.props.setCurrentUser(userAuth);
      }

    });
  }

  componentWillUnmount() {
    this.unsuscribeFromAuth();
  }

  render() {
    return (
      <>
        <Header/>
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

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})

export default connect(null, mapDispatchToProps)(App);
