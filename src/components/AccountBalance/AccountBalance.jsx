import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Section = styled.section`
    font-size: 2rem;
    text-align: center;
    margin-bottom: 2rem;
    line-height: 3rem;
    display: inlice-block;
`;

const Balance = styled.div`
    min-width: 250px;
    margin: 0.5rem 0 0 2.5rem;
    font-size:1.5em;
    vertical-align:middle;
`;

const Button = styled.button`
    margin: 0 8px;
`;

const BalanceButton = styled(Button)`
    width: 150px;
`; 

var formatter = Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
});


export default function AccountBalance(props) {

    const buttonText = props.showBalance ? 'Hide Balance' : 'Show Balance';
    let content = '\u00A0';
    if (props.showBalance) {
        content = <>{ formatter.format(props.amount) } </>
    }
    const buttonClass = 'btn ' + (props.showBalance ? 'btn-danger' : 'btn-success');

    return (
        <>
            <Balance>{content}</Balance>
            <Section>            
                <BalanceButton onClick={props.handleBalanceVisibilityChange} className={buttonClass}>{buttonText}</BalanceButton>
                <Button className="btn btn-warning" onClick={props.handleMoneyAdd}><i className="fas fa-wallet"></i></Button>
            </Section>
        </>
    );

}


AccountBalance.propTypes = {
    amount: PropTypes.number.isRequired
}