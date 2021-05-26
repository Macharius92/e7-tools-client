import React, {FunctionComponent} from 'react';
//import ReactDOM from 'react-dom';
import '../App.css';
import moment from 'moment';


const Footer: FunctionComponent = () => {
    return (
        <footer>
            <p>
                &copy; 2021 - {moment().format('YYYY')} - Macharius
            </p>
        </footer>
    )
}

export default Footer;