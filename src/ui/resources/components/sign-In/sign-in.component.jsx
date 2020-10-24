import React from 'react';
import InputForm from '../inputForm/input-form.component';

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
        <h2>Vous avez un compte?</h2>
        <span>Connectez-vous </span>
        <form onSubmit={this.handleSubmitSignIn}>
          <InputForm
            id="usermail"
            textLabel="Entrez vos identifiants"
            handleInput={this.handleInput}
            name="userMail"
            value={this.state.userMail}
            required
          />
          <InputForm
            id="userpwd"
            textLabel="Entrez votre mot de passe"
            handleInput={this.handleInput}
            name="userPassword"
            value={this.state.userPassword}
            required
          />

          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}