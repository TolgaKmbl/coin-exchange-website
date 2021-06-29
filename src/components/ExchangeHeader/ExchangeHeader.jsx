import React, { Component } from 'react';
import styled from 'styled-components';
import logo from './logo.svg';

const Img = styled.img`
    height: 8rem;
    pointer-events: none;
`;

const Header = styled.header`
    background-color: #282c34;
    min-height: 20vh;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;  
    color: white;
`;

const H1 = styled.h1`
    font-size: 4rem;
`;



export default class ExchangeHeader extends Component {
    render() {
        return (
            <Header>
                <Img src={logo} alt="React Logo" />
                <H1>
                    Coin Exchange
                </H1>
            </Header>
        )
    }
}
