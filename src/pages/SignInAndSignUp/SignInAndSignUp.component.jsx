import React from 'react'
import SignIn from '../../components/SignIn/SignIn.component';
import SignUp from '../../components/SignUp/SignUp.component';

import { SignInAndSignUpContainer } from './SignInAndSignUp.styles';

const SignInAndSignUp = (props) => (
  <SignInAndSignUpContainer>
    <SignIn />
    <SignUp />
  </SignInAndSignUpContainer>
);

export default SignInAndSignUp;