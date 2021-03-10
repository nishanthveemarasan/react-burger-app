import React, { Component } from "react";
import CheckoutSummary from "../../../Components/Order/CheckoutSummary/CheckoutSummary";
import Aux from "../../../hoc/Auxiliary";
//import axios from 'axios';
import { Route } from 'react-router-dom';
import ContactData from "./ContactData/ContactData";
import { connect } from 'react-redux';

class Checkout extends Component {

    /* componentDidMount() {
         const ingredients = {};
         const query = new URLSearchParams(this.props.location.search);
         let price = 0;
         //  console.log(query.entries());
         for (let params of query.entries()) {
             if (params[0] === 'price') {
                 price = params[1];
             }
             ingredients[params[0]] = params[1];
         }
         console.log(ingredients);
         // console.log(price);
         this.setState({ ingredients: ingredients, totalPrice: price });
         console.log(this.state.totalPrice);
     }*/
    onCheckoutCancel = () => {
        this.props.history.goBack();
    }
    onCheckoutContinue = () => {
        this.props.history.push(this.props.match.path + '/contact-data');
    }
    render() {
        return (
            <Aux>
                <CheckoutSummary ingredients={this.props.ings} cancel={this.onCheckoutCancel} order={this.onCheckoutContinue} />

                <Route
                    path={this.props.match.path + '/contact-data'}
                    // render={() => (<ContactData ingredient={this.props.ings} get="working" />)} />
                    component={ContactData} />
            </Aux>
        );
    }
}
const mapStateToProps = state => {
    return {
        ings: state.burgerBuilder.ingredients,
        price: state.burgerBuilder.totalPrice
    }
}
export default connect(mapStateToProps)(Checkout);

/* <Route
                   path={this.props.match.path + '/contact-data'}
                   // render={() => (<ContactData ingredient={this.props.ings} get="working" />)} />
                   render={() => {
                       return (
                           <ContactData ingredients={this.props.ings} price={this.props.price} get="working" />
                       );
                   }} />*/