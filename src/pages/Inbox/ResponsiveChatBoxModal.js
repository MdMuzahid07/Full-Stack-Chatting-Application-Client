import React, { Children, useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import InboxFooter from './footer/InboxFooter';
import InboxHeader from './header/InboxHeader';
import MessageBox from './MessageBox';

const ResponsiveChatBoxModal = ({ img }) => {
    const [fullscreen, setFullscreen] = useState(true);
    const [show, setShow] = useState(false);

    function handleShow(breakpoint) {
        setFullscreen(breakpoint);
        setShow(true);
    }

    return (
        <div className="d-flex d-lg-none">
            <div onClick={() => handleShow(true)}>
                {img}
            </div>
            <Modal show={show} fullscreen={fullscreen} onHide={() => setShow(false)}>
                <Modal.Header closeButton>
                    <div style={{ width: "100%" }}>
                        <InboxHeader />
                    </div>
                </Modal.Header>
                <Modal.Body>

                    <div className="">
                        <MessageBox />
                        <MessageBox />
                        <MessageBox />
                        <MessageBox />
                        <MessageBox />
                        <MessageBox />
                        <MessageBox />
                        <MessageBox />
                        <MessageBox />
                        <MessageBox />
                        <MessageBox />
                        <MessageBox />
                        <MessageBox />
                        <MessageBox />
                        <MessageBox />
                        <MessageBox />
                        <MessageBox />
                        <MessageBox />
                        <MessageBox />
                        <MessageBox />
                        <MessageBox />
                        <MessageBox />
                        <MessageBox />
                        <MessageBox />
                        <MessageBox />
                        <MessageBox />
                        <MessageBox />
                        <MessageBox />
                        <MessageBox />
                        <MessageBox />
                        <MessageBox />
                        <MessageBox />
                    </div>
                    <div className="position-fixed bottom-0 start-0" style={{ width: "100vw" }}>
                        <InboxFooter />
                    </div>
                </Modal.Body>
            </Modal>
        </div>
    );
};

export default ResponsiveChatBoxModal;


