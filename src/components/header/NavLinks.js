import React from 'react';
import { Link } from 'react-router-dom';

const NavLinks = () => {
    return (
        <nav>
            <div className="navLink mt-5">
                <Link to="/profile" >
                    <svg xmlns="http://www.w3.org/2000/svg" height="24" width="24"><path d="M12 11.9q-1.75 0-2.975-1.238Q7.8 9.425 7.8 7.7q0-1.75 1.225-2.975T12 3.5q1.75 0 2.975 1.225T16.2 7.7q0 1.725-1.225 2.962Q13.75 11.9 12 11.9Zm-8.2 8.4v-3q0-.925.463-1.675.462-.75 1.237-1.15 1.575-.8 3.2-1.188 1.625-.387 3.3-.387 1.675 0 3.3.387 1.625.388 3.2 1.163.775.4 1.238 1.163.462.762.462 1.687v3Zm2.275-2.275h11.85v-.7q0-.275-.137-.5-.138-.225-.363-.325-1.3-.675-2.663-1-1.362-.325-2.762-.325t-2.762.325q-1.363.325-2.663 1-.225.1-.362.325-.138.225-.138.5ZM12 9.625q.8 0 1.363-.563.562-.562.562-1.362t-.562-1.363Q12.8 5.775 12 5.775t-1.362.562q-.563.563-.563 1.363t.563 1.362q.562.563 1.362.563ZM12 7.7Zm0 10.325Z" fill="#fff" /></svg>
                </Link>
            </div>
            <div className="navLink">
                <Link to="/chats">
                    <svg xmlns="http://www.w3.org/2000/svg" height="24" width="24"><path d="m22.2 22.2-4-4H4.075q-.95 0-1.613-.662-.662-.663-.662-1.613V4.075q0-.95.662-1.613.663-.662 1.613-.662h15.85q.95 0 1.613.662.662.663.662 1.613ZM4.075 4.075v11.85h14.9l.95.975V4.075H4.075Zm0 0V16.9 4.075Z" fill="#fff" /></svg>
                </Link>
            </div>
            <div className="navLink">
                <Link to="/groups">
                    <svg xmlns="http://www.w3.org/2000/svg" height="24" width="24"><path d="M.825 20.3v-3q0-.925.463-1.675.462-.75 1.237-1.15 1.575-.8 3.2-1.188 1.625-.387 3.3-.387 1.675 0 3.3.387 1.625.388 3.175 1.163.775.4 1.25 1.163.475.762.475 1.687v3Zm18.475 0v-3.2q0-1.125-.6-2.162-.6-1.038-1.75-1.863 1.225.175 2.3.525 1.075.35 2.025.85.925.5 1.413 1.187.487.688.487 1.488V20.3ZM9.025 11.9q-1.7 0-2.9-1.2t-1.2-2.9q0-1.7 1.2-2.9t2.9-1.2q1.7 0 2.9 1.2t1.2 2.9q0 1.7-1.2 2.9t-2.9 1.2ZM19.3 7.8q0 1.7-1.2 2.9t-2.9 1.2q-.275 0-.687-.063-.413-.062-.713-.162.675-.8 1.038-1.8.362-1 .362-2.075 0-1.075-.362-2.075-.363-1-1.038-1.8.35-.15.7-.188.35-.037.7-.037 1.7 0 2.9 1.2t1.2 2.9ZM3.1 18.025h11.85v-.7q0-.275-.138-.5-.137-.225-.362-.325-1.325-.675-2.675-1-1.35-.325-2.75-.325t-2.762.325q-1.363.325-2.663 1-.225.1-.363.325-.137.225-.137.5Zm5.925-8.3q.775 0 1.338-.563.562-.562.562-1.362t-.562-1.362q-.563-.563-1.338-.563-.8 0-1.363.563Q7.1 7 7.1 7.8q0 .775.562 1.35.563.575 1.363.575Zm0 8.3Zm0-10.225Z" fill="#fff" /></svg>
                </Link>
            </div>
            <div className="navLink">
                <Link to="/addFriends">
                    <svg xmlns="http://www.w3.org/2000/svg" height="24" width="24"><path d="M12.55 11.825q.8-.825 1.2-1.913.4-1.087.4-2.212 0-1.15-.412-2.237-.413-1.088-1.188-1.913 1.6.25 2.6 1.437 1 1.188 1 2.713 0 1.525-1.012 2.712-1.013 1.188-2.588 1.413Zm5.6 8.475v-3.175q0-.975-.4-1.825t-1.075-1.5q1.4.425 2.488 1.2 1.087.775 1.087 2.125V20.3Zm2.075-7.45v-2.025H18.2v-2h2.025v-2h2v2h2.025v2h-2.025v2.025ZM7.95 11.9q-1.75 0-2.975-1.238Q3.75 9.425 3.75 7.7q0-1.75 1.225-2.975T7.95 3.5q1.75 0 2.975 1.225T12.15 7.7q0 1.725-1.225 2.962Q9.7 11.9 7.95 11.9Zm-8.2 8.4v-3q0-.925.463-1.675.462-.75 1.237-1.15 1.575-.8 3.2-1.188 1.625-.387 3.3-.387 1.7 0 3.312.387 1.613.388 3.188 1.163.775.4 1.238 1.163.462.762.462 1.687v3Zm8.2-10.675q.8 0 1.362-.563.563-.562.563-1.362t-.563-1.363q-.562-.562-1.362-.562t-1.362.562Q6.025 6.9 6.025 7.7t.563 1.362q.562.563 1.362.563Zm-5.925 8.4h11.85v-.7q0-.275-.137-.5-.138-.225-.363-.325-1.325-.675-2.675-1-1.35-.325-2.75-.325t-2.762.325q-1.363.325-2.663 1-.225.1-.362.325-.138.225-.138.5ZM7.95 7.7Zm0 10.325Z" fill="#fff" /></svg>
                </Link>
            </div>
            <div className="navLink">
                <Link to="/settings">
                    <svg xmlns="http://www.w3.org/2000/svg" height="24" width="24"><path d="m9.075 22.2-.4-3.25q-.3-.125-.538-.275-.237-.15-.487-.325l-3.025 1.3-2.95-5.075 2.625-2v-1.15l-2.625-2 2.95-5.05 3.05 1.275q.225-.175.475-.325.25-.15.525-.25l.4-3.275h5.85l.4 3.275q.3.1.538.25.237.15.487.325l3.025-1.275 2.95 5.05-2.65 2q.025.15.025.287v.575q0 .138-.05.288l2.65 2-2.95 5.075-3.025-1.3q-.225.175-.475.325-.25.15-.525.275l-.4 3.25Zm2.95-6.7q1.45 0 2.475-1.025Q15.525 13.45 15.525 12q0-1.45-1.025-2.475Q13.475 8.5 12.025 8.5q-1.45 0-2.475 1.025Q8.525 10.55 8.525 12q0 1.45 1.025 2.475 1.025 1.025 2.475 1.025Zm0-2q-.625 0-1.062-.438-.438-.437-.438-1.062t.438-1.062q.437-.438 1.062-.438t1.063.438q.437.437.437 1.062t-.437 1.062q-.438.438-1.063.438ZM12 12Zm-.925 7.925H12.9l.35-2.625q.8-.2 1.475-.6.675-.4 1.225-.975l2.475 1.025.9-1.575-2.15-1.625q.125-.35.188-.75.062-.4.062-.8t-.062-.8q-.063-.4-.188-.75l2.15-1.625-.9-1.575L15.95 8.3q-.55-.6-1.225-1t-1.475-.6l-.325-2.625h-1.85L10.75 6.7q-.8.2-1.475.6-.675.4-1.25.975L5.575 7.25l-.9 1.575 2.125 1.6q-.125.375-.187.763-.063.387-.063.812 0 .4.063.787.062.388.187.788l-2.125 1.6.9 1.575 2.45-1.025q.575.575 1.25.975t1.475.6Z" fill="#fff" /></svg>
                </Link>
            </div>
        </nav>
    );
};

export default NavLinks;