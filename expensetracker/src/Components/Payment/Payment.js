import React, { useState } from 'react';
import styled from 'styled-components';
import Button from '../Button/Button';

function PaymentGateway() {
    const [paymentMethod, setPaymentMethod] = useState('card');
    const [cardNumber, setCardNumber] = useState('');
    const [expirationDate, setExpirationDate] = useState('');
    const [cvv, setCVV] = useState('');
    const [nameOnCard, setNameOnCard] = useState('');
    const [upiId, setUpiId] = useState('');
    const [paymentStatus, setPaymentStatus] = useState('');

    const handlePayment = async (e) => {
        e.preventDefault();
        if (paymentMethod === 'card') {
            setPaymentStatus('Card payment successful');
        } else if (paymentMethod === 'upi') {
            setPaymentStatus('UPI payment successful');
        }
    };

    return (
        
        <Paymentstyled>
        <div className='pay'>
            <h1>Payment Gateway</h1>
            <div >
                <LabelStyled><h2>Select Payment Method:</h2></LabelStyled>
                <SelectStyled onChange={(e) => setPaymentMethod(e.target.value)}>
                    <option value="card" >Credit/Debit Card</option>
                    <option value="upi" >UPI</option>
                </SelectStyled>
            </div>
            {paymentMethod === 'card' && (
                <form onSubmit={handlePayment}>
                    <LabelStyled htmlFor="card-number"><h3>Card Number</h3></LabelStyled>
                    <InputStyled
                        type="text"
                        id="card-number"
                        placeholder="Card Number"
                        required
                        value={cardNumber}
                        onChange={(e) => setCardNumber(e.target.value)}
                    />

                    <LabelStyled htmlFor="expiration-date"><h3>Expiration Date</h3></LabelStyled>
                    <InputStyled
                        type="text"
                        id="expiration-date"
                        placeholder="MM/YY"
                        required
                        value={expirationDate}
                        onChange={(e) => setExpirationDate(e.target.value)}
                    />

                    <LabelStyled htmlFor="cvv"><h3>CVV</h3></LabelStyled>
                    <InputStyled
                        type="text"
                        id="cvv"
                        placeholder="CVV"
                        required
                        value={cvv}
                        onChange={(e) => setCVV(e.target.value)}
                    />

                    <LabelStyled htmlFor="name-on-card"><h3>Name on Card</h3></LabelStyled>
                    <InputStyled
                        type="text"
                        id="name-on-card"
                        placeholder="Name on Card"
                        required
                        value={nameOnCard}
                        onChange={(e) => setNameOnCard(e.target.value)}
                    />

                    <ButtonStyled type="submit">Pay Now</ButtonStyled>
                </form>
            )}
            {paymentMethod === 'upi' && (
                <form onSubmit={handlePayment}>
                    <LabelStyled htmlFor="upi-id"><h3>UPI ID</h3></LabelStyled>
                    <InputStyled
                        type="text"
                        id="upi-id"
                        placeholder="Your UPI ID"
                        required
                        value={upiId}
                        onChange={(e) => setUpiId(e.target.value)}
                    />
                    <LabelStyled htmlFor="Pin"><h3>Enter Pin</h3></LabelStyled>
                    <InputStyled
                        type="text"
                        id="Pin"
                        placeholder="Enter PIN"
                        required
                        value={upiId}
                        onChange={(e) => setUpiId(e.target.value)}
                    />
                    <ButtonStyled type="submit">Pay Now</ButtonStyled>
                </form>
            )}

            <div id="payment-status">
                {paymentStatus && <p>{paymentStatus}</p>}
            </div>
        </div>
        </Paymentstyled>
        
    );
}
const Paymentstyled=styled.form`
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
const LabelStyled = styled.label`
    font-size: 16px;
    color: #333;
    margin-bottom: 5px;
`;
const SelectStyled = styled.select`
    font-family: inherit;
    font-size: 25px;
    outline: none;
    border: 2px solid #333;
    border-radius: 5px;
    padding: 10px;
    width: 100%;
    margin-bottom: 15px;
    color: #333;
`;
const InputStyled = styled.input`
    font-family: inherit;
    font-size: 25px;
    outline: none;
    border: 2px solid #333;
    border-radius: 5px;
    padding: 10px;
    width: 100%;
    margin-bottom: 15px;
    color: #333;
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
export default PaymentGateway;