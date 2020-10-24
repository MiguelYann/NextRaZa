import React from 'react';
import SignIn from '../../resources/components/sign-in/sign-in.component';
import SignUp from '../../resources/components/sign-up/sign-up.component';
import './signin-signup.component.scss';

const SignInAndSignUp = () => (
  <div className="sign-in-and-sign-up">
    <SignIn />
    <SignUp />
  </div>
);

export default SignInAndSignUp;
