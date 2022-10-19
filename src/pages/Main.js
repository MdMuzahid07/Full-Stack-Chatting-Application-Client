import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { Route, Routes } from 'react-router-dom';
import Chats from './NavSidebar/Chats';
import Contacts from './NavSidebar/Contacts';
import Groups from './NavSidebar/Groups';
import Profile from './NavSidebar/Profile';
import Settings from './NavSidebar/Settings';


const Main = () => {
    return (
        <section>
            <Row className="g-0">
                <Col md={12} lg={3} className="bg-warning">
                    <Routes>
                        <Route path="/" element={<Chats />} />
                        <Route path="/profile" element={<Profile />} />
                        <Route path="/groups" element={<Groups />} />
                        <Route path="/contacts" element={<Contacts />} />
                        <Route path="/settings" element={<Settings />} />
                    </Routes>
                </Col>
                <Col md={12} lg={9} className="bg-dark text-light d-none d-lg-block">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae hic consequuntur id excepturi libero sed ex dolor neque architecto. Nesciunt, eveniet fugiat unde odit sed perferendis laborum illum eaque inventore maxime expedita ipsum repudiandae cupiditate? Enim aperiam cupiditate ipsum reprehenderit eveniet ullam officia provident veritatis, omnis incidunt beatae possimus sint? Fugiat hic, adipisci consequatur animi voluptatum, incidunt quae harum nisi doloremque sed, consequuntur laboriosam vel saepe velit voluptatem quo eius facilis nulla rerum maxime tempore enim quod. Quae iste, harum quibusdam animi veniam molestias voluptate? Perspiciatis, provident voluptatum voluptas beatae reiciendis repudiandae fugit cumque animi officiis. Quos, neque aspernatur doloribus illo, quod voluptate dicta, magni totam laudantium qui illum. Ducimus, nihil similique fugiat, fuga atque impedit ex nesciunt earum dolorem natus tenetur doloribus necessitatibus qui repudiandae, consequatur consectetur est hic eligendi animi labore? Dicta rem dolore natus quis repudiandae eveniet molestiae, alias molestias qui doloremque sequi aperiam deleniti ab et blanditiis necessitatibus, eaque ipsam commodi illum harum hic error. Corrupti dolorem, quasi impedit praesentium perferendis deleniti fugiat porro voluptate error quas nobis nulla labore unde asperiores vel eligendi officiis exercitationem laudantium illum iste nihil voluptatibus sint incidunt rerum. Delectus, eum tempora. Error qui ex nam. Laborum magni aliquam quas eveniet?
                </Col>
            </Row>
        </section>
    );
};

export default Main;