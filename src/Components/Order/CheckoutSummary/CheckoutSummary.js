import React from 'react';
import Burger from '../../Burger/Burger';
import './CheckoutSummary.css';
const checkoutSummary = (props) => {
    return (
        <div className="CheckoutSummary">
            <h1>We hope it tastes well!!</h1>
            <div style={{ width: '60%', height: '300px', margin: 'auto' }}>
                <Burger ingredients={props.ingredients} />
            </div>
            <button className="btn btn-danger" onClick={props.cancel}>Cencel</button>
            <button className="btn btn-primary" onClick={props.order}>Continue</button>

        </div>
    );
}

export default checkoutSummary;