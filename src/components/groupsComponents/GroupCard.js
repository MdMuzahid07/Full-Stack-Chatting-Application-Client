import React from 'react';

const GroupCard = () => {
    return (
        <section className="d-flex justify-content-between align-items-center mb-3">
            <div className="d-flex align-items-center">
                <div>
                    <img className="border border-2 img-custom" style={{ height: "60px", width: "60px", borderRadius: "50%" }} src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Stray_kitten_Rambo002.jpg/1200px-Stray_kitten_Rambo002.jpg" alt="" />
                </div>
                <div className="ms-2 mt-3">
                    <p className="fw-bold lh-1">Group name</p>
                </div>
            </div>
            <div>
                <span className="bg-light rounded-pill p-2">7 <small>members</small></span>
            </div>
        </section>
    );
};

export default GroupCard;