import React from 'react';
import { Link } from 'react-router-dom';

import { ReactComponent as Logo } from '../../../../assets/store.svg';

import './navigation-bar.style.scss';

const NavigationBar = () => (
  <div className="header">
    <Link className="logo-container" to="/">
      <Logo className="logo" />
    </Link>
    <div className="options">
      <Link className="option" to="/shop">
        Boutique
      </Link>
      <Link className="option" to="/signin">
        Connexion/Inscription
      </Link>
    </div>
  </div>
);

export default NavigationBar;
