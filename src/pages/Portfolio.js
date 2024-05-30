import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "../styles/portfolio.css";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import data from '../data/index.json';

function Portfolio() {


    return (
        <Container className="my-5">
            <Row className="portfolio">
                <Col md={12}>
                    <h1 className="title-header">Welcome to my Portfolio</h1>
                    <hr></hr>
                    <p>Check out some of my projects!</p>
                </Col>
            </Row>
            <Row className="cardEl">
                {data.portfolio.map((project, index) => (
                    <Card key={index} className="card" style={{ width: '20rem' }}>
                        <Card.Img variant="top" src={project.src}  alt={project.title}/>
                        <Card.Body>
                            <Card.Title>{project.title}</Card.Title>
                            <Card.Text>
                                {project.description}
                            </Card.Text>
                            <Button variant="primary">View in GitHub</Button>
                        </Card.Body>
                    </Card>
                ))}
            </Row>
        </Container>
    )
}
export default Portfolio;