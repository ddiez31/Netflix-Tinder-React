import React, { Component } from 'react';
import { Col, Media, Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import FontAwesome from 'react-fontawesome';
import _ from 'lodash';
import './random_movie.css';
import api from '../../modules/api';

export default class RandomMovie extends Component {
    state = {};
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            items: [],
            year: [],
            image: []
        };
    }
    componentdMount() {
        _.times(5, () => {
            fetch(api.movie)
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        isLoaded: true,
                        items: [...this.state.items, result],
                        year: [...this.state.year, new Date(new Date(result.released_on).toUTCString()).getUTCFullYear()],
                        image: [...this.state.image,'https://img.reelgood.com/content/movie/' + result.id + '/poster-92.jpg']
                    });
                },
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error
                    });
                }
            )
        })     
    }
    
    render() {
        const { error, isLoaded } = this.state;
        if (error) {
            return <div>Error: { error.message }</div>;
        } else if (!isLoaded) {
            return <div>Loading...</div>;
        } else {
            return (
                <Media className="mt-1">
                    <Media right middle href="#">
                        { this.state.image.map(item => <Media object src={item} alt="poster" />) }    
                    </Media>
                </Media>
            );
        }
    }
}
        
     

