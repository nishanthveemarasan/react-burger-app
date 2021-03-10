import * as actionTypes from '../actions/action';
const intialState = {
    orders: [],
    purchaing: false,
}
const reducer = (state = intialState  ,action) => {
    switch(action.type){
        case actionTypes.PURCHASE_BURGER_SUCCESS:
            const newOrder = {
                ...action.orderData,
                id: action.orderId,
            }
        return {
            ...state,
            loading: false,
            orders: state.orders.concat(newOrder),
        };
        case actionTypes.PURCHASE_BURGER_FAIL:
            return {
                ...state,
                loading: false,
            };
            case actionTypes.PURCHASE_ORDER_START:
                return {
                    ...state,
                    loading: true,
                };
        default:
            return state;
    }
};

export default reducer;