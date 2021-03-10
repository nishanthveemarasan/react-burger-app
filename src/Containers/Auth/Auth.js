import React, { Component } from 'react';
import Aux from '../../hoc/Auxiliary';
import { auth } from '../../Store/actions/auth';
import { connect } from 'react-redux';
import Spinner from '../../Components/UI/spinner/Spinner';
import {Redirect} from 'react-router-dom';
class Auth extends Component {
    state = {
        controls: {
            email: {
                value: '',
                validation: {
                    required: true
                },
                valid: true
            },
            password: {
                value: '',
                validation: {
                    required: true
                },
                valid: true
            },
        }
    }
    inputChangedHandler = (event, el) => {
        //console.log(this.state.form['address']['street'])
        const getFormData = {
            ...this.state.controls
        }
        let isFormValids = true;
        getFormData[el].value = event.target.value;
        this.setState({ controls: getFormData });
        //console.log(this.state.controls);

    }
    onSubmitForm = (event) => {
        event.preventDefault();
        console.log(this.state.controls);
        const formSubmitData = {};
        for (let formIdentifier in this.state.controls) {
            console.log(this.state.controls[formIdentifier].value);
            formSubmitData[formIdentifier] = this.state.controls[formIdentifier].value;
        }
        //signin
        this.props.onAuth(formSubmitData['email'], formSubmitData['password'], 'signIn');

    }
    render() {
        let signIn = (
            <Aux>
                <form onSubmit={this.onSubmitForm}>
                    <div className="w-50 mx-auto">
                        <div className="mb-3 row">
                            <label className="col-sm-2 col-form-label">Email</label>
                            <div className="col-sm-10">
                                <input type="text" className="form-control" id="staticEmail"
                                    value={this.state.controls.email.value}
                                    onChange={(event) => this.inputChangedHandler(event, 'email')} />
                            </div>
                        </div>
                        <div className="mb-3 row">
                            <label className="col-sm-2 col-form-label">Password</label>
                            <div className="col-sm-10">
                                <input type="password" className="form-control" id="inputPassword"
                                    value={this.state.controls.password.value}
                                    onChange={(event) => this.inputChangedHandler(event, 'password')} />
                            </div>
                        </div>
                        <div className="mx-auto row">
                            <button type="submit" className="btn btn-primary mb-3">Sign In</button>
                        </div>
                    </div>

                </form>

            </Aux>
        );
        if (this.props.loading) {
            console.log(this.props.loading);
            signIn = <Spinner />
        }
        let authRedirect = null;
        if (this.props.isAuthenticated) {
            authRedirect = <Redirect to="/" />;
        }
        let error = null;
        if (this.props.error) {
            error = this.props.error.message;
        }

        if (this.props.loading) {
            console.log(this.props.loading);
            signIn = <Spinner />
        }
        return (
            <div>
                {authRedirect}
                { signIn}
                <p>{error}</p>

            </div>

        );
    }
}

const mapStateToProps = state => {
    return {
        loading: state.auth.loading,
        error: state.auth.error,
        isAuthenticated: state.auth.token !== null,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onAuth: (email, password, method) => dispatch(auth(email, password, method)),
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Auth);