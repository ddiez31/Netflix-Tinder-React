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
          <Row>

            <RandomMovie />
            <RandomShow />

          </Row>
        </Container>

      </div>
    );
  }
}

