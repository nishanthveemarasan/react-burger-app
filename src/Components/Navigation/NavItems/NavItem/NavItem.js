import React from 'react';
import './NavItem.css'
const navItem = (props) => {
    return (
        <div>
            <li className="NavItem"><a href={props.link}
                className={props.active ? "active" : null}>{props.children}</a></li>
        </div>
    );
}

export default navItem;