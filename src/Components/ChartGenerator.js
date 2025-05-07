import React, { useState, useEffect } from "react";
import { Card, Container, Col, Row, Button, Modal, ButtonGroup } from 'react-bootstrap';
import CustomTextField from "./CustomTextField.js";
import ColorPicker from "./ColorPicker.js";
import SettingsListing from "./settingsListing.js";
import ChartDisplay from "./chartDisplay.js";

export default function ChartGenerator() {
    const [chartTitle, setChartTitle] = useState('');
    const [chartDescription, setChartDescription] = useState('');
    const [currentLabel, setCurrentLabel] = useState('');
    const [currentNumber, setCurrentNumber] = useState('');
    const [currentColor, setCurrentColor] = useState('red');
    const [settingsListing, setSettingsListing] = useState([]);
    const [colors, setColors] = useState([]);
    const [labels, setLabels] = useState([]);
    const [numbers, setNumbers] = useState([]);
    const [displayChart, setDisplayChart] = useState(false);
    const [show, setShow] = useState(false);
    const [windowTitle, setWindowTitle] = useState('');
    const [windowContent, setWindowContent] = useState('');

    useEffect(() => {
        console.log("Updated settingsListing:", settingsListing);
    }, [settingsListing]);
    

    const closeWindow = () => {
        setShow(false);
        console.log("Dialog box closed");

    }

    const inputHandler = (event) => {
        const { name, value } = event.target;

        switch(name) {
            case 'chartTitle':
                setChartTitle(value);
                console.log("The current chart title is " + value);
                break;
            case 'chartDescription':
                setChartDescription(value);
                console.log("The current chart description is " + value);
                break;
            case 'currentLabel':
                setCurrentLabel(value);
                console.log("The current label title is " + value);
                break;
            case 'currentNumber':
                setCurrentNumber(value);
                console.log("The current number is " + value);
                break;
            case 'colorPicker':
                setCurrentColor(value);
                console.log("The current color is " + value);
                break;
            default:
                break;
        }
    };
    const addSettings = () => {
        
        setSettingsListing(prevSettings => [...prevSettings, {
            label : currentLabel,
            number : currentNumber,
            color : currentColor
        }]);
        console.log("Settings");
        console.log(settingsListing);
        setColors(prev => [...prev, currentColor]);
        setLabels(prev => [...prev, currentLabel]);
        setNumbers(prev => [...prev, currentNumber]);
        console.log("Colors : ");
        console.log(colors);
        console.log("Labels :");
        console.log(labels);
        console.log("Numbers :");
        console.log(numbers);
    };

    const displayTheChart = () => {
        setDisplayChart(true);
        console.log("You want to display the chart");
    }

    const saveChart = () => {
        console.log("You want to save the chart!");
        fetch('/api/savechart', {
            method : "POST",
            headers : {
                'content-type' : 'application/json'
            },
            body : JSON.stringify({
                title : chartTitle,
                description : chartDescription,
                colors : colors,
                labels : labels,
                numbers : numbers
            })
        }).then((response) => {
            return response.json();
        }).then((responseAsJson) => {
            if(responseAsJson.success === true){
                setWindowTitle("Success");
                setWindowContent(responseAsJson.message);
                setShow(true);
                console.log("Settings were saved successfully!");
            }
            else{
                setWindowTitle("ERROR");
                setWindowContent(responseAsJson.message);
                setShow(true);
                console.log("Problems were encountered! :((");
            }
        });
    }

    return(
        <Container>
            <Card bg='info' text='white'>
                <Card.Header as='h1' style={{ textAlign: 'center' }}>
                    ChartGenerator
                </Card.Header>
                <Card.Body>

                    <Card bg='light' style={{ color: 'black', marginTop: '1.5em' }}>
                        <Card.Header as='h3'>Title and Description</Card.Header>
                        <Card.Body>
                            <Container>
                                <Row>
                                    <Col>
                                        <CustomTextField 
                                            customId='chartTitle'
                                            label='Title'
                                            name='chartTitle'
                                            placeholder='Type in brief title...'
                                            val={chartTitle}
                                            inputHandler={inputHandler}
                                            text='Chart Title' />
                                    </Col>
                                    <Col>
                                        <CustomTextField 
                                            customId='chartDescription'
                                            label='Description'
                                            name='chartDescription'
                                            placeholder='Type in a description...'
                                            val={chartDescription}
                                            inputHandler={inputHandler}
                                            text='Chart description' />
                                    </Col>
                                </Row>
                            </Container>
                        </Card.Body>
                    </Card>

                    <Card bg='light' style={{ color: 'black', marginTop: '1.5em' }}>
                        <Card.Header as='h3'>Numeric values and Labels</Card.Header>
                        <Card.Body>
                            <Container>
                                <Row>
                                    <Col>
                                        <CustomTextField 
                                            customId='currentLabel'
                                            label='Label'
                                            name='currentLabel'
                                            placeholder='Label'
                                            val={currentLabel}
                                            inputHandler={inputHandler}
                                            text='Label' />
                                    </Col>
                                    <Col>
                                        <CustomTextField 
                                            customId='currentNumber'
                                            label='Numeric Value'
                                            name='currentNumber'
                                            placeholder='number'
                                            val={currentNumber}
                                            inputHandler={inputHandler}
                                            text='Numeric Value' />
                                    </Col>
                                    <Col>
                                        <ColorPicker 
                                            val={currentColor} 
                                            inputHandler={inputHandler} />
                                    </Col>
                                    <Col>
                                        <Button
                                            type="button"
                                            size="lg"
                                            variant="success"
                                            style={{marginTop:'2em'}}
                                            onClick={addSettings}>
                                            Add Settings
                                        </Button>
                                    </Col>
                                </Row>
                            </Container>
                        </Card.Body>
                    </Card>

                    <Card bg='light' style={{ color: 'black', marginTop: '1.5em' }}>
                        <Card.Header as='h3'>Settings Listing</Card.Header>
                        <Card.Body>
                            <SettingsListing settings = {settingsListing}></SettingsListing>
                        </Card.Body>
                    </Card>

                    <Card bg='light' style={{ color: 'black', marginTop: '1.5em' }}>
                        <Card.Header as='h3'>Charts</Card.Header>
                        <Card.Body>
                            {
                                (displayChart === false)
                                ?(
                                    <div style={{textAlign:'center'}}>
                                        <Button
                                            type="button"
                                            variant="danger"
                                            size="lg"
                                            onClick={displayTheChart}>
                                            Create Chart
                                        </Button>
                                    </div>
                                )
                                :
                                (
                                    <ChartDisplay 
                                        title={chartTitle}
                                        description={chartDescription}
                                        numbers={numbers}
                                        labels={labels}
                                        colors={colors}></ChartDisplay>
                                )
                            }
                        </Card.Body>
                    </Card>
                    <Card bg="light"
                                style={{
                                    color : 'black',
                                    marginTop : '1.5em'
                                }}>
                                <Card.Body>
                                    <ButtonGroup>
                                        {
                                            (displayChart === true)
                                            ?
                                            (
                                                <Button
                                                    variant="success"
                                                    size="lg"
                                                    type="button"
                                                    onClick={saveChart}>
                                                    Save Chart
                                                </Button>
                                            )
                                            :
                                            (
                                                null
                                            )
                                        }
                                        <Button 
                                            href="/chartlisting" 
                                            variant="warning"
                                            size="lg">Charts Listing</Button>
                                    </ButtonGroup>
                                </Card.Body>
                            </Card>
                </Card.Body>
            </Card>
            <Modal show={show}>
                <Modal.Header>
                    <Modal.Title>{windowTitle}</Modal.Title>
                </Modal.Header>
                <Modal.Body><h5>{windowContent}</h5></Modal.Body>
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
