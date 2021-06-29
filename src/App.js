import React from 'react';
import CoinList from './components/CoinList/CoinList';
import AccountBalance from './components/AccountBalance/AccountBalance';
import ExchangeHeader from './components/ExchangeHeader/ExchangeHeader';
import styled from 'styled-components';

const Div = styled.div `
    text-align: center;
    background-color: #323947;
    color: #fff;
`;


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      balance: 10000,
      coinData: [
          {
            name: 'Bitcoin',
            ticker: 'BTC',
            price: 39999.99
          },
          {
            name: 'Ethereum',
            ticker: 'ETH',
            price: 2999.99
          },
          {
            name: 'Tether',
            ticker: 'USDT',
            price: 1.00
          },
          {
            name: 'Ripple',
            ticker: 'XRP',
            price: 1.65
          },
          {
            name: 'Cardano',
            ticker: 'ADA',
            price: 1.32
          }
      ]
    }
    this.handleRefresh = this.handleRefresh.bind(this);
  }

  handleRefresh(valueChangeTicker) {
    const newCoinData = this.state.coinData.map( function ( {ticker, name, price} ) {
      let newPrice = price;
      if( valueChangeTicker === ticker) {
        const randomPercentage = 0.995 + Math.random() * 0.01;
        newPrice = newPrice * randomPercentage
      } 
      return {
        ticker,
        name,
        price: newPrice
      }     
    });

    this.setState({ coinData : newCoinData });
    
  }

  render() {
    return (
      <Div >
          <ExchangeHeader/>
          <AccountBalance amount={this.state.balance} />
          <CoinList coinData={this.state.coinData} handleRefresh={this.handleRefresh} />      
      </Div>
    );
  }  
}

export default App;
