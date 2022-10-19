import React from 'react';
import { Container, Navbar } from 'react-bootstrap';

const InboxHeader = () => {
    return (
        <Navbar variant="dark" className="bg-white border-b-custom">
            <Container>
                <Navbar.Brand href="#home">
                    <img
                        alt=""
                        src="/logo.svg"
                        width="30"
                        height="30"
                        className="d-inline-block align-top"
                    />{' '}
                    React Bootstrap
                </Navbar.Brand>
            </Container>
        </Navbar>
    );
};

export default InboxHeader;