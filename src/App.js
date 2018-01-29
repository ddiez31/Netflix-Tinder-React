import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import { Container } from 'reactstrap';
import './App.css';
import Header from './components/header/header';
import Random from './components/random/random';
import Favorites from './components/favorites/favorites';

export default class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Header />
          <Container>
            <Switch>
              <Route exact path="/" render={ () => (<Redirect to="/random" />) } />          
              <Route path='/random' component={ Random } />
              <Route path='/favorites' component={ Favorites } />
              <Route path="*" render={ () => (<Redirect to="/" />) } />          
            </Switch>
          </Container>
        </div>
      </Router>
    );
  }
}

