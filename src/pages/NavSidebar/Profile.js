import React, { useEffect, useState } from 'react';
import ProfileAccordion from '../../components/profileComponents/ProfileAccordion';
import { onAuthStateChanged } from "firebase/auth";
import { auth } from '../../firebase.init';

const Profile = () => {

    const [user, setUser] = useState();
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user)
            }
        });
    }, []);

    return (
        <section className="min-height">
            <div style={{ minHeight: "250px", width: "100%" }} className="sticky-top bg-lightBlue p-4 border-bottom border-light">

                <div className="d-flex justify-content-between ">
                    <p className="h4 mb-3">My Profile</p>
                    <span>
                        <svg xmlns="http://www.w3.org/2000/svg" height="24" width="24"><path d="M12 20.275q-.85 0-1.475-.612-.625-.613-.625-1.488 0-.85.625-1.463Q11.15 16.1 12 16.1q.875 0 1.488.612.612.613.612 1.463 0 .875-.612 1.488-.613.612-1.488.612Zm0-6.175q-.85 0-1.475-.625Q9.9 12.85 9.9 12q0-.875.625-1.488Q11.15 9.9 12 9.9q.875 0 1.488.612.612.613.612 1.488 0 .85-.612 1.475-.613.625-1.488.625Zm0-6.2q-.85 0-1.475-.613Q9.9 6.675 9.9 5.825q0-.875.625-1.488.625-.612 1.475-.612.875 0 1.488.612.612.613.612 1.488 0 .85-.612 1.462Q12.875 7.9 12 7.9Z" fill="#fff" /></svg>
                    </span>
                </div>
                <div className="d-flex justify-content-center align-items-center">
                    <img
                        className="border border-2 my-2"
                        src={user?.photoURL ? user.photoURL : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6o04d9prZDVWlxJpl_atIHLQ6gUxxjjku4kpkRRozFXmx3LRqeuVLKiG2XIgq7U-nQTk&usqp=CA"}
                        style={{ height: "100px", width: "100px", borderRadius: "50%" }}
                        alt="profile_image" />
                </div>
                <h5 className="text-center mt-3">{user?.displayName ? user.displayName : "Mr Cat"}</h5>
            </div>
            <div className="p-4">
                <p>
                    <small>
                        Hi , I'm Mr Cat, and i eat fish, and my
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas dicta accusamus molestias harum eius fugiat eaque eveniet rerum! Impedit tenetur nisi perspiciatis praesentium minima pariatur cumque in expedita! Ducimus impedit cupiditate ratione consectetur quia provident adipisci numquam repellendus harum sed.
                    </small>
                </p>
                <div className="mt-5">
                    <ProfileAccordion />
                </div>
            </div>
        </section>
    );
};

export default Profile;