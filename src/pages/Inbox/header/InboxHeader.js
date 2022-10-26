import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import AudioCallModal from '../../../components/callingComponents/AudioCallModal';
import VideoCallModal from '../../../components/callingComponents/VideoCallModal';
import DeleteChatDropDown from './DeleteChatDropDown';

const InboxHeader = () => {

    return (
        <Navbar className="bg-white border-b-custom">
            <Container>
                <Navbar.Brand href="#home">
                    <div className="d-flex">
                        <img
                            alt=""
                            src="https://nationaltoday.com/wp-content/uploads/2020/08/international-cat-day.jpg"
                            width="50"
                            height="50"
                            className="d-inline-block align-top rounded-circle"
                        />
                        <p className="ms-2 mt-2 fw-bold">Mr Cat</p>
                    </div>
                </Navbar.Brand>
                <Nav>
                    <Nav.Link>
                        <AudioCallModal />
                    </Nav.Link>
                    <Nav.Link>
                        <VideoCallModal />
                    </Nav.Link>
                    <Nav.Link>
                        <DeleteChatDropDown />
                    </Nav.Link>
                </Nav>
            </Container>

        </Navbar>
    );
};

export default InboxHeader;