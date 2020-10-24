import React from 'react';
import { signInWithGoogle } from '../../../../services/firebase/firebase-services';
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

  handleSubmitSignIn = (event) => {
    event.preventDefault();
  };

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
        <form onSubmit={this.handleSubmitSignIn}>
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

          <ButtonForm type="submit">Je me connecte</ButtonForm>
          <ButtonForm onClick={signInWithGoogle} type="submit">Avec Google</ButtonForm>
        </form>
      </div>
    );
  }
}
