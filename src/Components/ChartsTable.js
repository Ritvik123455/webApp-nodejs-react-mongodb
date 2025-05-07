import React, { useState, useEffect } from "react";
import { Container, Row, Col, Button, Card } from "react-bootstrap";

export default function ChartsTable({ chartsListing, handleClick }) {

    useEffect(() => {
        console.log("chartsListing received in ChartsTable:", chartsListing);
    }, [chartsListing]);
    
    return (
        <Card bg="dark" text="white">
            <Card.Body>
                <Container>
                    {chartsListing.map((object, index) => (
                        <Row key={object._id || index} style={{ color: 'white' }}>
                            <Col>{object._id}</Col>
                            <Col>{object.description}</Col>
                            <Col>
                                <Button 
                                    variant="danger" 
                                    size="lg" 
                                    type="button" 
                                    onClick={() => {
                                        handleClick(object._id)
                                }}>
                                    Preview Chart
                                </Button>
                            </Col>
                        </Row>
                    ))}
                </Container>
            </Card.Body>
        </Card>
    );
}

