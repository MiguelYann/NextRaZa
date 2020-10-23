import React from 'react';
import './App.css';
import HomePage from './ui/pages/home/home.component';
import { Switch, Route } from 'react-router-dom';
import Header from './ui/resources/components/header/header.component';
import  Hats  from './ui/pages/hats/hats.component';
import { Shop } from './ui/pages/shop/shop.component';

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/hats" component={Hats}/> 
        <Route path="/shop" component={Shop} />

      </Switch>
    </div>
  );
}

export default App;
