import React from 'react';
import burgerLogo from '../../assets/images/burger-logo.png';
import './Logo.css';
const logo = (props) => {
    return (
        <div className="Logo">
            <img src={burgerLogo} alt="myBurger" className="img" />
        </div>
    );
}

export default logo;