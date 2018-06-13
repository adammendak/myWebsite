import React from "react";
import {NavLink} from "react-router-dom";
import {
    Navbar,
    NavbarBrand,
    Nav,
    NavItem} from 'reactstrap';

class Navigation extends React.Component {
    render() {
        return (
            <div>
                <Navbar color="light" light>
                    <NavbarBrand href="/">Adam Mendak</NavbarBrand>
                    <Nav className="mr-auto">
                        <NavItem className="mr-2">
                            <NavLink exact to="/">Strona Główna</NavLink>
                        </NavItem>
                        <NavItem className="mr-2">
                            <NavLink to="/about">O mnie</NavLink>
                        </NavItem>
                        <NavItem className="mr-2">
                            <NavLink to="/projects">Moje Projekty</NavLink>
                        </NavItem>
                    </Nav>
                </Navbar>
            </div>
        )}
}

export default Navigation;