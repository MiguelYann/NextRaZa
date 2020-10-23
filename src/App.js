import React from 'react';
import './App.css';
import HomePage from './ui/pages/home/home.component';
import { Switch, Route } from 'react-router-dom';
import Header from './ui/resources/components/header/header.component';

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/" component={HomePage} />
      </Switch>
    </div>
  );
}

export default App;
