import React from "react";
import {Navbar} from "react-bootstrap";


const NavMenu: React.FC = () => {
    return (
        <Navbar expand="lg" className="tw-flex px-5 py-3">
            <Navbar.Brand className="tw-flex tw-flex-row tw-gap-2" href="/"><img src={"/images/carrot-solid.svg"} width="30" height="30" alt="" />FOODREGGIE</Navbar.Brand>
        </Navbar>
        
    );
};

export default NavMenu;