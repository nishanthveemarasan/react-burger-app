import React, { Component } from 'react';
import Layout from './Components/Layout/Layout';
import './App.css';
import BurgerBuilder from './Containers/BurgerBuilder/BurgerBuilder';
import Checkout from './Containers/BurgerBuilder/Checkout/Checkout';
import { Route, Switch } from 'react-router-dom';
import ContactData from './Containers/BurgerBuilder/Checkout/ContactData/ContactData';
class App extends Component {
  render() {
    return (
      <div>
        <Layout>
          <Switch>
            <Route path="/" exact component={BurgerBuilder} />
            <Route path="/checkout" component={Checkout} />
            
            {/* <Route path={'/contact-data'} exact component={ContactData} /> */}
            {/* <Route path="/checkout/contact-data" exact component={ContactData} /> */}
          </Switch>

        </Layout>
      </div>
    );
  }
}

export default App;
