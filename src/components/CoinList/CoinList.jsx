import React, { Component } from 'react';
import Coin from '../Coin/Coin';
import styled from 'styled-components';

const Table = styled.table`
    margin: 50px auto 50px auto;
    display: inline-block;
    font-size: 1.4rem;
`;

export default class CoinList extends Component {
    render() {
        return (
            <Table>
            <thead>
                <tr>
                    <th><b>Name</b></th>
                    <th><b>Ticker</b></th>
                    <th><b>Price</b></th>
                </tr>
            </thead>
            <tbody> 
                {
                this.props.coinData.map( ({name, ticker, price}) => 
                    < Coin key={ticker} name={name} ticker={ticker} price={price} />  
                    )
                } 
                
                {/* KEY OLARAK UUID KULLANABILIRSIN. IMPORT EDIP HER COINDATA'YA EKLEYEREK ONCESINDE. */}

                {/* Bu bir yontem. 
                this.state.coinData.map( value => 
                    < Coin key={value.ticker} name={value.name} ticker={value.ticker} price={value.price} /> 
                    )
                */}

                {/* Bu da bir yontem. 
                this.state.coinData.map( value => 
                    < Coin key={value.ticker} {...value} /> 
                    )
                */}

                {/* Bu da bir yontem
                <Coin name={this.state.coinData[0].name}
                    ticker={this.state.coinData[0].ticker} 
                    price={this.state.coinData[0].price} />
                <Coin name={this.state.coinData[1].name}
                    ticker={this.state.coinData[1].ticker} 
                    price={this.state.coinData[1].price} />
                <Coin name={this.state.coinData[2].name}
                    ticker={this.state.coinData[2].ticker} 
                    price={this.state.coinData[2].price} />
                <Coin name={this.state.coinData[3].name}
                    ticker={this.state.coinData[3].ticker} 
                    price={this.state.coinData[3].price} /> */}
            </tbody>
            </Table>
        )
    }
}
