import React from 'react';
import { Dropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import ResponsiveChatBoxModal from '../../pages/Inbox/ResponsiveChatBoxModal';

const DropDownProfile = () => {
    return (
        <Dropdown>
            <Dropdown.Toggle id="dropdown-toggle" variant="">
                <img className="border border-2 border-white mt-4 img-fluid rounded-circle" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIi_a9WP926ruhJ1h6znk6nYQndHRnQ995Ig&usqp=CAU" alt="" />
            </Dropdown.Toggle>

            <Dropdown.Menu variant="light">
                <Dropdown.Item eventKey="0">
                    <img
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6o04d9prZDVWlxJpl_atIHLQ6gUxxjjku4kpkRRozFXmx3LRqeuVLKiG2XIgq7U-nQTk&usqp=CA"
                        width="50"
                        height="50"
                        className=" rounded-circle border border-2 border-dark"
                        alt="ChatCloud_logo"
                    />
                </Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item as={Link} to="/profile"><svg xmlns="http://www.w3.org/2000/svg" height="24" width="24"><path d="M12 11.9q-1.75 0-2.975-1.238Q7.8 9.425 7.8 7.7q0-1.75 1.225-2.975T12 3.5q1.75 0 2.975 1.225T16.2 7.7q0 1.725-1.225 2.962Q13.75 11.9 12 11.9Zm-8.2 8.4v-3q0-.925.463-1.675.462-.75 1.237-1.15 1.575-.8 3.2-1.188 1.625-.387 3.3-.387 1.675 0 3.3.387 1.625.388 3.2 1.163.775.4 1.238 1.163.462.762.462 1.687v3Zm2.275-2.275h11.85v-.7q0-.275-.137-.5-.138-.225-.363-.325-1.3-.675-2.663-1-1.362-.325-2.762-.325t-2.762.325q-1.363.325-2.663 1-.225.1-.362.325-.138.225-.138.5ZM12 9.625q.8 0 1.363-.563.562-.562.562-1.362t-.562-1.363Q12.8 5.775 12 5.775t-1.362.562q-.563.563-.563 1.363t.563 1.362q.562.563 1.362.563ZM12 7.7Zm0 10.325Z" /></svg> Profile</Dropdown.Item>
                <Dropdown.Item as={Link} to="/settings"><svg xmlns="http://www.w3.org/2000/svg" height="24" width="24"><path d="m9.075 22.2-.4-3.25q-.3-.125-.538-.275-.237-.15-.487-.325l-3.025 1.3-2.95-5.075 2.625-2v-1.15l-2.625-2 2.95-5.05 3.05 1.275q.225-.175.475-.325.25-.15.525-.25l.4-3.275h5.85l.4 3.275q.3.1.538.25.237.15.487.325l3.025-1.275 2.95 5.05-2.65 2q.025.15.025.287v.575q0 .138-.05.288l2.65 2-2.95 5.075-3.025-1.3q-.225.175-.475.325-.25.15-.525.275l-.4 3.25Zm2.95-6.7q1.45 0 2.475-1.025Q15.525 13.45 15.525 12q0-1.45-1.025-2.475Q13.475 8.5 12.025 8.5q-1.45 0-2.475 1.025Q8.525 10.55 8.525 12q0 1.45 1.025 2.475 1.025 1.025 2.475 1.025Zm0-2q-.625 0-1.062-.438-.438-.437-.438-1.062t.438-1.062q.437-.438 1.062-.438t1.063.438q.437.437.437 1.062t-.437 1.062q-.438.438-1.063.438ZM12 12Zm-.925 7.925H12.9l.35-2.625q.8-.2 1.475-.6.675-.4 1.225-.975l2.475 1.025.9-1.575-2.15-1.625q.125-.35.188-.75.062-.4.062-.8t-.062-.8q-.063-.4-.188-.75l2.15-1.625-.9-1.575L15.95 8.3q-.55-.6-1.225-1t-1.475-.6l-.325-2.625h-1.85L10.75 6.7q-.8.2-1.475.6-.675.4-1.25.975L5.575 7.25l-.9 1.575 2.125 1.6q-.125.375-.187.763-.063.387-.063.812 0 .4.063.787.062.388.187.788l-2.125 1.6.9 1.575 2.45-1.025q.575.575 1.25.975t1.475.6Z" /></svg> Settings</Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item>
                    <span><svg xmlns="http://www.w3.org/2000/svg" height="24" width="24"><path d="M5 21.2q-.95 0-1.612-.662-.663-.663-.663-1.613V5.075q0-.95.663-1.613Q4.05 2.8 5 2.8h7.05v2.275H5v13.85h7.05V21.2Zm11-3.925-1.575-1.625 2.525-2.5H8.9v-2.3h8.05l-2.525-2.5L16 6.725 21.275 12Z" /></svg> Logout</span>

                    <ResponsiveChatBoxModal />
                </Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
    );
};

export default DropDownProfile;




