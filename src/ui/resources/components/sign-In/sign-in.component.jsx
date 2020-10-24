import React from 'react';
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

  handleInput = (event) => {
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
            handleInput={this.handleInput}
            type="email"
            name="userMail"
            value={this.state.userMail}
            required
          />
          <InputForm
            id="userpwd"
            textLabel="Entrez votre mot de passe"
            handleInput={this.handleInput}
            name="userPassword"
            type="password"
            value={this.state.userPassword}
            required
          />

          <ButtonForm type="submit">Je me connecte</ButtonForm>
        </form>
      </div>
    );
  }
}
