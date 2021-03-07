import React, { Component } from "react";
import BuildControls from "../../Components/Burger/BuildControls/BuildControls";
import Burger from "../../Components/Burger/Burger";
import OrderSummary from "../../Components/Burger/OrderSummary/OrderSummary";
import Modal from "../../Components/UI/Modal/Modal";
import Aux from "../../hoc/Auxiliary";
//import axios from '../../axios-order';
import Spinner from '../../Components/UI/spinner/Spinner';
import { connect } from 'react-redux';
import * as actionTypes from '../../Store/action';


class BurgerBuilder extends Component {
    state = {

        //purchaseChaseable: false,
        purchasing: false,
        loading: false,
    };
    /* componentDidMount() {
         axios.get('/ingredients.json')
             .then(response => {
                 this.setState({ ingredients: response.data });
             }).catch(
                 error => {
 
                 }
             )
     }*/
    updatePurchaseState(ingredients) {
        // console.log(ingredientss)

        const sum = Object.keys(ingredients).map(
            igKey => {
                return ingredients[igKey];
            })
            .reduce((sum, el) => {
                return sum + el
            }, 0);//starting number is 0
        //console.log(sum)
        return sum > 0;
    }

    purchaseHandler = () => {
        this.setState({ purchasing: true });
    }
    purchaseClickHandler = () => {
        this.setState({ purchasing: false });
    }
    purchaseContinueHandler = () => {
        /*  this.setState({ loading: true });
          const order = {
              ingredients: this.state.ingredients,
              price: this.state.totalPrice,
              customer: {
                  name: 'max',
                  address: {
                      street: "test 1",
                      zipCode: '1234'
                  },
                  email: 'test@gcom'
              }
          }
          axios.post('/orders.json', order)
              .then(response => {
                  this.setState({ loading: false });
                  console.log(response);
              }).catch(error => {
                  this.setState({ loading: false });
                  console.log(error);
              });*/
        /* const queryParams = [];
         for (let i in this.props.ings) {
             queryParams.push(encodeURIComponent(i) + '=' + encodeURIComponent(this.state.ingredients[i]));
         }
         queryParams.push('price=' + this.props.price);
         const queryString = queryParams.join('&');
         this.props.history.push({
             pathname: '/checkout',
             search: '?' + queryString
         });*/
        this.props.history.push('/checkout');

    }
    // addIngredientsHandler = (type) => {
    //     const oldCount = this.state.ingredients[type];
    //     const updatedCount = oldCount + 1;
    //     const updatedIngredients = {
    //         ...this.state.ingredients
    //     }//take a copy of an obeject
    //     updatedIngredients[type] = updatedCount;
    //     const priceAddition = PRICES_IG[type];
    //     const oldProice = this.state.totalPrice;
    //     const newPrice = oldProice + priceAddition;
    //     this.setState({ totalPrice: newPrice, ingredients: updatedIngredients });
    //     //  this.updatePurchaseState(updatedIngredients);
    //     this.updatePurchaseState();

    // }
    // removeIngredientsHandler = (type) => {
    //     const oldCount = this.state.ingredients[type];
    //     if (oldCount <= 0) {
    //         return;
    //     }
    //     const updatedCount = oldCount - 1;
    //     const updatedIngredients = {
    //         ...this.state.ingredients
    //     }//take a copy of an obeject
    //     updatedIngredients[type] = updatedCount;
    //     const priceAddition = PRICES_IG[type];
    //     const oldProice = this.state.totalPrice;
    //     const newPrice = oldProice - priceAddition;
    //     this.setState({ totalPrice: newPrice, ingredients: updatedIngredients });
    //     this.updatePurchaseState();
    // }

    render() {
        const disablesInfo = {
            ...this.props.ings
        }
        for (let key in disablesInfo) {
            disablesInfo[key] = disablesInfo[key] <= 0;
        }
        // console.log
        let orderSummary = null;
        if (this.props.ings) {
            let orderSummary = <OrderSummary ingredients={this.props.ings} modalClosed={this.purchaseClickHandler}
                purchanseCnntinue={this.purchaseContinueHandler}
                price={this.state.totalPrice} />;
        }

        if (this.state.loading) {
            orderSummary = <Spinner />;
        }
        let burger = <Spinner />;

        if (this.props.ings) {

            burger = (
                <Aux>
                    <Burger ingredients={this.props.ings} />
                    <BuildControls added={this.props.onIngredientAdded}
                        deducted={this.props.onIngredientRemoved}
                        disabled={disablesInfo}
                        price={this.props.price}
                        purchasable={this.updatePurchaseState(this.props.ings)}
                        ordered={this.purchaseHandler}
                    />
                </Aux>
            );
        }
        return (
            <Aux>
                {burger}
                <Modal show={this.state.purchasing} modalClosed={this.purchaseClickHandler}>
                    <OrderSummary ingredients={this.props.ings} modalClosed={this.purchaseClickHandler}
                        purchanseCnntinue={this.purchaseContinueHandler}
                        price={this.props.price} />
                </Modal>
            </Aux>
        );
    }
}
const mapStateToProps = state => {
    return {
        ings: state.ingredients,
        price: state.totalPrice
    };
}
const mapDispatchToProps = dispatch => {
    return {
        onIngredientAdded: (name) => dispatch({ type: actionTypes.ADD_INGREDIENT, ingredientName: name }),
        onIngredientRemoved: (name) => dispatch({ type: actionTypes.REMOVE_INGREDIENT, ingredientName: name }),
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(BurgerBuilder);