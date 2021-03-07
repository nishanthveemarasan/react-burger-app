import React from 'react';
import './BAckdrop.css';
const backdrop = (props) => {
    return (

        <div>
            {props.show ? <div className="Backdrop"></div> : null}
        </div>
    );
}

export default backdrop;