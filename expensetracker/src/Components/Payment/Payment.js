import React, { useState } from 'react';

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
        <div>
            <h1>Payment Gateway</h1>
            <div>
                <label>Select Payment Method:</label>
                <select onChange={(e) => setPaymentMethod(e.target.value)}>
                    <option value="card">Credit/Debit Card</option>
                    <option value="upi">UPI</option>
                </select>
            </div>
            {paymentMethod === 'card' && (
                <form onSubmit={handlePayment}>
                    <label htmlFor="card-number">Card Number</label>
                    <input
                        type="text"
                        id="card-number"
                        placeholder="Card Number"
                        required
                        value={cardNumber}
                        onChange={(e) => setCardNumber(e.target.value)}
                    />

                    <label htmlFor="expiration-date">Expiration Date</label>
                    <input
                        type="text"
                        id="expiration-date"
                        placeholder="MM/YY"
                        required
                        value={expirationDate}
                        onChange={(e) => setExpirationDate(e.target.value)}
                    />

                    <label htmlFor="cvv">CVV</label>
                    <input
                        type="text"
                        id="cvv"
                        placeholder="CVV"
                        required
                        value={cvv}
                        onChange={(e) => setCVV(e.target.value)}
                    />

                    <label htmlFor="name-on-card">Name on Card</label>
                    <input
                        type="text"
                        id="name-on-card"
                        placeholder="Name on Card"
                        required
                        value={nameOnCard}
                        onChange={(e) => setNameOnCard(e.target.value)}
                    />

                    <button type="submit">Pay Now</button>
                </form>
            )}
            {paymentMethod === 'upi' && (
                <form onSubmit={handlePayment}>
                    <label htmlFor="upi-id">UPI ID</label>
                    <input
                        type="text"
                        id="upi-id"
                        placeholder="Your UPI ID"
                        required
                        value={upiId}
                        onChange={(e) => setUpiId(e.target.value)}
                    />
                    <button type="submit">Pay Now</button>
                </form>
            )}

            <div id="payment-status">
                {paymentStatus && <p>{paymentStatus}</p>}
            </div>
        </div>
    );
}

export default PaymentGateway;