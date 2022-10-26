import { signInWithEmailAndPassword } from 'firebase/auth';
import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { auth } from '../../authentication/firebaseInitial';
import SocialLogin from './SocialLogin';

const Login = () => {
    const navigate = useNavigate();

    const handleLoginUsingEmail = (e) => {
        e.preventDefault();

        const email = e.target.email.value;
        const password = e.target.password.value;

        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {

                if (userCredential.user) {
                    navigate("/profile")
                    toast.success(`Welcome ${userCredential.user.email}`);
                };
            })
            .catch((err) => {
                toast.error(err.message);
            });
    };

    return (
        <section className=" d-flex justify-content-center align-items-center custom-signUp-login">
            <div className="bg-black text-white p-5">
                <Row className="g-4 p-2">
                    <Col>
                        <img src="https://cdn-icons-png.flaticon.com/512/5087/5087579.png" alt="" />
                    </Col>
                    <Col>
                        <p className="mb-3 fw-bold h4">Please Login</p>
                        <div className="mb-2">
                            <form onSubmit={handleLoginUsingEmail}>
                                <input className="custom-input" type="email" name="email" placeholder="your email address" />
                                <br />
                                <input className="custom-input" type="password" name="password" placeholder="your password" />
                                <button type="submit" className="btn btn-outline btn-light rounded-pill">Submit</button>
                            </form>
                        </div>
                        <p><small>New here? create a account<Link to="/signUp"><span className="text-primary fw-bold ms-2">SignUp</span></Link></small></p>
                        <div>
                            <SocialLogin />
                        </div>
                    </Col>
                </Row>
            </div>
        </section>
    );
};

export default Login;