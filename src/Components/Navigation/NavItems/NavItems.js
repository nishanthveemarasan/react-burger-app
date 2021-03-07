import React from 'react';
import NavItem from './NavItem/NavItem';
import './NavItems.css';

const navItems = (props) => {
    return (
        <div>
            <ul className="NavItems">
                <NavItem link="/" active>Burger Builder</NavItem>
                <NavItem link="/">Checkout</NavItem>

            </ul>
        </div>
    );
}

export default navItems;