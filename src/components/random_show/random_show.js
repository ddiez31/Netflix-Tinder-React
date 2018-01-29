import React, { Component } from 'react';
import { Col, Media, Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import FontAwesome from 'react-fontawesome';
import _ from 'lodash';
import './random_show.css';
import api from '../../modules/api';

export default class RandomShow extends Component {
    state = {};
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            modal: false,
            items: []
        };
        this.toggle = this.toggle.bind(this);
    }

    toggle() {
        this.setState({
            modal: !this.state.modal
        });
    }

    registerItem(item) {
        this.setState({
            activeItemTitle: item.title,
            activeItemYear: item.year,
            activeItemOverview: item.overview,
            activeItemImage: item.image
        });
    }

    componentDidMount() {
        this.setState({
            items: []
        });
        _.times(5, () => {
            fetch(api.show)
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        isLoaded: true,
                        items: [...this.state.items, ({
                                    'title': result.title,
                                    'year': new Date(new Date(result.released_on).toUTCString()).getUTCFullYear(),
                                    'overview': result.overview,
                                    'image': 'https://img.reelgood.com/content/show/' + result.id + '/poster-92.jpg'
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
                <Media className="mt-1">
                <Button color="info" onClick={ () => this.componentDidMount() }>Autres séries</Button>
                    <Media right middle href="#" onClick={ this.toggle }>
                        { this.state.items.map((item, index) => <Media object src={ item.image } alt="poster" key={ index } onClick={ () => this.registerItem(item) } />) }    
                    </Media>
                    <Modal isOpen={ this.state.modal } toggle={ this.toggle } className={ this.props.className }>
                        <ModalHeader toggle={ this.toggle }>
                            { this.state.activeItemTitle } : { this.state.activeItemYear }
                        </ModalHeader>
                        <ModalBody>
                            { this.state.activeItemOverview }
                        </ModalBody>
                        <ModalFooter>
                            <Button color="primary" onClick={ this.toggle }>Do Something</Button>{' '}
                            <Button color="secondary" onClick={ this.toggle }>Cancel</Button>
                        </ModalFooter>
                    </Modal>
                </Media>
            );         
        }
    }
}
        
     

