import * as actionTypes from './action';
import axios from 'axios';
export const addIngredient = (name) => {
    return {
        type: actionTypes.ADD_INGREDIENT,
        ingredientName: name
    }
};
export const removeIngredient = (name) => {
    return {
        type: actionTypes.REMOVE_INGREDIENT,
        ingredientName: name
    }
};
export const setIngredient = (ingredients) => {
    return {
        type: actionTypes.SET_INGREDIENTS,
        ingredients: ingredients
    }
};
export const fetchIngredientFail = (ingredients) => {
    return {
        type: actionTypes.FETCH_INGREDIENTS_FAILS,

    }
};
export const fetchInitialIngredient = () => {
    return dispatch => {
        axios.get('https://react-db-4c80e-default-rtdb.firebaseio.com/ingredients.json')
            .then(response => {
                console.log(response);
                dispatch(setIngredient(response.data));
            }).catch(
                error => {
                    dispatch(fetchIngredientFail());
                }
            )
    }
};