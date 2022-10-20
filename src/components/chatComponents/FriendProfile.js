import React from 'react';

const FriendProfile = () => {
    return (
        <section className="d-flex justify-content-between align-items-center mb-3">
            <div className="d-flex">
                <span>
                    <img className="border border-2 img-custom" style={{ height: "60px", width: "60px", borderRadius: "50%" }} src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Stray_kitten_Rambo002.jpg/1200px-Stray_kitten_Rambo002.jpg" alt="" />
                </span>
                <span className="ms-2 mt-2">
                    <p className="fw-bold lh-1">Name</p>
                    <p className="lh-1"><small>Last message</small></p>
                </span>
            </div>
            <div>
                <span>5:00 min</span>
            </div>
        </section>
    );
};

export default FriendProfile;