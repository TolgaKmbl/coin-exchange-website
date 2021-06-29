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
  state = {
    balance: 10000,
    showBalance: true,
    coinData: [
        {
          name: 'Bitcoin',
          ticker: 'BTC',
          balance: 0.5,
          price: 39999.99
        },
        {
          name: 'Ethereum',
          ticker: 'ETH',
          balance: 32,
          price: 2999.99
        },
        {
          name: 'Tether',
          ticker: 'USDT',
          balance: 168,
          price: 1.00
        },
        {
          name: 'Ripple',
          ticker: 'XRP',
          balance: 246,
          price: 1.65
        },
        {
          name: 'Cardano',
          ticker: 'ADA',
          balance: 239,
          price: 1.32
        }
    ]
  }
  handleBalanceVisibilityChange = () => {
    this.setState( function(oldState) {
      return {
        ...oldState, // Diger tum stateleri ayni sekilde getir
        showBalance : !oldState.showBalance // Tersini getir
      }
    })
  }

  handleRefresh = (valueChangeTicker) => {
    const newCoinData = this.state.coinData.map( function ( values ) {
      let newValues = {...values};
      if( valueChangeTicker === values.ticker) {
        const randomPercentage = 0.995 + Math.random() * 0.01;
        newValues.price *= randomPercentage
      } 
      return newValues;     
    });

    this.setState({ coinData : newCoinData });
    
  }

  render() {
    return (
      <Div >
          <ExchangeHeader/>
          <AccountBalance amount={this.state.balance} 
                          showBalance={this.state.showBalance}
                          handleBalanceVisibilityChange={this.handleBalanceVisibilityChange}  />
          <CoinList coinData={this.state.coinData} 
                    handleRefresh={this.handleRefresh}
                    showBalance={this.state.showBalance} />      
      </Div>
    );
  }  
}

export default App;
