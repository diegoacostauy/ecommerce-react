import React from 'react';
import { connect } from 'react-redux';

import {
  HeaderContainer,
  LogoContainer,
  OptionContainer,
  OptionLink,
} from './Header.styles';

import { ReactComponent as Logo } from '../../assets/logo.svg';
import { auth } from '../../firebase/firebase.utils';
import { createStructuredSelector }  from 'reselect';
import { selectCartHidden } from '../../redux/cart/cart.selectors';
import { selectCurrentUser } from '../../redux/user/user.selectors';
import CartIcon from '../CartIcon/CartIcon.component';
import CartDropdown from '../CartDropdown/CartDropdown.component';

const Header = ({ currentUser, hidden }) => {
  return (
    <HeaderContainer>
      <LogoContainer to="/" aria-label="Awesome Shop">
        <Logo className="logo"  />
      </LogoContainer>
      <OptionContainer>
        <OptionLink to="/shop">Shop</OptionLink>
        <OptionLink to="/shop">Contact</OptionLink>
        {
          currentUser ?
            <OptionLink as='div' className="option" onClick={()=>auth.signOut()}>
              Sign Out
            </OptionLink> :
            <OptionLink to="/signin" className="option">Sign In</OptionLink>
        }
        <CartIcon />
      </OptionContainer>
      {
        hidden ?
        null :
        <CartDropdown />
      }
    </HeaderContainer>
  );
};

// This is tedious if there are more selectors
// const mapStateToProps = state => ({
//   currentUser: selectCurrentUser(state),
//   hidden: selectCartHidden(state)
// })

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden
})

export default connect(mapStateToProps)(Header);