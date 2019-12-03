import React from 'react'
import './SignInAndSignUp.styles.scss';
import SignIn from '../../components/SignIn/SignIn.component';
import SignUp from '../../components/SignUp/SignUp.component';

const SignInAndSignUp = (props) => (
  <div className="sign-in-and-sign-up">
    <SignIn />
    <SignUp />
  </div>
);

export default SignInAndSignUp;