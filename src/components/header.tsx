import React, { FunctionComponent, useState, useEffect } from 'react';
//import ReactDOM from 'react-dom';
import '../App.css';
import { Navbar, Nav, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../fontawesome';
import axios from 'axios';

const api = axios.create();

const Header: FunctionComponent = () => {
    
    const [auth, setAuth] = useState<Boolean>(false);
    
    useEffect(() => {
        api.get("/auth/session").then((res) => {
            setAuth(res.data);
        }).catch((error) => {
            console.log(error);
        });
    }, []);

    let AuthButton;

    if (auth) {
        AuthButton = () => {
            return (
                <Button className="btn-discord" href="/auth/logout">Logout</Button>
            );
        }
    }
    else {
        AuthButton = () => {
            return (
                <Button className="btn-discord" href="/auth/discord">
                    <FontAwesomeIcon icon={["fab", "discord"]} size="lg" />{'   '}Login with Discord
                </Button>
            );
        }
    }

    return (
        <Navbar bg="dark" variant="dark" expand="lg">
            <Navbar.Brand href="/">Epic Seven Tools By Macharius</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link href="/">Home</Nav.Link>
                    <Nav.Link href="/signedin">SignedIn</Nav.Link>
                    {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                        </NavDropdown> */}
                </Nav>
                <Nav>
                    <AuthButton></AuthButton>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
};

export default Header;