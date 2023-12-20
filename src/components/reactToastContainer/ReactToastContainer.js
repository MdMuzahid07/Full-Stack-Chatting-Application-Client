import React from 'react';
import { ToastContainer, Slide } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const ReactToastContainer = () => {
    return (
        <ToastContainer
            position="bottom-end"
            autoClose={3000}
            hideProgressBar={false}
            newestOnTop={false}
            transition={Slide}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="light"
        />
    );
};

export default ReactToastContainer;