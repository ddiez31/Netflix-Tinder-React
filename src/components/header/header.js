import React, { Component } from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink} from 'reactstrap';
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
          <NavbarBrand href="/"><img src={logo} className="navbar-logo" alt="logo" /></NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="/components/">Sélection du jour</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/favorites/">Mes favoris</NavLink>
              </NavItem>
             </Nav>
          </Collapse>
        </Navbar>
    );
  }
}
