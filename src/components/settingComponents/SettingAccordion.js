import React from 'react';
import { Accordion } from 'react-bootstrap';

const SettingAccordion = () => {
    return (
        <Accordion defaultActiveKey="0" flush>
            <Accordion.Item eventKey="0">
                <Accordion.Header>Personal Info</Accordion.Header>
                <Accordion.Body>

                    <div className="d-flex justify-content-between">
                        <div>
                            <p className="fw-bold">Name</p>
                            <p>Mr. Cat, the boss</p>
                        </div>
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" height="24" width="24"><path d="M11.85 21.15v-2.325l5.35-5.35 2.325 2.325-5.35 5.35Zm-9-4.925V13.95h7.375v2.275ZM20.225 15.1 17.9 12.775l.725-.725q.325-.3.8-.312.475-.013.8.312l.725.725q.325.325.313.8-.013.475-.313.8ZM2.85 12.025V9.75h11.3v2.275Zm0-4.175V5.575h11.3V7.85Z" /></svg>
                        </div>
                    </div>
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
                    <hr />
                    <div className="d-flex justify-content-between">
                        <div>Last Seen</div>
                        <div>Everyone</div>
                    </div>

                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2">
                <Accordion.Header>Security</Accordion.Header>
                <Accordion.Body>

                    <div className="d-flex justify-content-between">
                        <div>Show security notification</div>
                        <div>True</div>
                    </div>

                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="3">
                <Accordion.Header>Help</Accordion.Header>
                <Accordion.Body>

                    <span>
                        <p>FAQ</p>
                    </span>
                    <hr />
                    <span>
                        <p>Report error</p>
                    </span>
                    <hr />
                    <span>
                        <p>Terms and policy</p>
                    </span>

                </Accordion.Body>
            </Accordion.Item>
        </Accordion>
    );
};

export default SettingAccordion;



