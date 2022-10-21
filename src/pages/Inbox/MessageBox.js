import React from 'react';

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
                <svg xmlns="http://www.w3.org/2000/svg" height="24" width="24"><path d="M12 20.275q-.85 0-1.475-.612-.625-.613-.625-1.488 0-.85.625-1.463Q11.15 16.1 12 16.1q.875 0 1.488.612.612.613.612 1.463 0 .875-.612 1.488-.613.612-1.488.612Zm0-6.175q-.85 0-1.475-.625Q9.9 12.85 9.9 12q0-.875.625-1.488Q11.15 9.9 12 9.9q.875 0 1.488.612.612.613.612 1.488 0 .85-.612 1.475-.613.625-1.488.625Zm0-6.2q-.85 0-1.475-.613Q9.9 6.675 9.9 5.825q0-.875.625-1.488.625-.612 1.475-.612.875 0 1.488.612.612.613.612 1.488 0 .85-.612 1.462Q12.875 7.9 12 7.9Z" /></svg>
            </span>
        </section>
    );
};

export default MessageBox;