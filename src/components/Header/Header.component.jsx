import React from 'react';
import { connect } from 'react-redux';
import './Header.styles.scss';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../../assets/logo.svg';
import { auth } from '../../firebase/firebase.utils';

const Header = ({ currentUser }) => {
  return (
    <header className="header">
      <Link to="/" className="logo-container">
        <Logo className="logo" />
      </Link>
      <nav className="options">
        <Link to="/shop" className="option">Shop</Link>
        <Link to="/shop" className="option">Contact</Link>
        {
          currentUser ?
            <div className="option" onClick={()=>auth.signOut()}>
              Sign Out
            </div> :
            <Link to="/signin" className="option">Sign In</Link>
        }
      </nav>
    </header>
  );
};

const mapStateToProps = state => ({
  currentUser: state.user.currentUser
})

export default connect(mapStateToProps)(Header);