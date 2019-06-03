import React, { Component } from 'react'
import { Container, Row, Col } from 'reactstrap';

export class CaseView extends Component {
    render() {
        return (
            <Container>
                <h1>
                    Case {this.props.id}
                </h1>
            </Container>
        )
    }
}

export default CaseView
