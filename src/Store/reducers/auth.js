import * as actionTypes from '../actions/action';

const intitalState = {
    token: null,
    userId: null,
    error: null,
    loading: false,
};
const reducer = (state = intitalState, action) => {
    switch (action.type) {
        case actionTypes.AUTH_START:
            return {
                ...state,
                loading: true,
                error: null,
            };
        case actionTypes.AUTH_SUCCESS:
            return {
                ...state,
                loading: false,
                token: action.idToken,
                userId: action.userId,
                error: null,
            };
        case actionTypes.AUTH_FAIL:
            return {
                ...state,
                loading: false,
                error: action.error,
            };
        case actionTypes.AUTH_LOGOUT:
            return {
                ...state,
                loading: false,
                token: null,
                userId: null,
                error: null,
            };

        default:
            return state;
    }
}
export default reducer;
