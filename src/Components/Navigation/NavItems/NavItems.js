import React from 'react';
import { NavLink } from 'react-router-dom';
import NavItem from './NavItem/NavItem';
import './NavItems.css';

const navItems = (props) => {
    return (
        <div>
            <ul className="NavItems">
                <NavItem link="/" active>Burger Builder</NavItem>
                <NavItem link="/checkout">Checkout</NavItem>
                {!props.isAuthenticated ? <NavItem link="/auth">Authenticate</NavItem> :
                    <NavItem link="/logout">Logout</NavItem>
                }


            </ul>
        </div>
    );
}

export default navItems;