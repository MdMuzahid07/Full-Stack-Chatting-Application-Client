import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { Route, Routes } from 'react-router-dom';
import Header from '../components/header/Header';
import InboxFooter from './Inbox/footer/InboxFooter';
import InboxHeader from './Inbox/header/InboxHeader';
import Inbox from './Inbox/Inbox';
import Chats from './NavSidebar/Chats';
import Contacts from './NavSidebar/Contacts';
import Groups from './NavSidebar/Groups';
import Profile from './NavSidebar/Profile';
import Settings from './NavSidebar/Settings';


const Main = () => {
    return (
        <section>
            <Row className="g-0">
                <Col md={12} lg={4}>
                    <Row className="g-0">
                        <Col lg={2} className="d-none d-lg-block">
                            <Header />
                        </Col>
                        <Col xs={12} lg={10}>
                            <div className="max-height bg-lightBlue px-2">
                                <Routes>
                                    <Route path="/" element={<Chats />} />
                                    <Route path="/profile" element={<Profile />} />
                                    <Route path="/groups" element={<Groups />} />
                                    <Route path="/contacts" element={<Contacts />} />
                                    <Route path="/settings" element={<Settings />} />
                                </Routes>
                            </div>
                        </Col>
                    </Row>
                </Col>
                <Col md={12} lg={8} className="d-none d-lg-block">
                    <div className="max-height px-3 bg-white">
                        <div className="sticky-top">
                            <InboxHeader />
                        </div>
                        <Inbox />
                        <div className="sticky-bottom">
                            <InboxFooter />
                        </div>
                    </div>
                </Col>
            </Row>
        </section>
    );
};

export default Main;