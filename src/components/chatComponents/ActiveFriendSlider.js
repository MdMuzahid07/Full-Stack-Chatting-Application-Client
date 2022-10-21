import React from 'react';
import Slider from 'react-slick';

const ActiveFriendSlider = () => {
    const settings = {
        className: "center",
        infinite: true,
        autoplay: true,
        autoplaySpeed: 3000,
        cssEase: "linear",
        slidesToShow: 5,
        swipeToSlide: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 10,
                    slidesToScroll: 1,
                    infinite: true,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 7,
                    slidesToScroll: 1,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1
                }
            }
        ],
        afterChange: function (index) {
            console.log(
                `Slider Changed to: ${index + 1}, background: #222; color: #bada55`
            );
        }

    };
    return (
        <section>
            <div className="mt-4">
                <Slider {...settings} arrows={false}>

                    <div className="px-2">
                        <div>
                            <img
                                className="border border-2"
                                style={{ width: "100%", height: "auto", borderRadius: "50%" }} src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png" alt="" />
                            <p className="text-center"><small>name</small></p>
                        </div>
                    </div>

                    <div className="px-2">
                        <div>
                            <img
                                className="border border-2"
                                style={{ width: "100%", height: "auto", borderRadius: "50%" }} src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png" alt="" />
                            <p className="text-center"><small>name</small></p>
                        </div>
                    </div>
                    <div className="px-2">
                        <div>
                            <img
                                className="border border-2"
                                style={{ width: "100%", height: "auto", borderRadius: "50%" }} src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png" alt="" />
                            <p className="text-center"><small>name</small></p>
                        </div>
                    </div>
                    <div className="px-2">
                        <div>
                            <img
                                className="border border-2"
                                style={{ width: "100%", height: "auto", borderRadius: "50%" }} src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png" alt="" />
                            <p className="text-center"><small>name</small></p>
                        </div>
                    </div>
                    <div className="px-2">
                        <div>
                            <img
                                className="border border-2"
                                style={{ width: "100%", height: "auto", borderRadius: "50%" }} src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png" alt="" />
                            <p className="text-center"><small>name</small></p>
                        </div>
                    </div>
                    <div className="px-2">
                        <div>
                            <img
                                className="border border-2"
                                style={{ width: "100%", height: "auto", borderRadius: "50%" }} src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png" alt="" />
                            <p className="text-center"><small>name</small></p>
                        </div>
                    </div>
                    <div className="px-2">
                        <div>
                            <img
                                className="border border-2"
                                style={{ width: "100%", height: "auto", borderRadius: "50%" }} src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png" alt="" />
                            <p className="text-center"><small>name</small></p>
                        </div>
                    </div>
                    <div className="px-2">
                        <div>
                            <img
                                className="border border-2"
                                style={{ width: "100%", height: "auto", borderRadius: "50%" }} src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png" alt="" />
                            <p className="text-center"><small>name</small></p>
                        </div>
                    </div>
                    <div className="px-2">
                        <div>
                            <img
                                className="border border-2"
                                style={{ width: "100%", height: "auto", borderRadius: "50%" }} src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png" alt="" />
                            <p className="text-center"><small>name</small></p>
                        </div>
                    </div>
                    <div className="px-2">
                        <div>
                            <img
                                className="border border-2"
                                style={{ width: "100%", height: "auto", borderRadius: "50%" }} src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png" alt="" />
                            <p className="text-center"><small>name</small></p>
                        </div>
                    </div>
                    <div className="px-2">
                        <div>
                            <img
                                className="border border-2"
                                style={{ width: "100%", height: "auto", borderRadius: "50%" }} src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png" alt="" />
                            <p className="text-center"><small>name</small></p>
                        </div>
                    </div>

                </Slider>
            </div >
        </section >
    );
};

export default ActiveFriendSlider;