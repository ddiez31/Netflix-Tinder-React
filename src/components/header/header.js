import React, { Component } from 'react';
import { BrowserRouter as Route, Link } from 'react-router-dom';
import { Collapse, Navbar, NavbarToggler, Nav, NavItem } from 'reactstrap';
import logo from '../img/Netflix_logo.png';
import './header.css';

export default class Header extends Component {
  constructor(props) {
    super(props);  
    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render() {
    return (
        <Navbar color="faded" light expand="md">
          <Link to={ '/' }><img src={ logo } className="navbar-logo" alt="logo" /></Link>
          <NavbarToggler onClick={ this.toggle } />
          <Collapse isOpen={ this.state.isOpen } navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <Link to={ '/random' }>Sélection aléatoire</Link>
              </NavItem>
              <NavItem>
                <Link to={ '/favorites' }>Mes favoris</Link>            
              </NavItem>
             </Nav>
          </Collapse>
        </Navbar>        
    );
  }
}
