import React from "react";
import { useState, useEffect } from "react";
import { Card, Container, Row, Col } from "react-bootstrap";
import ChartsTable from "./ChartsTable.js";

export default function ChartListing() {

    const [chartListing, setChartListing] = useState([]);

    useEffect(() => {
        fetch('/api/readchart/all', {
            method : 'GET'
        }).then((response) => {
            return response.json();
        }).then((responseAsJson) => {
            setChartListing(responseAsJson.documents);
        }).catch(error => {
            console.error("Error in fetching chart data ", error);
        });
    }, []);

    useEffect(() => {
        console.log("Updated chartListing:", chartListing);
    }, [chartListing]);
    

    return(
        <Container>
            <Card bg="info" text="white">
                <Card.Header 
                    as="h1"
                    style={{textAlign : "center"}}>
                    Charts Listing
                </Card.Header>
                <Card.Body>
                    <Container>
                        <Row>
                            <Col>
                                <h3>ID</h3>
                            </Col>
                            <Col>
                                <h3>Description</h3>
                            </Col>
                            <Col>
                                <h3>Actions</h3>
                            </Col>
                        </Row>
                    </Container>
                    <ChartsTable chartsListing={chartListing}></ChartsTable>
                </Card.Body>
            </Card>
        </Container>
    );
}