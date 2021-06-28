import React from 'react';
import logo from './logo.svg';
import './App.css';
import Coin from './components/Coin/Coin';
import AccountBalance from './components/AccountBalance/AccountBalance'


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} alt="React Logo" className="App-logo" />
        <h1 className="App-title">
          Coin Exchange
        </h1>
        </header>
        <AccountBalance amount={10000} />
        <table className="coin-table">
        <thead>
            <tr>
                <th><b>Name</b></th>
                <th><b>Ticker</b></th>
                <th><b>Price</b></th>
            </tr>
        </thead>
        <tbody>
          <Coin name="Bitcoin" ticker="BTC" price={39999.99} />
          <Coin name="Ethereum" ticker="ETH" price={2999.99} />
          <Coin name="Tether" ticker="USDT" price={1.00} />
          <Coin name="Ripple" ticker="XRP" price={1.65} />
        </tbody>
        </table>      
    </div>
  );
}

export default App;
