import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { Route, Routes } from 'react-router-dom';
import Header from '../components/header/Header';
import Error404 from './Error404';
import InboxFooter from './Inbox/footer/InboxFooter';
import InboxHeader from './Inbox/header/InboxHeader';
import Inbox from './Inbox/Inbox';
import AddFriends from './NavSidebar/AddFriends';
import Chats from './NavSidebar/Chats';
import Groups from './NavSidebar/Groups';
import Profile from './NavSidebar/Profile';
import Settings from './NavSidebar/Settings';


const Main = () => {
    return (
        <section>
            <Row className="g-0">
                <Col md={12} lg={3}>
                    <Row className="g-0">
                        <Col lg={2} className="d-none d-lg-block">
                            <Header />
                        </Col>
                        <Col xs={12} lg={10}>
                            <div className="max-height bg-lightBlue text-white">
                                <Routes>
                                    <Route path="/chats" element={<Chats />} />
                                    <Route path="/profile" element={<Profile />} />
                                    <Route path="/groups" element={<Groups />} />
                                    <Route path="/addFriends" element={<AddFriends />} />
                                    <Route path="/settings" element={<Settings />} />
                                    <Route path="/*" element={<Error404 />} />
                                </Routes>
                            </div>
                        </Col>
                    </Row>
                </Col>
                <Col md={12} lg={9} className="d-none d-lg-block">
                    <div className="max-height bg-white">
                        <div className="sticky-top">
                            <InboxHeader />
                        </div>
                        <div className="px-3">
                            <Inbox />
                        </div>
                        <div className="sticky-bottom">
                            <InboxFooter />
                        </div>
                    </div>
                </Col>
            </Row>
        </section >
    );
};

export default Main;