import React from 'react';
import AddFriendProfile from '../../components/addFriendComponents/AddFriendProfile';

const AddFriends = () => {
    return (
        <section className="min-height">
            <div style={{ minHeight: "200px", width: "100%" }} className="sticky-top bg-lightBlue p-4 border-bottom border-light">
                <p className="h4 mb-3">Add Friends</p>
                <div className="mt-3">
                    <div className="position-relative">
                        <input style={{ width: "100%", height: "40px" }} className="border-0 bg-light rounded-2 p-3 px-2" type="text" name="search" placeholder="search by name or id" />
                        <span className="position-absolute end-0 p-2 pe-3">
                            <svg xmlns="http://www.w3.org/2000/svg" height="24" width="24"><path d="m19.6 21.225-6.35-6.35q-.75.575-1.725.925-.975.35-2.075.35-2.775 0-4.7-1.938Q2.825 12.275 2.825 9.5q0-2.775 1.925-4.713Q6.675 2.85 9.45 2.85q2.775 0 4.713 1.937Q16.1 6.725 16.1 9.5q0 1.1-.337 2.075-.338.975-.913 1.7l6.325 6.35ZM9.45 13.85q1.825 0 3.1-1.263 1.275-1.262 1.275-3.087 0-1.825-1.275-3.088-1.275-1.262-3.1-1.262-1.825 0-3.087 1.262Q5.1 7.675 5.1 9.5q0 1.825 1.263 3.087Q7.625 13.85 9.45 13.85Z" /></svg>
                        </span>
                    </div>
                    <div className="d-flex justify-content-between mt-4">
                        <p className="h5">Suggested</p>
                        <svg xmlns="http://www.w3.org/2000/svg" height="24" width="24"><path d="m15 21.2-6-2.1-4.575 1.8q-.6.225-1.113-.138Q2.8 20.4 2.8 19.75v-14q0-.4.225-.7.225-.3.6-.45L9 2.8l6 2.1 4.575-1.8q.6-.225 1.113.137.512.363.512 1.013v14q0 .4-.225.7-.225.3-.6.45Zm-1-2.725V6.925l-4-1.4v11.55Zm2 0 2.925-.975V5.8L16 6.925ZM5.075 18.2 8 17.075V5.525L5.075 6.5ZM16 6.925v11.55Zm-8-1.4v11.55Z" fill="#fff" /></svg>
                    </div>
                </div>
            </div>
            <div className="p-4">
                <AddFriendProfile />
            </div>
        </section>
    );
};

export default AddFriends;