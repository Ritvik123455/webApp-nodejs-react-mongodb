import React from "react";
import { Card, Container } from 'react-bootstrap';
import CustomTextField from "./CustomTextField.js";


export default class ChartGenerator extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            chartTitle : '',

        }

        this.inputHandler = this.inputHandler.bind(this);
    }
    inputHandler( event ){
        if(event.target.name === 'chartTitle'){
            
            // Updating state variable when user inputs text.
            this.setState({
                chartTitle : event.target.value
            });
        }
    }

    render(){
        return(
            <Container>
                <Card bg='info' text='white' >
                    <Card.Header as='h1'
                    style={{textAlign : 'center'}}>
                        ChartGenerator
                    </Card.Header>
                    <Card.Body>
                        <Card bg='light' style={{color : 'black', marginTop : '1.5em'}}>
                            <Card.Header as='h3'>
                                Title and Description
                            </Card.Header>
                            <Card.Body>
                                <CustomTextField 
                                    customId='chartTitle'
                                    label='Title'
                                    name='chartTitle'
                                    placeholder='Type in brief title...'
                                    val={this.state.chartTitle}
                                    inputHandler={this.inputHandler}
                                    text='Chart Title'/>
                            </Card.Body>
                        </Card> 
                        <Card bg='light' style={{color : 'black', marginTop : '1.5em'}}>
                            <Card.Header as='h3'>
                                Numeric values and Labels
                            </Card.Header>
                            <Card.Body>

                            </Card.Body>
                        </Card>
                        <Card bg='light' style={{color : 'black', marginTop : '1.5em'}}>
                            <Card.Header as='h3'>
                                Settings Listing
                            </Card.Header>
                            <Card.Body>

                            </Card.Body>
                        </Card>
                        <Card bg='light' style={{color : 'black', marginTop : '1.5em'}}>
                            <Card.Header as='h3'>
                                Charts
                            </Card.Header>
                            <Card.Body>

                            </Card.Body>
                        </Card>
                               
                    </Card.Body>
                </Card>
            </Container>
        );
    }
}