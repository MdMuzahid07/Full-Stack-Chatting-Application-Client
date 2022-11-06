import React from 'react';
import { Button, Dropdown } from 'react-bootstrap';

const ThreeDotsDropDown = () => {
    return (
        <div className="btn-group dropstart">
            <Dropdown>
                <Dropdown.Toggle variant="outline-light p-0">
                    <svg xmlns="http://www.w3.org/2000/svg" height="24" width="24"><path d="M12 20.275q-.85 0-1.475-.612-.625-.613-.625-1.488 0-.85.625-1.463Q11.15 16.1 12 16.1q.875 0 1.488.612.612.613.612 1.463 0 .875-.612 1.488-.613.612-1.488.612Zm0-6.175q-.85 0-1.475-.625Q9.9 12.85 9.9 12q0-.875.625-1.488Q11.15 9.9 12 9.9q.875 0 1.488.612.612.613.612 1.488 0 .85-.612 1.475-.613.625-1.488.625Zm0-6.2q-.85 0-1.475-.613Q9.9 6.675 9.9 5.825q0-.875.625-1.488.625-.612 1.475-.612.875 0 1.488.612.612.613.612 1.488 0 .85-.612 1.462Q12.875 7.9 12 7.9Z" /></svg>
                </Dropdown.Toggle>
                <Dropdown.Menu>
                    <Dropdown.Item>
                        <Button variant="p-0">
                            <svg xmlns="http://www.w3.org/2000/svg" height="24" width="24"><path d="M6.925 21.2q-.925 0-1.6-.662-.675-.663-.675-1.613V6.075H3.525V3.8H8.85V2.65h6.275V3.8h5.35v2.275H19.35v12.85q0 .95-.675 1.613-.675.662-1.6.662Zm10.15-15.125H6.925v12.85h10.15ZM8.9 17h2.125V8H8.9Zm4.075 0H15.1V8h-2.125ZM6.925 6.075v12.85Z" /></svg><span className="ms-2 fw-bold"><small>Delete</small></span>
                        </Button>
                    </Dropdown.Item>
                    <Dropdown.Divider />
                    <Dropdown.Item>
                        <Button variant="p-0">
                            <svg xmlns="http://www.w3.org/2000/svg" height="24" width="24"><path d="M18.9 19.15V15q0-1.2-.838-2.025-.837-.825-2.037-.825H7.15l3.475 3.45-1.6 1.6-6.2-6.2 6.2-6.2 1.6 1.6L7.15 9.85h8.875q2.15 0 3.65 1.513 1.5 1.512 1.5 3.637v4.15Z" /></svg><span className="ms-2 fw-bold"><small>Reply</small></span>
                        </Button>
                    </Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
        </div>
    );
};

export default ThreeDotsDropDown;