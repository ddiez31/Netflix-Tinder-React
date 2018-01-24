import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, CardHeader, CardFooter } from 'reactstrap';
import { Button } from 'reactstrap';
import FontAwesome from 'react-fontawesome';
import './random_select.css';


class RandomSelect extends Component {
    render() {
        return (
            <Container>
                <Row>
                    <Col sm="4">
                        <Card>
                            <CardHeader tag="h3">Série</CardHeader>
                            <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card image cap" />
                            <CardTitle>Card title</CardTitle>
                            <CardBody>
                                <CardSubtitle>Card subtitle</CardSubtitle>
                                <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                                <Button>Button</Button>
                                </CardBody>
                            <CardFooter>
                                <FontAwesome name="heart-o" />
                            </CardFooter>
                        </Card>
                    </Col>
                    <Col sm="4">
                        <Card>
                        <CardHeader tag="h3">Film</CardHeader>
                            <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card image cap" />
                            <CardTitle>Card title</CardTitle>
                            <CardBody>
                                <CardSubtitle>Card subtitle</CardSubtitle>
                                <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                                <Button>Button</Button>
                            </CardBody>
                            <CardFooter>
                                <FontAwesome name="heart-o" />
                            </CardFooter>
                        </Card>
                    </Col>
                </Row>
            </Container>
        )
     }
}
export default RandomSelect;