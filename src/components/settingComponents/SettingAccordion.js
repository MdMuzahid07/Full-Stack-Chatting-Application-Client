import React from 'react';
import { Accordion } from 'react-bootstrap';

const SettingAccordion = () => {
    return (
        <Accordion defaultActiveKey="0" flush>
            <Accordion.Item eventKey="0">
                <Accordion.Header>Personal Info</Accordion.Header>
                <Accordion.Body>

                    <span>
                        <p className="fw-bold">Name</p>
                        <p>Mr. Cat, the boss</p>
                    </span>
                    <hr />
                    <span>
                        <p className="fw-bold">Email</p>
                        <p>mrcat.meow@gmail.com</p>
                    </span>
                    <hr />
                    <span>
                        <p className="fw-bold">Local time</p>
                        <p>07:00 AM Cat</p>
                    </span>
                    <hr />
                    <span>
                        <p className="fw-bold">Location</p>
                        <p>Earth</p>
                    </span>

                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
                <Accordion.Header>Privacy</Accordion.Header>
                <Accordion.Body>
                    <div className="d-flex justify-content-between">
                        <div>Profile Image</div>
                        <div>Everyone</div>
                    </div>


                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2">
                <Accordion.Header>Security</Accordion.Header>
                <Accordion.Body>



                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="3">
                <Accordion.Header>Help</Accordion.Header>
                <Accordion.Body>



                </Accordion.Body>
            </Accordion.Item>
        </Accordion>
    );
};

export default SettingAccordion;



