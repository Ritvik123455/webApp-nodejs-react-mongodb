import React from "react";
import { Container, Row, Col } from "react-bootstrap";

export default function SettingsListing({ settings }) {
    if (settings.length === 0) {
        return <h3 style={{ textAlign: 'center' }}>No items available</h3>;
    }

    return (
        <Container>
            <Row>
                <Col><h4>Labels</h4></Col>
                <Col><h4>Numbers</h4></Col>
                <Col><h4>Colors</h4></Col>
            </Row>
            {settings.map((item, index) => (
                <Row key={index}>
                    <Col>{item.label}</Col>
                    <Col>{item.number}</Col>
                    <Col>{item.color}</Col>
                </Row>
            ))}
        </Container>
    );
}
