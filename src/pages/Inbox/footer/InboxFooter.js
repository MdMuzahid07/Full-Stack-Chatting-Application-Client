import React from 'react';
import { Button, Container, Form, InputGroup, Navbar } from 'react-bootstrap';

const InboxFooter = () => {
    return (
        <footer>
            <Navbar variant="dark" className="bg-white border-t-custom">
                <Container>
                    <div className="d-flex position-relative">
                        <input
                            className="rounded-3 p-3 border border-2 custom-chat-input" placeholder="write here" name="" ></input>
                        <div className="dark ms-2 position-absolute end-0 p-3">
                            <svg xmlns="http://www.w3.org/2000/svg" height="24" width="24"><path d="M2.825 20.2V3.8L22.25 12ZM5 16.9 16.625 12 5 7.1v3.3l6.1 1.6L5 13.6Zm0 0V7.1v6.5Z" /></svg>
                        </div>
                    </div>
                    <div className="d-flex">
                        <Button variant="white ms-2">
                            <svg xmlns="http://www.w3.org/2000/svg" height="24" width="24"><path d="M11.5 22.225q-2.4 0-4.062-1.663Q5.775 18.9 5.775 16.5V5.9q0-1.725 1.225-2.95t2.95-1.225q1.725 0 2.963 1.225Q14.15 4.175 14.15 5.9v8.05h-1.7V5.9q0-1.05-.725-1.775Q11 3.4 9.95 3.4q-1.05 0-1.775.725Q7.45 4.85 7.45 5.9v10.6q0 1.675 1.188 2.863Q9.825 20.55 11.5 20.55q.675 0 1.275-.213.6-.212 1.075-.587v1.95q-.525.25-1.125.387-.6.138-1.225.138Zm4.35-1.075v-3h-3v-2.3h3v-3h2.3v3h3v2.3h-3v3ZM11.5 16.4v1.7q-1.1 0-1.875-.775-.775-.775-.775-1.875V5.9h1.7v9.55q0 .4.275.675t.675.275Zm4.05-5.4V5.9h1.675V11Z" /></svg>
                        </Button>
                        <Button variant="white ms-2">
                            <svg xmlns="http://www.w3.org/2000/svg" height="24" width="24"><path d="M12 12Zm0 10.2q-2.125 0-3.988-.8-1.862-.8-3.237-2.175Q3.4 17.85 2.6 15.988 1.8 14.125 1.8 12t.8-3.988q.8-1.862 2.175-3.237Q6.15 3.4 8.012 2.6 9.875 1.8 12 1.8q1.025 0 2 .2.975.2 1.85.55v2.525q-.85-.45-1.812-.725-.963-.275-2.038-.275-3.3 0-5.612 2.312Q4.075 8.7 4.075 12q0 3.3 2.313 5.613Q8.7 19.925 12 19.925q3.3 0 5.613-2.312Q19.925 15.3 19.925 12q0-.775-.15-1.488-.15-.712-.4-1.362H21.8q.2.675.3 1.375.1.7.1 1.475 0 2.125-.8 3.988-.8 1.862-2.175 3.237Q17.85 20.6 15.988 21.4q-1.863.8-3.988.8Zm7.85-14.975V5.15h-2.075v-2.3h2.075V.775h2.3V2.85h2.075v2.3H22.15v2.075Zm-4.4 3.825q.65 0 1.1-.45.45-.45.45-1.1 0-.65-.45-1.1-.45-.45-1.1-.45-.65 0-1.1.45-.45.45-.45 1.1 0 .65.45 1.1.45.45 1.1.45Zm-6.9 0q.65 0 1.1-.45.45-.45.45-1.1 0-.65-.45-1.1-.45-.45-1.1-.45-.65 0-1.1.45Q7 8.85 7 9.5q0 .65.45 1.1.45.45 1.1.45ZM12 17.5q1.725 0 3.125-.988 1.4-.987 2-2.587H6.875q.6 1.6 2 2.587 1.4.988 3.125.988Z" /></svg>
                        </Button>
                    </div>
                </Container>
            </Navbar>
        </footer>
    );
};

export default InboxFooter;