import React from 'react';
import SettingAccordion from '../../components/settingComponents/SettingAccordion';

const Settings = () => {
    return (
        <section className="min-height">
            <div style={{ minHeight: "250px", width: "100%" }} className="sticky-top bg-lightBlue p-4 border-bottom border-light">
                <div className="d-flex justify-content-between ">
                    <p className="h4 mb-3">Settings</p>
                    <span>
                        <svg xmlns="http://www.w3.org/2000/svg" height="24" width="24"><path d="M11.85 21.15v-2.325l5.35-5.35 2.325 2.325-5.35 5.35Zm-9-4.925V13.95h7.375v2.275ZM20.225 15.1 17.9 12.775l.725-.725q.325-.3.8-.312.475-.013.8.312l.725.725q.325.325.313.8-.013.475-.313.8ZM2.85 12.025V9.75h11.3v2.275Zm0-4.175V5.575h11.3V7.85Z" fill="#fff" /></svg>
                    </span>
                </div>
                <div className="d-flex justify-content-center align-items-center">
                    <img className="border border-2 my-2" style={{ height: "100px", width: "100px", borderRadius: "50%" }} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIi_a9WP926ruhJ1h6znk6nYQndHRnQ995Ig&usqp=CAU" alt="" />
                </div>
                <h5 className="text-center mt-3">Mr Cat</h5>
            </div>
            <div className="p-4">
                <SettingAccordion />
            </div>
        </section>
    );
};

export default Settings;