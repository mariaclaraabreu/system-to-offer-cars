import React,  { Component } from 'react';
import Header from  '../../components/Header';
import ImgBackground from '../../assets/background-home.jpg';
import ImgLogo from '../../assets/logo.png'
import './styles.css';

export default class Main extends Component {
  render() {
    return (
      <div className="main">
        <Header 
          linkHome="/"
          logo={ImgLogo}
          logoAlt="Offers Cars"
          nameLinkOne="Offers"
          nameLinkTwo="Administration"
        />
        <img src={ImgBackground} className='banner' alt='Background' />
        <footer>
          @2020 Created with love by Maria Clara &#10083;
        </footer>
      </div>
    );
  }
}