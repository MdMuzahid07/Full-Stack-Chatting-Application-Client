import React, { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';

const AudioCallModal = () => {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Button variant="outline-light p-0" onClick={handleShow}>
                <svg xmlns="http://www.w3.org/2000/svg" height="24" width="24"><path d="M19.95 21.175q-3.25 0-6.35-1.45-3.1-1.45-5.487-3.838Q5.725 13.5 4.263 10.4 2.8 7.3 2.8 4.025q0-.525.35-.875t.9-.35H8.1q.475 0 .825.275t.425.75L10 7.2q.075.45-.012.8-.088.35-.388.625l-2.45 2.4q1 1.675 2.5 3.163 1.5 1.487 3.275 2.562l2.375-2.375q.3-.275.725-.4t.85-.05l3.3.675q.475.125.75.45t.275.8v4.1q0 .525-.35.875t-.9.35ZM6.05 8.9 7.7 7.3l-.4-2.225H5.1q.125.975.338 1.937.212.963.612 1.888Zm8.975 8.975q.95.4 1.925.637.975.238 1.975.338v-2.175l-2.225-.45ZM6.05 8.9Zm8.975 8.975Z" /></svg>
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Calling...</Modal.Title>
                </Modal.Header>
                <Modal.Footer>
                    <div className="d-flex">
                        <div className="position-absolute start-0 bottom-0 my-2 ms-2">
                            <img
                                alt=""
                                src="https://nationaltoday.com/wp-content/uploads/2020/08/international-cat-day.jpg"
                                width="50"
                                height="50"
                                className="rounded-circle me-2"
                            />
                            <span>Mr Cat</span>
                        </div>
                        <div>
                            <Button variant="" className="rounded-5 bg-primary" onClick={handleClose}>
                                <svg xmlns="http://www.w3.org/2000/svg" height="24" width="24"><path d="M19.15 11.75q0-2.925-2.037-4.963Q15.075 4.75 12.15 4.75v-2.1q1.875 0 3.538.725 1.662.725 2.887 1.95T20.513 8.2q.712 1.65.712 3.55Zm-4.1 0q0-1.2-.85-2.05-.85-.85-2.05-.85v-2.1q2.075 0 3.538 1.462 1.462 1.463 1.462 3.538Zm4.9 9.425q-3.25 0-6.35-1.45-3.1-1.45-5.487-3.838Q5.725 13.5 4.263 10.4 2.8 7.3 2.8 4.025q0-.525.35-.875t.9-.35H8.1q.475 0 .825.275t.425.75L10 7.2q.075.45-.012.8-.088.35-.388.625l-2.45 2.4q1 1.675 2.5 3.163 1.5 1.487 3.275 2.562l2.375-2.375q.3-.275.725-.4t.85-.05l3.3.675q.475.125.75.45t.275.8v4.1q0 .525-.35.875t-.9.35ZM6.05 8.9 7.7 7.3l-.4-2.225H5.1q.125.975.338 1.937.212.963.612 1.888Zm8.975 8.975q.95.4 1.925.637.975.238 1.975.338v-2.175l-2.225-.45ZM6.05 8.9Zm8.975 8.975Z" fill="#fff" /></svg>
                            </Button>
                            <Button variant="" className="rounded-5 bg-primary ms-3" onClick={handleClose}>
                                <svg xmlns="http://www.w3.org/2000/svg" height="24" width="24"><path d="m19.8 22.675-5.4-5.4q-2.25 1.825-4.937 2.863-2.688 1.037-5.488 1.037-.65 0-.913-.325-.262-.325-.262-.875v-4.15q0-.475.275-.8.275-.325.75-.425l3.45-.7q.375-.075.7.012.325.088.6.338l2.525 2.5q.4-.225.85-.525.45-.3.8-.6L1.4 4.275 2.875 2.8l18.4 18.4Zm-10.85-4.85L7.325 16.2l-2.25.475v2.175q1-.1 1.962-.362.963-.263 1.913-.663ZM17.3 14.3l-1.6-1.6q.325-.35.638-.813.312-.462.487-.862l-2.475-2.45q-.275-.25-.362-.575-.088-.325-.013-.65l.675-3.525q.1-.475.45-.75t.825-.275H20q.525 0 .863.35.337.35.337.9 0 2.725-1.037 5.35-1.038 2.625-2.863 4.9Zm.625-5.4q.4-.925.625-1.888.225-.962.325-1.937h-2.15l-.45 2.225Zm0 0ZM8.95 17.825Z" fill="#fff" /></svg>
                            </Button>
                        </div>
                    </div>
                </Modal.Footer>
            </Modal>
        </>
    );
};

export default AudioCallModal;