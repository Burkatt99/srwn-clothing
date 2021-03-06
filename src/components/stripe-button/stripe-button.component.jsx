import React from 'react';
import StripeCheckout from 'react-stripe-checkout';


const StripeCheckoutButton = ({price}) =>{
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_51KNasPEuLaUxcDjxHLEk7uhbKJalb9PUVD4lYn7YxDaoI96dZShzUcF67MglzQd0lqlfEXAo515R4KMYyx4VMJZI00SP6IZk8y';

    const onToken = token =>{
        alert('Payment Successfull')
    }

    return (
        <StripeCheckout 
        label='Pay Now'
        name='CRWN Clothing Ltd.'
        billingAddress
        shippingAddress
        image='https://svgshare.com/i/CUz.svg'
        description={`Your total is $${price}`}
        amount={priceForStripe}
        panelLabel='Pay Now'
        token={onToken}
        stripeKey={publishableKey}
        />
    )
}
export default StripeCheckoutButton;