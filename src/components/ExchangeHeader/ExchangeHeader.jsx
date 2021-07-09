import React, { Component } from 'react';
import logo from './logo.svg';
import styled from 'styled-components';

const Img = styled.img`
    height: 9rem;
    pointer-events: none;
`;

const Header = styled.header`
    background-color: #282c4e;
    min-height: 10vh;
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    color: white;
`;

const H1 = styled.h1`
    font-size: 3rem; 
    line-height: 9rem;
    font-weight: bold;
    min-width: 300px; 
`;

export default class ExchangeHeader extends Component {
    render() {
        return (
            <Header>
                <Img src={logo} alt="React logo" />
                <H1>
                    Coin Exchange
                </H1>
          </Header>
        )
    }
}
