import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import SocialLogin from './SocialLogin';
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from '../../firebase.init';
import { toast } from 'react-hot-toast';


const SignUp = () => {

    const navigate = useNavigate();

    const handleEmailSignUp = (e) => {
        e.preventDefault();

        const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;

        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                console.log(userCredential)
                if (userCredential.user) {
                    navigate("/")
                    toast.success(`Welcome ${userCredential.user.email}`);
                };

            })
            .catch((err) => {

                toast.error(err.message);
            });
    }

    return (
        <section className="d-flex justify-content-center align-items-center custom-signUp-login">
            <div className="bg-black text-white p-5 rounded-4">
                <Row className="g-4">
                    <Col>
                        <img src="https://cdn-icons-png.flaticon.com/512/5087/5087579.png" alt="" />
                    </Col>
                    <Col>
                        <p className="mb-3 fw-bold h4">Please SignUp</p>
                        <div className="mb-2">
                            <form onSubmit={handleEmailSignUp}>
                                <input className="custom-input" type="text" name="name" placeholder="your name" />
                                <br />
                                <input className="custom-input" type="email" name="email" placeholder="your email address" />
                                <br />
                                <input className="custom-input" type="password" name="password" placeholder="your password" />
                                <button type="submit" className="btn btn-outline btn-light rounded-pill">Submit</button>
                            </form>
                        </div>
                        <p><small>Already have a account<Link to="/login"><span className="text-primary fw-bold ms-2">Login</span></Link></small></p>
                        <div>
                            <SocialLogin />
                        </div>
                    </Col>
                </Row>
            </div>
        </section>
    );
};

export default SignUp;