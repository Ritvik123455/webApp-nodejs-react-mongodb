import React from "react";
import { Form } from 'react-bootstrap';

export default class CustomTextField extends React.Component{

    constructor(props){
        super(props);
    }

    render(){
        return(
            <Form.Group>
                <Form.Label controlId={this.props.customId}>
                    <h4>{this.props.label}</h4>
                </Form.Label>
                <Form.Control
                    type="text"
                    size="lg"
                    name={this.props.placeholder}
                    value={this.props.val}
                    onChange={this.props.inputHandler}>

                </Form.Control>
                <Form.Text>
                    {this.props.text}
                </Form.Text>
            </Form.Group>
        );
    }
}