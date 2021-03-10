import React from 'react';
import Logo from '../../Logo/Logo';
import NavItems from '../NavItems/NavItems';
import './Toolbar.css';
const toolbar = (props) => {
    return (
        <header className="Toolbar">
            <div>MENU</div>
            <Logo />
            <nav>
                <NavItems isAuthenticated={props.isAuth} />
            </nav>
        </header>
    );
};
export default toolbar;