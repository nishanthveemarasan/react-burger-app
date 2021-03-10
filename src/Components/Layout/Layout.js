import React, { Component } from 'react';
import Aux from '../../hoc/Auxiliary';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import { connect } from 'react-redux';
import './Layout.css'
class Layout extends Component {
    render(){
        return (
            <Aux>
                <div>Toolbar , Sidebar , Backdop{this.props.isAuthenticated}</div>
                <Toolbar isAuth={this.props.isAuthenticated}/>
                <main className="Content">
                    {this.props.children}
                </main>
            </Aux>
        );
    }
    
}


const mapStateToProps = state => {
    return {
        isAuthenticated: state.auth.token !== null,
    }
}
export default connect(mapStateToProps)(Layout);