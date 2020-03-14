import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setCurrentUser } from './redux/user/user.actions';
import { createStructuredSelector } from 'reselect';
import { selectCurrentUser } from './redux/user/user.selectors';
import { selectCollectionsForPreview } from './redux/shop/shop.selector';
import './App.css';

import Homepage from './pages/Homepage/Homepage.component';
import Shoppage from './pages/Shoppage/Shoppage.component';
import Checkout from './pages/Checkout/Checkout.component';
import SignInAndSignUp from './pages/SignInAndSignUp/SignInAndSignUp.component';

import Header from './components/Header/Header.component';
import Footer from './components/Footer/Footer.component';

import { Route, Switch, Redirect } from 'react-router-dom';
import { auth, createUserProfileDocument, addCollectionAndDocuments } from './firebase/firebase.utils';

class App extends Component {

  unsuscribeFromAuth = null;

  componentDidMount() {
    const { currentUser, collectionsArray, setCurrentUser } = this.props;

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
        setCurrentUser(userAuth);
        // Just run once to move shop_data to firebase
        // addCollectionAndDocuments(
        //   'collections',
        //   collectionsArray.map(({ title, items }) => ({ title, items }))
        // );
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
          <Route exact path="/checkout" component={Checkout}/>
          <Route
            exact
            path="/signin"
            render={
              () => this.props.currentUser ?
                <Redirect to="/" /> :
                <SignInAndSignUp />
            }
          />
        </Switch>
        <Footer />
      </>
    );
  }
}

// const mapStateToProps = state => ({
//   currentUser: selectCurrentUser(state)
// })

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  collectionsArray: selectCollectionsForPreview
});

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
