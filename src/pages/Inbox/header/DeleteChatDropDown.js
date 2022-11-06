import React from 'react';
import { Button, Dropdown } from 'react-bootstrap';

const DeleteChatDropDown = () => {
    return (
        <div className="btn-group dropstart">
            <Dropdown>
                <Dropdown.Toggle variant="outline-light p-0">
                    <svg xmlns="http://www.w3.org/2000/svg" height="24" width="24"><path d="M5.825 14.1q-.875 0-1.487-.625-.613-.625-.613-1.475 0-.875.613-1.488Q4.95 9.9 5.825 9.9q.85 0 1.463.612.612.613.612 1.488 0 .85-.612 1.475-.613.625-1.463.625Zm6.175 0q-.85 0-1.475-.625Q9.9 12.85 9.9 12q0-.875.625-1.488Q11.15 9.9 12 9.9q.875 0 1.488.612.612.613.612 1.488 0 .85-.612 1.475-.613.625-1.488.625Zm6.175 0q-.85 0-1.463-.625Q16.1 12.85 16.1 12q0-.875.612-1.488.613-.612 1.463-.612.875 0 1.488.612.612.613.612 1.488 0 .85-.612 1.475-.613.625-1.488.625Z" /></svg>
                </Dropdown.Toggle>
                <Dropdown.Menu>
                    <Dropdown.Item>
                        <Button variant="p-0">
                            <svg xmlns="http://www.w3.org/2000/svg" height="24" width="24"><path d="M6.925 21.2q-.925 0-1.6-.662-.675-.663-.675-1.613V6.075H3.525V3.8H8.85V2.65h6.275V3.8h5.35v2.275H19.35v12.85q0 .95-.675 1.613-.675.662-1.6.662Zm10.15-15.125H6.925v12.85h10.15ZM8.9 17h2.125V8H8.9Zm4.075 0H15.1V8h-2.125ZM6.925 6.075v12.85Z" /></svg><span className="ms-2 fw-bold"><small>Delete conversation</small></span>
                        </Button>
                    </Dropdown.Item>
                    <Dropdown.Divider />
                    <Dropdown.Item>
                        <Button variant="p-0">
                            <svg xmlns="http://www.w3.org/2000/svg" height="24" width="24"><path d="M12 22.2q-2.125 0-3.988-.8-1.862-.8-3.237-2.188Q3.4 17.825 2.6 15.962 1.8 14.1 1.8 12q0-2.125.8-3.988.8-1.862 2.175-3.237Q6.15 3.4 8.012 2.6 9.875 1.8 12 1.8t3.988.8q1.862.8 3.237 2.175Q20.6 6.15 21.4 8.012q.8 1.863.8 3.988 0 2.1-.8 3.962-.8 1.863-2.175 3.25Q17.85 20.6 15.988 21.4q-1.863.8-3.988.8Zm0-2.275q3.325 0 5.625-2.312 2.3-2.313 2.3-5.613 0-1.3-.4-2.513-.4-1.212-1.2-2.237L7.25 18.325q1.025.8 2.238 1.2 1.212.4 2.512.4Zm-6.325-3.2L16.725 5.65Q15.7 4.875 14.5 4.475q-1.2-.4-2.5-.4-3.325 0-5.625 2.3T4.075 12q0 1.275.4 2.487.4 1.213 1.2 2.238Z" /></svg><span className="ms-2 fw-bold"><small>Block</small></span>
                        </Button>
                    </Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
        </div>
    );
};

export default DeleteChatDropDown;