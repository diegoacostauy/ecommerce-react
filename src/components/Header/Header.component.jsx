import React from 'react';
import './Header.styles.scss';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../../assets/logo.svg';

const Header = () => {
  return (
    <header className="header">
      <Link to="/" className="logo-container">
        <Logo className="logo" />
      </Link>
      <nav className="options">
        <Link to="/shop" className="option">Shop</Link>
        <Link to="/shop" className="option">Contact</Link>
      </nav>
    </header>
  );
};

export default Header;