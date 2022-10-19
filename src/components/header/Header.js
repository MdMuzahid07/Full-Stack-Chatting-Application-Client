import React from 'react';
import { Link } from 'react-router-dom';
import NavLinks from './NavLinks';


const Header = () => {
    return (
        <header className="position-relative custom-bottom-nav">
            <div className="custom-nav py-3">
                <Link to="/">
                    <img
                        src="https://i.ibb.co/cycQRDb/Chat-Cloud.png"
                        width="53"
                        height="53"
                        className="d-inline-block align-top"
                        alt="ChatCloud_logo"
                    />
                </Link>
                <div>
                    <NavLinks />
                </div>
                <div className="custom-profile">
                    <Link to="/">
                        <img
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6o04d9prZDVWlxJpl_atIHLQ6gUxxjjku4kpkRRozFXmx3LRqeuVLKiG2XIgq7U-nQTk&usqp=CA"
                            width="50"
                            height="50"
                            className=" rounded-circle border border-2"
                            alt="ChatCloud_logo"
                        />
                    </Link>
                </div>
            </div>

        </header >
    );
};

export default Header;