import React from "react";
import { useState, useEffect, useRef } from "react";
import { Card, Container, Row, Col, Modal, Button, CardBody } from "react-bootstrap";
import ChartsTable from "./ChartsTable.js";
import { Chart } from 'chart.js'
import { fontString } from "chart.js/helpers";

export default function ChartListing() {
    
    const canvasRef = useRef(null);
    const [chartListing, setChartListing] = useState([]);
    const [currentTitle, setCurrentTitle] = useState('');
    const [currentDescription, setCurrentDescription] = useState('');
    const [currentLabels, setCurrentLabels] = useState([]);
    const [currentColors, setCurrentColors] = useState([]);
    const [currentNumbers, setCurrentNumbers] = useState([]);
    const [show, setShow] = useState(false);
    const [chart, setChart] = useState(null);

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

    useEffect(() => {
        if (show) {
          // This runs AFTER show is set to true

          if(chart){
            chart.destroy();
          }

          setupChart();
        }
      }, [show]
    );
      
    function setupChart() {
        const ctx = canvasRef.current.getContext('2d');
        const newChart = new Chart(ctx, {
            type: 'doughnut',
            data: {
                labels : currentLabels,
                datasets : [
                    {
                        backgroundColor : currentColors,
                        data : currentNumbers
                    }
                ]
            },
            options : {
                responsive : true,
                maintainAspectRatio : true,
                plugins: {
                    title: {
                        display : true,
                        font: { size: 20 },
                        text : [currentTitle, currentDescription]
                    },
                    legend : {
                        display : true,
                        position : 'left'
                    }
                }
            }
        });
        setChart(newChart);
        console.log("Chart initialized");
    }
    
      
    
    const handleClick = (chartId) => {
        // read the settings of a specific chart from mongoDB
        fetch('/api/readchart/' + chartId, {
            method : "GET"
        }).then((response) => {
            return response.json();
        }).then((responseAsJson) =>{
            setCurrentTitle(responseAsJson.documents.title);
            setCurrentDescription(responseAsJson.documents.description);
            setCurrentColors(responseAsJson.documents.colors);
            setCurrentNumbers(responseAsJson.documents.numbers);
            setCurrentLabels(responseAsJson.documents.labels);

        }).then(() =>{
            console.log(currentTitle);
            console.log(currentLabels);
            console.log(currentColors);
            console.log(currentNumbers);
            console.log(currentDescription);
        }).then(() => {
            // open dialog window
            setShow(true);
        });
    }

    const closeWindow = () => {
        setShow(false);

    }

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
                    <ChartsTable chartsListing={chartListing} handleClick={handleClick}></ChartsTable>
                    <Card bg="light" text="black">
                        <Card.Body>
                            <Button
                                type="button"
                                size="lg"
                                variant="warning"
                                href="/">
                                Go back to Chart Generator
                            </Button>
                        </Card.Body>
                    </Card>
                </Card.Body>
            </Card>
            <Modal show={show}>
                <Modal.Header>
                    <Modal.Title>Chart</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <canvas id="myChart" ref={canvasRef}>

                    </canvas>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="danger"
                        size="lg"
                        onClick={closeWindow}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </Container>
    );
}