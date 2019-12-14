import React from 'react';
import { connect } from 'react-redux';
import './Header.styles.scss';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../../assets/logo.svg';
import { auth } from '../../firebase/firebase.utils';
import CartIcon from '../CartIcon/CartIcon.component';
import CartDropdown from '../CartDropdown/CartDropdown.component';

const Header = ({ currentUser, hidden }) => {
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
        <CartIcon />
      </nav>
      {
        hidden ?
        null :
        <CartDropdown />
      }
    </header>
  );
};

const mapStateToProps = ({ user: { currentUser }, cart: {hidden} }) => ({
  currentUser,
  hidden
})

export default connect(mapStateToProps)(Header);