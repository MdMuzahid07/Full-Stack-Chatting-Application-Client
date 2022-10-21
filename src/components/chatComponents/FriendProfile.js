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
                    <p className="lh-1"><small>From</small></p>
                </span>
            </div>
            <div>
                <svg xmlns="http://www.w3.org/2000/svg" height="24" width="24"><path d="M18.1 13.75V10.8h-2.95V8.7h2.95V5.75h2.1V8.7h2.95v2.1H20.2v2.95ZM9.025 11.9q-1.75 0-2.975-1.238Q4.825 9.425 4.825 7.7q0-1.75 1.225-2.975T9.025 3.5q1.725 0 2.963 1.225Q13.225 5.95 13.225 7.7q0 1.725-1.237 2.962Q10.75 11.9 9.025 11.9Zm-8.2 8.4v-3q0-.925.463-1.675.462-.75 1.237-1.15 1.575-.8 3.2-1.188 1.625-.387 3.3-.387 1.675 0 3.3.387 1.625.388 3.175 1.163.775.4 1.25 1.163.475.762.475 1.687v3ZM3.1 18.025h11.85v-.7q0-.275-.138-.5-.137-.225-.362-.325-1.325-.675-2.675-1-1.35-.325-2.75-.325t-2.762.325q-1.363.325-2.663 1-.225.1-.363.325-.137.225-.137.5Zm5.925-8.4q.8 0 1.363-.563.562-.562.562-1.362t-.562-1.363q-.563-.562-1.363-.562t-1.363.562Q7.1 6.9 7.1 7.7t.562 1.362q.563.563 1.363.563Zm0-1.925Zm0 10.325Z" fill="#fff" /></svg>
            </div>
        </section>
    );
};

export default FriendProfile;