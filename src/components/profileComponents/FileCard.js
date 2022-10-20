import React from 'react';

const FileCard = () => {
    return (
        <section className="d-flex justify-content-between align-items-center bg-light border rounded-2 p-2 mb-3">
            <div>
                <img className="border border-2 img-custom" style={{ height: "50px", width: "50px", borderRadius: "10px" }} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIi_a9WP926ruhJ1h6znk6nYQndHRnQ995Ig&usqp=CAU" alt="" />
            </div>
            <div className="d-flex justify-content-between">
                <span>
                    <svg xmlns="http://www.w3.org/2000/svg" height="24" width="24"><path d="M5.875 20.375q-.95 0-1.612-.663Q3.6 19.05 3.6 18.1v-3.35h2.275v3.35H18.1v-3.35h2.275v3.35q0 .95-.663 1.612-.662.663-1.612.663ZM12 15.825 6.725 10.55 8.3 8.925l2.55 2.55V3.45h2.3v8.025l2.55-2.55 1.575 1.625Z" /></svg>
                </span>
                <span className="mx-2">
                    <svg xmlns="http://www.w3.org/2000/svg" height="24" width="24"><path d="M6.925 21.2q-.925 0-1.6-.662-.675-.663-.675-1.613V6.075H3.525V3.8H8.85V2.65h6.275V3.8h5.35v2.275H19.35v12.85q0 .95-.675 1.613-.675.662-1.6.662Zm10.15-15.125H6.925v12.85h10.15ZM8.9 17h2.125V8H8.9Zm4.075 0H15.1V8h-2.125ZM6.925 6.075v12.85Z" /></svg>
                </span>
            </div>
        </section>
    );
};

export default FileCard;