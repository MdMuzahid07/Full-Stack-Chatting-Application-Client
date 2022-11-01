import React from 'react';
import ResponsiveChatBoxModal from '../../pages/Inbox/ResponsiveChatBoxModal';

const FriendProfile = () => {
    return (
        <section className="d-flex justify-content-between align-items-center mb-3">
            <div className="d-flex">
                <span>
                    <ResponsiveChatBoxModal />
                </span>
                <span className="ms-2 mt-2">
                    <p className="fw-bold lh-1">Name</p>
                    <p className="lh-1"><small>Lase message</small></p>
                </span>
            </div>
            <div>
                <p><small>5 minutes</small></p>
            </div>
        </section>
    );
};

export default FriendProfile;