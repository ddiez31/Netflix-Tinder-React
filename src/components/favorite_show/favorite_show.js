// Load dependencies
import React, { Component } from 'react';
import { Col, Media, Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

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
            items: JSON.parse(localStorage.getItem('myFavoritesShows')),
            isLoaded: true
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
                        'image': item.image
                        }]
        });
    }

    // Remove values of selected item in local storage
    removeFavorites() {
        let favoritesStored = localStorage.getItem('myFavoritesShows');
        let deleteFavorite = this.state.activeItem;
        let index;
        favoritesStored = JSON.parse(favoritesStored);
        favoritesStored.map(item => 
            item.id === deleteFavorite[0].id ?
            (
                index = { id : item.id },
                favoritesStored = favoritesStored.filter((e) => e.id !== index.id),
                    (
                        favoritesStored.length <= 0 ? // Remove localstorage if no values
                            localStorage.removeItem('myFavoritesShows') :
                            localStorage.setItem('myFavoritesShows', JSON.stringify(favoritesStored))
                    ),
                this.componentDidMount()
            ) :
            false
        );        
    }

    // Front view
    render() {
        const { error, isLoaded, items } = this.state;
        if (error) {
            return <div>Error: { error.message }</div>;
        } else if (!isLoaded) {
            return <div>Loading...</div>;
        } else if (!items) {
            return <div>Il n'y a aucun favori</div>;
        } else {
            return (
                <Col>
                    <Media className="mt-1">
                        <Col sm="9">
                
                            {/* View all images returned local storage */}                    
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
                                    <Button color="danger" onClick={ () => this.removeFavorites() }>Supprimer des favoris</Button>{' '}
                                </ModalFooter>
                            </Modal>
                        </Col>
                    </Media>
                </Col>
            )      
        }
    }
}
        
     

