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
            ticker: 'BXRPTC',
            price: 1.65
          },
          {
            name: 'Cardano',
            ticker: 'ADA',
            price: 1.32
          }
      ]
    }
  }

  render() {
    return (
      <Div >
          <ExchangeHeader/>
          <AccountBalance amount={this.state.balance} />
          <CoinList coinData={this.state.coinData} />      
      </Div>
    );
  }  
}

export default App;
