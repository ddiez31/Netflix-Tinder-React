// Load dependencies
import React, { Component } from 'react';
import { Row } from 'reactstrap';

// Load styles, modules, components
import './favorites.css';
import FavoriteMovie from '../favorite_movie/favorite_movie';
import FavoriteShow from '../favorite_show/favorite_show';

export default class Favorites extends Component {
    render() {
        return (
            <div>
                <h1>Films</h1>
                <Row>
                    <FavoriteMovie /> {/* Call component */}
                </Row>
                <hr />
                <h1>Séries</h1>
                <Row>
                    <FavoriteShow /> {/* Call component */}
                </Row>
            </div>
        );         
    }
}
     

