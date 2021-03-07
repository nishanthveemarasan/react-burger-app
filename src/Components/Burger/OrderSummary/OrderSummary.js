import React, { Component } from 'react';
import Aux from '../../../hoc/Auxiliary';

class OrderSummary extends Component {
    
    render() {
        const ingredientSummary = Object.keys(this.props.ingredients)

            .map(igKey => {
                return <li key={igKey}><span >{igKey}</span>: {this.props.ingredients[igKey]}</li>
            });
        return (
            <Aux>
                <h3>Yuor Order</h3>
                <p>A Delicious Order with following ingredients: </p>
                <ul>
                    {ingredientSummary}
                </ul>
                <p>TotalPrice: {this.props.price.toFixed(2)}</p>
                <p>Continue to checkout?</p>
                <button onClick={this.props.modalClosed} className="btn btn-danger">CANCEL</button> &nbsp;
                <button className="btn btn-success" onClick={this.props.purchanseCnntinue}>Continue</button>
            </Aux >
        );
    }


}

export default OrderSummary;