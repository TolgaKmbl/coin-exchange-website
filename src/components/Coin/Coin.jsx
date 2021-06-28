import React, { Component } from 'react';
import './Coin.css';
import PropTypes from 'prop-types';

export default class Coin extends Component {
    constructor(props) {
        super(props);
        this.state = {
            price: this.props.price
        }
        this.handleClick = this.handleClick.bind(this); // Button'a atadigimiz fonk. icin        
    }

   /* componentDidMount(){
        const callback = () => {
            // set the state to a new random value 
            const randomPercentage = 0.995 + Math.random() * 0.01;

            * 
            * DO NOT DO THIS !!!! 
            * this.state.price = this.state.price * randomPercentage;
            * this.state.price sol tarafta yalnizca constructor altinda yazilabilir
            * you can initialize the state once only in constructor
            *

            this.setState( oldState => {
                return {
                    price : oldState.price * randomPercentage
                };
            });         
        }
        setInterval(callback, 1000);
    }*/

    handleClick(event) {
        // Prevent the default action of submitting the form
        event.preventDefault();

        const randomPercentage = 0.995 + Math.random() * 0.01;
        this.setState( oldState => {
            return {
                price : oldState.price * randomPercentage
            };
        });
    }

    render() {
        return (
            <tr className="coin-row"> 
                <td>{this.props.name}</td>
                <td>{this.props.ticker}</td>
                <td>${this.state.price}</td>
                <td>
                    <form action="#" method="POST">
                        <button onClick={this.handleClick}>Refresh</button>
                    </form>
                </td>
            </tr>
        )
    }
}

Coin.propTypes = {
    name: PropTypes.string.isRequired,
    ticker: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired

}