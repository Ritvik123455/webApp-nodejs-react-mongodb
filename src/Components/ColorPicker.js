import React from "react";
import { Form } from 'react-bootstrap';

export default class ColorPicker extends React.Component{

    constructor(props){
        super(props);
    }

    render(){
        return (
            <Form.Group controlId='colorPicker'>
                <Form.Label>
                    <h4>Color Picker</h4>
                </Form.Label>

                <Form.Control
                    as='select'
                    name='colorPicker'
                    value={this.props.val}
                    onChange={this.props.inputHandler}>
                        <option value='orange'>Orange</option>
                        <option value='red'>Red</option>
                        <option value='green'>Green</option>
                        <option value='blue'>Blue</option>
                        <option value='yellow'>Yellow</option>
                        <option value='purple'>Purple</option>
                        <option value='pink'>Pink</option>
                        <option value='orange'>Orange</option>
                </Form.Control>
                <Form.Text></Form.Text>
            </Form.Group>
        );
    }
}