// Load dependencies
import React, { Component } from 'react';
import { BrowserRouter as Route, Link, NavLink } from 'react-router-dom';
import { Collapse, Navbar, NavbarToggler, Nav, NavItem } from 'reactstrap';

// Load styles, modules, components
import logo from '../img/Netflix_logo.png';
import './header.css';

export default class Header extends Component {
  constructor(props) {
    super(props);  
    this.state = {
      isOpen: false
    };
    this.toggle = this.toggle.bind(this);
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
                <NavLink to={ '/random' }>Sélection aléatoire</NavLink>
              </NavItem>
              <NavItem>
                <NavLink to={ '/favorites' }>Mes favoris</NavLink>            
              </NavItem>
             </Nav>
          </Collapse>
        </Navbar>        
    );
  }
}
