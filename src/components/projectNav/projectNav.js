import * as React from "react";
import Nav from 'react-bootstrap/Nav';

const ProjectNav = (props) => {
    return (
        <>
            <Nav
                defaultActiveKey="all"
                onSelect={(selectedKey) => props.setFilter(`${selectedKey}`)}
                className="justify-content-center mb-5"
            >
                <Nav.Item>
                    <Nav.Link eventKey="all">All</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="Website">Website</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="Mobile">Mobile</Nav.Link>
                </Nav.Item>
            </Nav>
        </>
    );
}



export default ProjectNav;