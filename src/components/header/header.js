import React, { Component } from 'react';
import logo from '../img/Netflix_logo.png';
import './header.css';

export default class Header extends Component {
  render() {
    return (
        <header className="header">
            <img src={logo} className="header-logo" alt="logo" />
            <h1 className="header-title">Welcome to Netflix Tinder with React</h1>
        </header>
    );
  }
}

