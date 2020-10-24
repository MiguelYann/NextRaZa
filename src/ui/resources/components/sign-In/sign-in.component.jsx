import React from 'react';
import {
  auth,
  signInWithGoogle,
} from '../../../../services/firebase/firebase-services';
import ButtonForm from '../buttons/button-form/buttom-form.component';
import InputForm from '../input-form/input-form.component';
import './sign-in.component.scss';

export default class SignIn extends React.Component {
  constructor(props) {
    super(props);
  }

  state = {
    userMail: '',
    userPassword: '',
  };

  handleSignInWithUserNameAndPassword = async (event) => {
    event.preventDefault();

    const { userMail, userPassword } = this.state;
    try {
      await auth.signInWithEmailAndPassword(userMail, userPassword);
    } catch (error) {
      console.log(error);
    }
  };

  handleSignIn;

  handleInputSignIn = (event) => {
    const { name, value } = event.target;
    console.log(name, value);
    this.setState(() => ({ [name]: value }));
  };

  render() {
    return (
      <div className="sign-in">
        <h2 className="title">Vous avez un compte?</h2>
        <span>Connectez-vous </span>
        <form onSubmit={this.handleSignInWithUserNameAndPassword}>
          <InputForm
            id="usermail"
            textLabel="Entrez vos identifiants"
            handleInput={this.handleInputSignIn}
            type="email"
            name="userMail"
            value={this.state.userMail}
          />
          <InputForm
            id="userpwd"
            textLabel="Entrez votre mot de passe"
            handleInput={this.handleInputSignIn}
            name="userPassword"
            type="password"
            value={this.state.userPassword}
          />

          <ButtonForm onClick={this.handleSignInWithUserNameAndPassword} type="submit">
            Je me connecte
          </ButtonForm>
          <ButtonForm onClick={signInWithGoogle} type="button">
            Avec Google
          </ButtonForm>
        </form>
      </div>
    );
  }
}
