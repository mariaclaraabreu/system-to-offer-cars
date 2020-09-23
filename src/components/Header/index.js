import React from 'react';
import { Link } from 'react-router-dom';
import ImgLogo from '../../assets/logo.png'
import './styles.css';

const Header = () => (
  <header id="oc-header">
    <div className="oc-buttons">
      <Link to='/'>
        <button className="oc-button">
          <img className="logo" src={ImgLogo} alt="Offers Cars"/>
        </button>
      </Link>
      <Link to='/'>
        <button className="oc-button">
          Offers
        </button>
      </Link>
      <Link to='/'>
        <button className="oc-button">
          Administration
        </button>
      </Link>
    </div>
  </header>
)

export default Header;