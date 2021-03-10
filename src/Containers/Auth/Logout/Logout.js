import React, { Component } from 'react';
import { logout } from '../../../Store/actions/auth';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
class Logout extends Component {

    componentDidMount() {
        this.props.onLogout();

    }
    render() {
        return <Redirect to="/" />;
    }
}

const mapDispatchToPRops = dispatch => {
    return {
        onLogout: () => dispatch(logout()),
    }
}
export default connect(null , mapDispatchToPRops)(Logout);