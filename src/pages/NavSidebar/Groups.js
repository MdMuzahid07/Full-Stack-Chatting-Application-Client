import React from 'react';
import GroupCard from '../../components/groupsComponents/GroupCard';

const Groups = () => {
    return (
        <section className="min-height">
            <div style={{ minHeight: "200px", width: "100%" }} className="sticky-top bg-lightBlue p-4 border-bottom border-light">
                <p className="h4 mb-3">Groups</p>
                <div className="mt-3">
                    <div className="position-relative">
                        <input style={{ width: "100%", height: "40px" }} className="border-0 bg-light rounded-2 p-3 px-2" type="text" name="search" placeholder="search by name" />
                        <span className="position-absolute end-0 p-2 pe-3">
                            <svg xmlns="http://www.w3.org/2000/svg" height="24" width="24"><path d="m19.6 21.225-6.35-6.35q-.75.575-1.725.925-.975.35-2.075.35-2.775 0-4.7-1.938Q2.825 12.275 2.825 9.5q0-2.775 1.925-4.713Q6.675 2.85 9.45 2.85q2.775 0 4.713 1.937Q16.1 6.725 16.1 9.5q0 1.1-.337 2.075-.338.975-.913 1.7l6.325 6.35ZM9.45 13.85q1.825 0 3.1-1.263 1.275-1.262 1.275-3.087 0-1.825-1.275-3.088-1.275-1.262-3.1-1.262-1.825 0-3.087 1.262Q5.1 7.675 5.1 9.5q0 1.825 1.263 3.087Q7.625 13.85 9.45 13.85Z" /></svg>
                        </span>
                    </div>
                    <div className="d-flex justify-content-between mt-4">
                        <p className="h5">Create new</p>
                        <svg xmlns="http://www.w3.org/2000/svg" height="24" width="24"><path d="M10.95 17.05h2.1v-4h4v-2.1h-4v-4h-2.1v4h-4v2.1h4ZM12 22.2q-2.125 0-3.988-.8-1.862-.8-3.237-2.175Q3.4 17.85 2.6 15.988 1.8 14.125 1.8 12t.8-3.988q.8-1.862 2.175-3.237Q6.15 3.4 8.012 2.6 9.875 1.8 12 1.8t3.988.8q1.862.8 3.237 2.175Q20.6 6.15 21.4 8.012q.8 1.863.8 3.988t-.8 3.988q-.8 1.862-2.175 3.237Q17.85 20.6 15.988 21.4q-1.863.8-3.988.8Zm0-2.275q3.325 0 5.625-2.3t2.3-5.625q0-3.325-2.3-5.625T12 4.075q-3.325 0-5.625 2.3T4.075 12q0 3.325 2.3 5.625t5.625 2.3ZM12 12Z" /></svg>
                    </div>
                </div>
            </div>
            <div className="p-4">
                <GroupCard />
                <GroupCard />
                <GroupCard />
                <GroupCard />
                <GroupCard />
                <GroupCard />
                <GroupCard />
            </div>
        </section>
    );
};

export default Groups;