// Load dependencies
import React, { Component } from 'react';
import { Col, Media, Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import FontAwesome from 'react-fontawesome';
import _ from 'lodash';

// Load styles, modules, components 
import './random_show.css';
import API from '../../modules/api';

export default class RandomShow extends Component {
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
            modal: !this.state.modal
        });
    }

    // Storage values of selected item
    registerItem(item) {
        this.setState({
            activeItem: [{
                        'id': item.id,
                        'title': item.title,
                        'year': item.year,
                        'overview': item.overview,
                        'image': 'https://img.reelgood.com/content/show/' + item.id + '/poster-92.jpg'
                        }]
        });
    }
    
    // Save values of selected item in local storage
    addFavorites() {
        const actualItems = localStorage.getItem('myFavoritesShows');
        let favoriteItem = this.state.activeItem;
        
        actualItems == null ?
            localStorage.setItem('myFavoritesShows', JSON.stringify(favoriteItem)) : 
            localStorage.setItem('myFavoritesShows', actualItems + JSON.stringify(favoriteItem));
    }

    // Actions on loading page
    componentDidMount() {
        this.setState({
            items: []
        });
        _.times(5, () => { // Call API for 5 requests
            fetch(API.show)
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        isLoaded: true,
                        items: [...this.state.items, { // Push response in the state
                                    'title': result.title,
                                    'year': new Date(new Date(result.released_on).toUTCString()).getUTCFullYear(),
                                    'overview': result.overview,
                                    'image': 'https://img.reelgood.com/content/show/' + result.id + '/poster-92.jpg'
                                    }
                                ]                        
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

    // Front view
    render() {
        const { error, isLoaded } = this.state;
        if (error) {
            return <div>Error: { error.message }</div>;
        } else if (!isLoaded) {
            return <div>Loading...</div>;
        } else {
            return (
                <Col>
                    <Media className="mt-1">
                        <Col sm="3">
                            <Button color="info" onClick={ () => this.componentDidMount() }>Autres séries</Button>
                        </Col>
                        <Col sm="9">

                            {/* View all images returned API */}                    
                            <Media right middle href="#" onClick={ this.toggle }>
                                { this.state.items.map((item, index) => <Media object src={ item.image } alt="poster" key={ index } id={ item.id } onClick={ () => this.registerItem(item) } />) }    
                            </Media>

                            {/* View all details on image click */}  
                            <Modal isOpen={ this.state.modal } toggle={ this.toggle } className={ this.props.className }>
                                <ModalHeader toggle={ this.toggle }>
                                    { this.state.activeItem.map(item => item.title + ' - ' + item.year) }
                                </ModalHeader>
                                <ModalBody>
                                    { this.state.activeItem.map(item => item.overview) }
                                </ModalBody>
                                <ModalFooter>
                                    <Button color="primary" onClick={ () => this.addFavorites() }>Ajouter aux favoris</Button>{' '}
                                </ModalFooter>
                            </Modal>
                        </Col>
                    </Media>
                </Col>
            );         
        }
    }
}
        
     

