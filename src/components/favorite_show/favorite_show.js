// Load dependencies
import React, { Component } from 'react';
import { Col, Media, Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import FontAwesome from 'react-fontawesome';

// Load styles, modules, components
import './favorite_show.css';

export default class FavoriteShow extends Component {
    state = {};
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            modal: false,
            items: [],
            activeItem: []
        };
        this.toggle = this.toggle.bind(this);
    }    

    toggle() {
        this.setState({
            modal: !this.state.modal,
        });
    }
  
    // Actions on loading page
    componentDidMount() {
        this.setState({
            items: localStorage.getItem('myFavoritesShows'),
            isLoaded: true
        });
        console.log(this.state.items);
    }
    
    // Front view
    render() {
        const { error, isLoaded } = this.state;
        if (error) {
            return <div>Error: { error.message }</div>;
        } else if (!isLoaded) {
            return <div>Loading...</div>;
        } else {
            return (
                <h1>à faire</h1>
            );         
        }
    }
}
        
     

