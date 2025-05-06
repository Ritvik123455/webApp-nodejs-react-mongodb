import React, { useState, useEffect } from "react";
import { Card, Container, Col, Row, Button } from 'react-bootstrap';
import CustomTextField from "./CustomTextField.js";
import ColorPicker from "./ColorPicker.js";

export default function ChartGenerator() {
    const [chartTitle, setChartTitle] = useState('');
    const [chartDescription, setChartDescription] = useState('');
    const [currentLabel, setCurrentLabel] = useState('');
    const [currentNumber, setCurrentNumber] = useState('');
    const [currentColor, setCurrentColor] = useState('red');
    const [settingsListing, setSettingsListing] = useState('');

    useEffect(() => {
        console.log("Updated settingsListing:", settingsListing);
    }, [settingsListing]);
    

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
    };

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

                        </Card.Body>
                    </Card>

                    <Card bg='light' style={{ color: 'black', marginTop: '1.5em' }}>
                        <Card.Header as='h3'>Charts</Card.Header>
                        <Card.Body>

                        </Card.Body>
                    </Card>
                </Card.Body>
            </Card>
        </Container>
    );
}
