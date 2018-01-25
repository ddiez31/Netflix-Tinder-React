import React, { Component } from 'react';
import { Col } from 'reactstrap';
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, CardHeader, CardFooter } from 'reactstrap';
import { Button } from 'reactstrap';
import FontAwesome from 'react-fontawesome';
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
            year: null,
            image: null
        };
    }

    componentDidMount() {
        fetch(api.movie)
        .then(res => res.json())
        .then(
            (result) => {
                fetch(api.m + result.id)
                .then(res => res.json())
                .then(
                    (data) => {
                        this.setState({
                            isLoaded: true,
                            items: data,
                            year: new Date(new Date(data.released_on).toUTCString()).getUTCFullYear(),
                            image: 'https://img.reelgood.com/content/movie/' + data.id + '/poster-92.jpg'
                        });
                    },
                    (error) => {
                        this.setState({
                            isLoaded: true,
                            error
                        });
                    }
                )
            },
            (error) => {
                this.setState({
                    error
                });
            }
        )
    }

    render() {
        const { error, isLoaded, items, year, image } = this.state;
        if (error) {
            return <div>Error: { error.message }</div>;
        } else if (!isLoaded) {
            return <div>Loading...</div>;
        } else {
            return (
                <Col sm="6">
                    <Card>
                    <CardHeader tag="h3">Film</CardHeader>
                        <CardImg src={ this.state.image } alt="poster" />
                        <CardTitle>{ this.state.items.title }</CardTitle>
                        <CardBody>
                            <CardSubtitle>{ this.state.year }</CardSubtitle>
                            <CardText>{ this.state.items.overview }</CardText>
                            <Button>Button</Button>
                        </CardBody>
                        <CardFooter>
                            <FontAwesome name="heart-o" />
                        </CardFooter>
                    </Card>
                </Col>
            );
        }
    }
}
        
     

