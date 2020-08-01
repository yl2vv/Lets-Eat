import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Footer() {

    return(
        <footer className="mt-5">
            <Container fluid={true}>
                <Row className="justify-content-between p-5">
                    <Col className='footer'>
                        Created by James Lim,
                        July 2020
                    </Col>
                </Row>
            </Container>
        </footer>
    );

}

export default Footer;