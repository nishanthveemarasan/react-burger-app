import * as actionTypes from './action';
import axios from 'axios';

export const purchaseBurgerSuccess = (id , orderData) =>{
    return {
        type: actionTypes.PURCHASE_BURGER_SUCCESS,
        orderId: id,
        orderData: orderData,

    };
};

export const purchaseBurgerFail = (error) =>{
    return {
        type: actionTypes.PURCHASE_BURGER_FAIL,
        error: error,
        
    };
};
export const purchaseBurgerStart = () => {
    return {
        type:actionTypes.PURCHASE_ORDER_START
    }
}
export const purchaseBurger = (orderData) => {
    return dispatch => {
        dispatch(purchaseBurgerStart());
        axios.post('https://react-db-4c80e-default-rtdb.firebaseio.com/orders.json', orderData)
            .then(response => {
                dispatch(purchaseBurgerSuccess(response.data , orderData))
            }).catch(error => {
                dispatch(purchaseBurgerFail(error))
            });
    }
}