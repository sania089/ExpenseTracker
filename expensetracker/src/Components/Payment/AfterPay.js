import React, { useState } from 'react';
import styled from 'styled-components';
import Button from '../Button/Button';
import {Link} from 'react-router-dom';

function AfterPay() {

    return (
        
        <Afterstyled>
        <div className='pay'>
            <h1>Your Payment is being processed</h1>
            <h2>This may take a couple of minutes....</h2>
            <h2>Do not refresh the page!</h2>
            <Link to = "/payment">      
            <ButtonStyled type="submit">Cancel Transaction</ButtonStyled>
            </Link>   
           </div>
        </Afterstyled>
        
    );
}
const Afterstyled=styled.form`
    display: flex;
    flex-direction: column;
    gap: 2rem;
    .pay{
        font-family: inherit;
        font-size: 25px;
        outline: none;
        border: none;
        padding: .5rem 1rem;
        border-radius: 5px;
        border: 2px solid #fff;
        background: transparent;
        resize: none;
        box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.06);
        color: rgba(34, 34, 96, 0.9);
        &::placeholder{
            color: rgba(34, 34, 96, 0.4);
    }
    
    `;
const ButtonStyled = styled.button`
    
    font-family: inherit;
    font-size: 25px;
    padding: 10px 20px;
    background: var(--color-accent);
    color: #fff;
    border: none;
    border-radius: 5px;
    cursor: pointer;

 
`;
export default AfterPay;