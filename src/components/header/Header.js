import React from 'react';
import { Button, ButtonGroup, Dropdown, DropdownButton } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import DropDownProfile from './DropDownProfile';
import NavLinks from './NavLinks';


const Header = () => {
    return (
        <header className="position-relative custom-bottom-nav bg-white">
            <div className="custom-nav py-3">
                <Link to="/profile">
                    <img
                        src="https://i.ibb.co/mCQxqTr/Chat-Cloud.png"
                        className="d-inline-block align-top img-fluid px-2"
                        alt="ChatCloud_logo"
                    />
                </Link>
                <div>
                    <NavLinks />
                </div>
                <div className="custom-profile">
                    <div className="d-flex justify-content-center">
                        <Button variant="" className="mb-5" >
                            <svg xmlns="http://www.w3.org/2000/svg" height="24" width="24"><path d="M12 22.2q-2.125 0-3.988-.8-1.862-.8-3.237-2.175Q3.4 17.85 2.6 15.988 1.8 14.125 1.8 12t.8-3.988q.8-1.862 2.175-3.237Q6.15 3.4 8.012 2.6 9.875 1.8 12 1.8t3.988.8q1.862.8 3.237 2.175Q20.6 6.15 21.4 8.012q.8 1.863.8 3.988t-.8 3.988q-.8 1.862-2.175 3.237Q17.85 20.6 15.988 21.4q-1.863.8-3.988.8Zm1.075-2.35q2.925-.4 4.887-2.6 1.963-2.2 1.963-5.25 0-3.025-1.963-5.225-1.962-2.2-4.887-2.6Z" fill="#fff" /></svg>
                        </Button>
                    </div>
                    <DropDownProfile />
                </div>
            </div>

        </header >
    );
};

export default Header;