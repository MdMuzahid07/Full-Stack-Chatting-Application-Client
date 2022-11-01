import React from 'react';
import ThreeDotsDropDown from './threeDots/ThreeDotsDropDown';

const MessageBox = () => {
    return (
        <section className="d-flex">
            <div>
                <img className="border border-2 border-dark img-custom mt-2" style=
                    {{
                        height: "50px",
                        width: "50px",
                        borderRadius: "50%"
                    }}
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIi_a9WP926ruhJ1h6znk6nYQndHRnQ995Ig&usqp=CAU" alt="" />
                <p className="text-center"><small>Mr Cat</small></p>
            </div>
            <div
                style=
                {{
                    width: "400px",
                    minHeight: "100px",
                    backgroundColor: "rgb(21, 98, 231)",
                    zIndex: 0,
                }}
                className="p-2 my-4 ms-4 rounded-3 text-light"
            >
                <div style=
                    {{
                        minHeight: "30px",
                        maxWidth: "30px",
                        backgroundColor: "rgb(21, 98, 231)",
                        clipPath: "polygon(0 0, 100% 0, 100% 100%, 100% 100%)",
                        marginLeft: "-30px",
                        position: "relative",
                        top: "0"
                    }} />

                <div
                    style=
                    {{
                        marginTop: "-30px"
                    }}
                >
                    <div>
                        <p>
                            <small>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum, dicta nndis maxime ab maiores. Enim, nemo. Tempore, id.
                            </small>
                        </p>
                    </div>
                </div>
            </div>
            <span className="mt-4">
                <ThreeDotsDropDown />
            </span>
        </section>
    );
};

export default MessageBox;