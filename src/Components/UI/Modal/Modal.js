import React from 'react';
import Aux from '../../../hoc/Auxiliary';
import Backdrop from '../Backdrop/Backdrop';
import './Modal.css';
const modal = (props) => {
    return (
        <Aux>
            <Backdrop show={props.show} />
            <div style={{
                transform: props.show ? 'translateY(0)' : 'translateY(-100vh)',
                opacity: props.show ? '1' : '0',
            }}
                className="Modal">

                {props.children}
            </div>
        </Aux>

    );
}

export default modal;