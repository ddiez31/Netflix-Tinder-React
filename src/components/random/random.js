// Load dependencies
import React, { Component } from 'react';
import { Container, Row } from 'reactstrap';

// Load styles, modules, components
import './random.css';
import RandomMovie from '../random_movie/random_movie';
import RandomShow from '../random_show/random_show';

export default class Random extends Component {
    render() {
        return (
            <Container>
                <h1>Films</h1>
                <Row>
                    <RandomMovie /> {/* Call component */}
                </Row>
                <hr />
                <h1>Séries</h1>
                <Row>
                    <RandomShow /> {/* Call component */}
                </Row>
            </Container>
        );         
    }
}
        
     

