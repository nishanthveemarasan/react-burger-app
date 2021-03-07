import React, { Component } from "react";
import axios from '../../../../axios-order';
import { connect } from 'react-redux';
class ContactData extends Component {
    state = {
        name: '',
        email: '',
        address: {
            street: '',
            postalCode: ''
        },
        loading:false,
    }
    componentDidMount() {
        console.log("price"+this.props.price);
        console.log(this.props.ings);
    }
    orderHandler = (event) => {
        event.preventDefault();
        this.setState({loading: true});
        const order = {
            ingredients: this.props.ings,
            price: this.props.price,
            customer: {
                name: 'max',
                address: {
                    street: "test 1",
                    zipCode: '1234'
                },
                email: 'test@gcom'
            }
        }
        axios.post('/orders.json', order)
            .then(response => {
                this.setState({ loading: false });
                console.log(response);
            }).catch(error => {
                this.setState({ loading: false });
                console.log(error);
            });
    }
    render() {
        return (
            <div className="w-50 mx-auto mt-5">
                <form>
                    <div className="mb-3 row ">
                        <label className="col-sm-2 col-form-label">Name</label>
                        <div className="col-sm-10">
                            <input type="text" className="form-control" id="staticEmail" />
                        </div>
                    </div>
                    <div className="mb-3 row">
                        <label className="col-sm-2 col-form-label">Email</label>
                        <div className="col-sm-10">
                            <input type="emal" className="form-control" id="staticEmail" />
                        </div>
                    </div>
                    <div className="mb-3 row">
                        <label className="col-sm-2 col-form-label">Street</label>
                        <div className="col-sm-10">
                            <input type="text" className="form-control" id="staticEmail" />
                        </div>
                    </div>
                    <div className="mb-3 row">
                        <label className="col-sm-2 col-form-label">Postal Code</label>
                        <div className="col-sm-10">
                            <input type="text" className="form-control" id="staticEmail" />
                        </div>
                    </div>
                    <button className="btn btn-primary" onClick={this.orderHandler}>Order</button>
                </form>
            </div>
        );
    }
}
const mapStateToProps = state => {
    return {
        ings: state.ingredients,
        price: state.totalPrice
    }
}
export default connect(mapStateToProps)(ContactData);