import React, { Component } from 'react';
import { Row, Col, Media, Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import FontAwesome from 'react-fontawesome';
import _ from 'lodash';
import './random.css';
import api from '../../modules/api';

export default class Random extends Component {
    state = {};
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
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

    registerItem(item) {
        this.setState({
            activeItem: [({
                        'id': item.id,
                        'title': item.title,
                        'year': item.year,
                        'overview': item.overview,
                        'image': 'https://img.reelgood.com/content/movie/' + item.id + '/poster-92.jpg'
                        })]
        });
    }

    addFavorites() {
        const actualItems = localStorage.getItem('myFavoritesMovies');
        let favoriteItem = this.state.activeItem;
        
        console.log(actualItems);
        actualItems == null ?
            localStorage.setItem('myFavoritesMovies', JSON.stringify(favoriteItem)) : 
            localStorage.setItem('myFavoritesMovies', actualItems + JSON.stringify(favoriteItem));
        
        // actualItems.id === this.state.activeItem[0].id ?
        //     console.log('déjà dans les favoris') :
        // console.log(JSON.parse(actualItems['id']) + '//' + this.state.activeItem[0].id);
    }

    viewFavorites() {
        const item = localStorage.getItem('myFavoritesMovies');
    }

    componentDidMount() {
        this.setState({
            items: []
        });
        _.times(5, () => {
            fetch(api.movie)
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        isLoaded: true,
                        items: [...this.state.items, ({
                                    'id': result.id,
                                    'title': result.title,
                                    'year': new Date(new Date(result.released_on).toUTCString()).getUTCFullYear(),
                                    'overview': result.overview,
                                    'image': 'https://img.reelgood.com/content/movie/' + result.id + '/poster-92.jpg'
                                    })
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
    
    render() {
        const { error, isLoaded } = this.state;
        if (error) {
            return <div>Error: { error.message }</div>;
        } else if (!isLoaded) {
            return <div>Loading...</div>;
        } else {
            return (
                <div>
                <h1>Films</h1>
            <Row>
              {/*<RandomMovie />*/}
            </Row>
            <hr />
            <h1>Séries</h1>
            <Row>
              {/*<RandomShow />*/}
            </Row>
            
                <Media className="mt-1">
                <Button color="info" onClick={ () => this.componentDidMount() }>Autres films</Button>
                <Button color="info" onClick={ () => this.viewFavorites() }>voir favoris</Button>
                    <Media right middle href="#" onClick={ this.toggle }>
                        { this.state.items.map((item, index) => <Media object src={ item.image } alt="poster" key={ index } id={ item.id } onClick={ () => this.registerItem(item) } />) }    
                    </Media>
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
                </Media>
                </div>
            );         
        }
    }
}
        
     

