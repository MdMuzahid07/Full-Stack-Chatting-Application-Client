import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import InboxFooter from './footer/InboxFooter';
import InboxHeader from './header/InboxHeader';
import MessageBox from './MessageBox';

const ResponsiveChatBoxModal = () => {
    const [fullscreen, setFullscreen] = useState(true);
    const [show, setShow] = useState(false);

    function handleShow(breakpoint) {
        setFullscreen(breakpoint);
        setShow(true);
    }

    return (
        <>
            <div onClick={() => handleShow(true)}>
                <svg xmlns="http://www.w3.org/2000/svg" height="24" width="24"><path d="m22.2 22.2-4-4H4.075q-.95 0-1.613-.662-.662-.663-.662-1.613V4.075q0-.95.662-1.613.663-.662 1.613-.662h15.85q.95 0 1.613.662.662.663.662 1.613ZM4.075 4.075v11.85h14.9l.95.975V4.075H4.075Zm0 0V16.9 4.075Z" /></svg><span className="text-dark fw-bold ms-2">Chats</span>
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
        </>
    );
};

export default ResponsiveChatBoxModal;


