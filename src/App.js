import React, { Component } from 'react';
import Layout from './Components/Layout/Layout';
import './App.css';
import BurgerBuilder from './Containers/BurgerBuilder/BurgerBuilder';
import Checkout from './Containers/BurgerBuilder/Checkout/Checkout';
import { Route, Switch, withRouter } from 'react-router-dom';
import {connect} from 'react-redux'
import ContactData from './Containers/BurgerBuilder/Checkout/ContactData/ContactData';
import Auth from './Containers/Auth/Auth';
import Logout from './Containers/Auth/Logout/Logout';
import { authCheckState } from './Store/actions/auth';
class App extends Component {
  componentDidMount(){
    this.props.onTryAutoSignUp();
  }
  render() {
    return (
      <div>
        <Layout>
          <Switch>
            <Route path="/" exact component={BurgerBuilder} />
            <Route path="/checkout" component={Checkout} />
            <Route path="/auth" component={Auth} />
            <Route path="/logout" component={Logout} />

            {/* <Route path={'/contact-data'} exact component={ContactData} /> */}
            {/* <Route path="/checkout/contact-data" exact component={ContactData} /> */}
          </Switch>

        </Layout>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return{
    onTryAutoSignUp: () => dispatch(authCheckState()),
  };
};

export default withRouter(connect(null, mapDispatchToProps)(App));
