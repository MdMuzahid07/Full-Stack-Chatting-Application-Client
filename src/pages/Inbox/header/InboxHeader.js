import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';

const InboxHeader = () => {
    return (
        <Navbar className="bg-light border-b-custom">
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
                    <Nav.Link href="#deets">
                        <svg xmlns="http://www.w3.org/2000/svg" height="24" width="24"><path d="M19.95 21.175q-3.25 0-6.35-1.45-3.1-1.45-5.487-3.838Q5.725 13.5 4.263 10.4 2.8 7.3 2.8 4.025q0-.525.35-.875t.9-.35H8.1q.475 0 .825.275t.425.75L10 7.2q.075.45-.012.8-.088.35-.388.625l-2.45 2.4q1 1.675 2.5 3.163 1.5 1.487 3.275 2.562l2.375-2.375q.3-.275.725-.4t.85-.05l3.3.675q.475.125.75.45t.275.8v4.1q0 .525-.35.875t-.9.35ZM6.05 8.9 7.7 7.3l-.4-2.225H5.1q.125.975.338 1.937.212.963.612 1.888Zm8.975 8.975q.95.4 1.925.637.975.238 1.975.338v-2.175l-2.225-.45ZM6.05 8.9Zm8.975 8.975Z" /></svg>
                    </Nav.Link>
                    <Nav.Link>
                        <svg xmlns="http://www.w3.org/2000/svg" height="24" width="24"><path d="M9 16h2v-3h3v-2h-3V8H9v3H6v2h3Zm-4.925 4.2q-.95 0-1.613-.662-.662-.663-.662-1.613V6.075q0-.95.662-1.613.663-.662 1.613-.662h11.85q.95 0 1.613.662.662.663.662 1.613V10.5l4-4v11l-4-4v4.425q0 .95-.662 1.613-.663.662-1.613.662Zm0-2.275h11.85V6.075H4.075v11.85Zm0 0V6.075v11.85Z" /></svg>
                    </Nav.Link>
                    <Nav.Link>
                        <svg xmlns="http://www.w3.org/2000/svg" height="24" width="24"><path d="M5.825 14.1q-.875 0-1.487-.625-.613-.625-.613-1.475 0-.875.613-1.488Q4.95 9.9 5.825 9.9q.85 0 1.463.612.612.613.612 1.488 0 .85-.612 1.475-.613.625-1.463.625Zm6.175 0q-.85 0-1.475-.625Q9.9 12.85 9.9 12q0-.875.625-1.488Q11.15 9.9 12 9.9q.875 0 1.488.612.612.613.612 1.488 0 .85-.612 1.475-.613.625-1.488.625Zm6.175 0q-.85 0-1.463-.625Q16.1 12.85 16.1 12q0-.875.612-1.488.613-.612 1.463-.612.875 0 1.488.612.612.613.612 1.488 0 .85-.612 1.475-.613.625-1.488.625Z" /></svg>
                    </Nav.Link>
                </Nav>
            </Container>

        </Navbar>
    );
};

export default InboxHeader;