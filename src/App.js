import React, { useState, useEffect } from 'react';
import './App.css';
import HomePage from './ui/pages/home/home.component';
import { Switch, Route } from 'react-router-dom';
import NavigationBar from './ui/resources/components/navigation-bar/navigation-bar.component';
import Hats from './ui/pages/hats/hats.component';
import { Shop } from './ui/pages/shop/shop.component';
import SignInAndSignUp from './ui/pages/signIn-signUp/signin-signup.component';
import {
  auth,
  createUserDocument,
} from './services/firebase/firebase-services';

export default class App extends React.Component {
  constructor() {
    super();
  }

  state = {
    currentUser: '',
  };

  disconnectFirebase = null;

  componentDidMount() {
    auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userReference = await createUserDocument(userAuth);
        console.log(userReference);
        userReference.onSnapshot((snapShotUser) => {
          console.log(snapShotUser.data());
          this.setState(() => ({
            currentUser: {id: snapShotUser.id, ...snapShotUser.data() },
          }));
        });
      }

      this.setState(() => ({ currentUser: userAuth }));
      console.log(this.state.currentUser);
    });
  }

  render() {
    return (
      <div className="App">
        <NavigationBar />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/hats" component={Hats} />
          <Route path="/shop" component={Shop} />
          <Route path="/signin" component={SignInAndSignUp} />
        </Switch>
      </div>
    );
  }
}
