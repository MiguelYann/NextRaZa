import React from 'react';
import {
  auth,
  createUserDocument,
} from '../../../../services/firebase/firebase-services';
import ButtonForm from '../buttons/button-form/buttom-form.component';
import InputForm from '../input-form/input-form.component';
import './sign-up.style.scss';

export default class SignUp extends React.Component {
  constructor() {
    super();
  }

  state = {
    userName: '',
    userMail: '',
    userPassword: '',
    userPasswordConfirmation: '',
  };

  handleSignUp = async (event) => {
    event.preventDefault();

    const {
      userName,
      userMail,
      userPassword,
      userPasswordConfirmation,
    } = this.state;

    console.log(userPassword);
    console.log(userPasswordConfirmation);
    if (userPassword !== userPasswordConfirmation) {
      alert('Vos mots de passe ne correspondent pas Reesayer');
    } else {
      try {
        const { user } = await auth.createUserWithEmailAndPassword(
          userMail,
          userPassword
        );

        await createUserDocument(user, { userName });
      } catch (error) {
        console.log(error);
      }
    }
  };

  handleInputSignUp = (event) => {
    const { name, value } = event.target;

    this.setState(() => ({
      [name]: value,
    }));
  };

  render() {
    const {
      userName,
      userMail,
      userPassword,
      userPasswordConfirmation,
    } = this.state;
    return (
      <div className="sign-up">
        <h2 className="title">Nouveau sur NextRaza?</h2>
        <span>Inscrivez vous</span>
        <form>
          <InputForm
            type="text"
            name="userName"
            id="userName"
            value={userName}
            textLabel="Entrez votre username"
            handleInput={this.handleInputSignUp}
            required
          />
          <InputForm
            type="email"
            name="userMail"
            id="email"
            value={userMail}
            textLabel="Entrez votre mail"
            handleInput={this.handleInputSignUp}
            required
          />
          <InputForm
            type="password"
            name="userPassword"
            id="password"
            value={userPassword}
            textLabel="Entrez votre mot de passe"
            handleInput={this.handleInputSignUp}
            required
          />

          <InputForm
            type="password"
            name="userPasswordConfirmation"
            id="Confirmpassword"
            value={userPasswordConfirmation}
            textLabel="Confirmer votre mot de passe"
            handleInput={this.handleInputSignUp}
            required
          />

          <ButtonForm onClick={this.handleSignUp} type="submit">
            Je m'inscris
          </ButtonForm>
        </form>
      </div>
    );
  }
}
