import React from 'react';
import Aux from '../../hoc/Auxiliary';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import './Layout.css'
const layout = (props) => {
    return (
        <Aux>
            <div>Toolbar , Sidebar , Backdop</div>
            <Toolbar />
            <main className="Content">
                {props.children}
            </main>
        </Aux>
    );
}

export default layout;