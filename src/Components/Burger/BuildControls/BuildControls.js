import React from "react";
import BuildControl from "./BuildControl/BuildControl";

import './BuildControls.css';
const controls = [
    { label: 'Salad', type: 'salad' },
    { label: 'Bacon', type: 'bacon' },
    { label: 'Cheese', type: 'cheese' },
    { label: 'Meat', type: 'meat' },
];
const buildControls = (props) => {
    return (
        <div className="BuildControls">
            <p>Current Price: <strong>{props.price.toFixed(2)}</strong></p>
            {/* <BuildControl label={controls[0]['label']}/>
            <BuildControl label={controls[1]['label']}/>
            <BuildControl label={controls[2]['label']}/>
            <BuildControl label={controls[3]['label']}/> */}
            {controls.map(ctrl => {
                return <BuildControl key={ctrl.label} label={ctrl.label} added={() => props.added(ctrl.type)}
                    deducted={() => props.deducted(ctrl.type)} disabled={props.disabled[ctrl.type]} />
            })}

            <button className="btn btn-success"
                disabled={!props.purchasable}
                onClick={props.ordered}
            >Order Now</button>

        </div>
    );
}

export default buildControls;