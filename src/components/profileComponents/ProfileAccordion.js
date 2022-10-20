import React from 'react';
import { Accordion } from 'react-bootstrap';

const ProfileAccordion = () => {
  return (
    <Accordion defaultActiveKey="0" flush>
      <Accordion.Item eventKey="0">
        <Accordion.Header><svg xmlns="http://www.w3.org/2000/svg" height="24" width="24"><path d="M12 11.9q-1.75 0-2.975-1.238Q7.8 9.425 7.8 7.7q0-1.75 1.225-2.975T12 3.5q1.75 0 2.975 1.225T16.2 7.7q0 1.725-1.225 2.962Q13.75 11.9 12 11.9Zm-8.2 8.4v-3q0-.925.463-1.675.462-.75 1.237-1.15 1.575-.8 3.2-1.188 1.625-.387 3.3-.387 1.675 0 3.3.387 1.625.388 3.2 1.163.775.4 1.238 1.163.462.762.462 1.687v3Zm2.275-2.275h11.85v-.7q0-.275-.137-.5-.138-.225-.363-.325-1.3-.675-2.663-1-1.362-.325-2.762-.325t-2.762.325q-1.363.325-2.663 1-.225.1-.362.325-.138.225-.138.5ZM12 9.625q.8 0 1.363-.563.562-.562.562-1.362t-.562-1.363Q12.8 5.775 12 5.775t-1.362.562q-.563.563-.563 1.363t.563 1.362q.562.563 1.362.563ZM12 7.7Zm0 10.325Z" /></svg> <span className="text-black ms-2">About</span></Accordion.Header>
        <Accordion.Body>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header><svg xmlns="http://www.w3.org/2000/svg" height="24" width="24"><path d="M11.5 22.225q-2.4 0-4.062-1.663Q5.775 18.9 5.775 16.5V5.9q0-1.725 1.225-2.95t2.95-1.225q1.725 0 2.963 1.225Q14.15 4.175 14.15 5.9v9.55q0 1.1-.775 1.875-.775.775-1.875.775t-1.875-.775q-.775-.775-.775-1.875V5.9h1.7v9.55q0 .4.275.675t.675.275q.4 0 .675-.275t.275-.675V5.9q0-1.05-.725-1.775Q11 3.4 9.95 3.4q-1.05 0-1.775.725Q7.45 4.85 7.45 5.9v10.6q0 1.675 1.188 2.863Q9.825 20.55 11.5 20.55t2.863-1.187q1.187-1.188 1.187-2.863V5.9h1.675v10.6q0 2.4-1.663 4.062-1.662 1.663-4.062 1.663Z" /></svg> <span className="text-black ms-2">Attached Files</span></Accordion.Header>
        <Accordion.Body>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
};

export default ProfileAccordion;



