import React from 'react';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';
import './Burger.css';

const burger = (props) => {
    const transformedIngrediets = Object.keys(props.ingredients)
        .map(igKey => {
            return [...Array(props.ingredients[igKey])].map(
                (_, i) => {
                    return <BurgerIngredient key={igKey + i} type={igKey} />
                }
            ) //Array(2) [,] //2 empty spaces
        })

    console.log(transformedIngrediets);
    return (
        <div className="Burger container">
            <BurgerIngredient type="bread-top" />
            {transformedIngrediets}
            <BurgerIngredient type="bread-bottom" />

        </div>
    );
}

export default burger;