import React from 'react';
import { ButtonGroup, Dropdown, DropdownButton } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import DropDownProfile from './DropDownProfile';
import NavLinks from './NavLinks';


const Header = () => {
    return (
        <header className="position-relative custom-bottom-nav bg-white">
            <div className="custom-nav py-3">
                <Link to="/">
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
                    <DropDownProfile />
                </div>
            </div>

        </header >
    );
};

export default Header;