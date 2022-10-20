import React from 'react';
import ActiveFriendSlider from '../../components/chatComponents/ActiveFriendSlider';
import FriendProfile from '../../components/chatComponents/FriendProfile';

const Chats = () => {
    return (
        <section>
            <div style={{ minHeight: "250px", width: "100%" }} className="sticky-top bg-light p-4 border-bottom">
                <p className="h4 mb-3">My Chats</p>
                <div className="mt-3">
                    <div className="position-relative">
                        <input style={{ width: "100%", height: "40px" }} className="border-0 bg-lightBlue rounded-2 p-3 px-2" type="text" />
                        <span className="position-absolute end-0 p-2 pe-3">
                            <svg xmlns="http://www.w3.org/2000/svg" height="24" width="24"><path d="m19.6 21.225-6.35-6.35q-.75.575-1.725.925-.975.35-2.075.35-2.775 0-4.7-1.938Q2.825 12.275 2.825 9.5q0-2.775 1.925-4.713Q6.675 2.85 9.45 2.85q2.775 0 4.713 1.937Q16.1 6.725 16.1 9.5q0 1.1-.337 2.075-.338.975-.913 1.7l6.325 6.35ZM9.45 13.85q1.825 0 3.1-1.263 1.275-1.262 1.275-3.087 0-1.825-1.275-3.088-1.275-1.262-3.1-1.262-1.825 0-3.087 1.262Q5.1 7.675 5.1 9.5q0 1.825 1.263 3.087Q7.625 13.85 9.45 13.85Z" /></svg>
                        </span>
                    </div>
                    <div>
                        <ActiveFriendSlider />
                    </div>
                </div>
                <p className="h5 mt-3">Recent</p>
            </div>
            <div className="p-4">
                <FriendProfile />
                <FriendProfile />
                <FriendProfile />
                <FriendProfile />
                <FriendProfile />
                <FriendProfile />
                <FriendProfile />
            </div>
        </section>
    );
};

export default Chats;