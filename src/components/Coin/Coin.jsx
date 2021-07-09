import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Td = styled.td`    
    border: 1px solid #cccccc;
    width: 8vw;
`;

const TdActions = styled(Td)`
    width: 24vw;
`;

const TdName = styled(Td)`
    width: 12vw;
`;

const Button = styled.button`
    font-size: 11px;
    width: 78px;
    margin: 3px 5px 5px 0;

`;

export default function Coin(props) {
 
    const handleClick = (event) => {
        // Prevent the default action of submitting the form 
        event.preventDefault();

        props.handleRefresh(props.tickerId); 
    }

    const handleBuy = (event) => {
        // Prevent the default action of submitting the form 
        event.preventDefault();

        props.handleTransaction(true, props.tickerId); 
    }

    const handleSell = (event) => {
        // Prevent the default action of submitting the form 
        event.preventDefault();

        props.handleTransaction(false, props.tickerId); 
    }
    
    return (
        <tr> 
            <TdName>{props.name}</TdName>
            <Td>{props.ticker}</Td> 
            <Td>${props.price}</Td>
            <Td>{props.showBalance ? props.balance : '-'}</Td> 
            <TdActions>
                <form action="#" method="POST">
                <Button className={'btn btn-secondary'} onClick={handleClick}>Refresh</Button>
                <Button className={'btn btn-success'} onClick={handleBuy}>Buy</Button>
                <Button className={'btn btn-danger'} onClick={handleSell}>Sell</Button>
                </form>
            </TdActions>
        </tr>
        );

}

Coin.propTypes = {
    name: PropTypes.string.isRequired,
    ticker: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired
}