import React from 'react';
import './App.css';
import HomePage from './ui/pages/home/home.component';
import { Switch, Route } from 'react-router-dom';
import NavigationBar from './ui/resources/components/navigation-bar/navigation-bar.component';
import  Hats  from './ui/pages/hats/hats.component';
import { Shop } from './ui/pages/shop/shop.component';
import SignInAndSignUp from './ui/pages/signIn-signUp/signin-signup.component';

function App() {
  return (
    <div className="App">
      <NavigationBar />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/hats" component={Hats}/> 
        <Route path="/shop" component={Shop} />
        <Route path="/signin" component={SignInAndSignUp}/>

      </Switch>
    </div>
  );
}

export default App;
