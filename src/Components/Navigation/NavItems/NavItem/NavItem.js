import React from 'react';
import { NavLink } from 'react-router-dom';
import './NavItem.css'
const navItem = (props) => {
    return (
        <div>
            <li className="NavItem"><NavLink to={props.link}
            >{props.children}</NavLink></li>
        </div>
    );
}

export default navItem;