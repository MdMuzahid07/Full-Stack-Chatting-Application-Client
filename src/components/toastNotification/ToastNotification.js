import React from 'react';
import { ToastContainer } from 'react-bootstrap';
import { Slide } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const ToastNotification = () => {
    return <ToastContainer
        position="top-center"
        autoClose={3000}
        transition={Slide}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
    />
};

export default ToastNotification;