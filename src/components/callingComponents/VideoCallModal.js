import React, { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';

const VideoCallModal = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Button variant="outline-light p-0" onClick={handleShow}>
                <svg xmlns="http://www.w3.org/2000/svg" height="24" width="24"><path d="M9 16h2v-3h3v-2h-3V8H9v3H6v2h3Zm-4.925 4.2q-.95 0-1.613-.662-.662-.663-.662-1.613V6.075q0-.95.662-1.613.663-.662 1.613-.662h11.85q.95 0 1.613.662.662.663.662 1.613V10.5l4-4v11l-4-4v4.425q0 .95-.662 1.613-.663.662-1.613.662Zm0-2.275h11.85V6.075H4.075v11.85Zm0 0V6.075v11.85Z" /></svg>
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Calling...</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div style=
                        {{
                            minHeight: "400px",
                            minWidth: "100%",
                        }}>
                        <div>
                            <iframe src="https://giphy.com/embed/gkIfMqsdfMKuQ" width="480" height="472" frameBorder="0" className="giphy-embed" allowFullScreen></iframe>
                        </div>
                    </div>
                </Modal.Body>
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
                                <svg xmlns="http://www.w3.org/2000/svg" height="24" width="24"><path d="M9 16h2v-3h3v-2h-3V8H9v3H6v2h3Zm-4.925 4.2q-.95 0-1.613-.662-.662-.663-.662-1.613V6.075q0-.95.662-1.613.663-.662 1.613-.662h11.85q.95 0 1.613.662.662.663.662 1.613V10.5l4-4v11l-4-4v4.425q0 .95-.662 1.613-.663.662-1.613.662Zm0-2.275h11.85V6.075H4.075v11.85Zm0 0V6.075v11.85Z" fill="#fff" /></svg>
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

export default VideoCallModal;