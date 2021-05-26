import React, {FunctionComponent/*, useState, useEffect*/} from 'react';
//import ReactDOM from 'react-dom';
import '../App.css';
//import Navbar from 'react-bootstrap/Navbar';
//import Nav from 'react-bootstrap/Nav';
//import NavDropdown from 'react-bootstrap/NavDropdown';
//import Button from 'react-bootstrap/Button';
//import axios from 'axios';
import { useGlobalContext } from '../utilities/GlobalProvider';

//const api = axios.create();

const Signedin: FunctionComponent = () => {

    //const [auth, setAuth] = useState<Boolean>(false);
    const { authenticated } = useGlobalContext();

    /* useEffect(() => {
        api.get("/auth/session").then((res) => {
            setAuth(res.data);
        }).catch((error) => {
            console.log(error);
        });
    }, []); */

    return (
        <>
            {authenticated ? "You access the page being connected" : "You access the page as a guest user"}
        </>
    )
}

export default Signedin;