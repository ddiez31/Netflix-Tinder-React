import React, { Component } from 'react';
import { Container, Row } from 'reactstrap';
import './App.css';
import Header from './components/header/header';
import RandomMovie from './components/random_movie/random_movie';
import RandomShow from './components/random_show/random_show';

export default class App extends Component {
  render() {
    return (
      <div className="App">

        <Header />
        <Container>
          <h1>Films</h1>
          <Row>
            <RandomMovie />
          </Row>
          <hr />
          <h1>Séries</h1>
          <Row>
            <RandomShow />
          </Row>
        </Container>

      </div>
    );
  }
}

