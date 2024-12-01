import React from "react";
import {Nav, Navbar} from "react-bootstrap";
import Button from 'react-bootstrap/Button';

const NavMenu: React.FC = () => {
    return (
        <Navbar expand="lg" className="tw-flex px-5 py-3">
            <Navbar.Brand className="tw-flex tw-flex-row tw-gap-2" href="/"><img src={"/images/carrot-solid.svg"} width="30" height="30" alt="" />FOODREGGIE</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link href="/"><Button variant="primary">Midlertidig</Button></Nav.Link>
                </Nav>
            </Navbar.Collapse>    
        </Navbar>
        
    );
};

export default NavMenu;