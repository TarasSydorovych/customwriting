import * as React from 'react';
import { CreditCard, PaymentForm } from 'react-square-web-payments-sdk';
import axios from 'axios';
import { auth } from '../../firebase';
import './order.css'
import { v4 as uuidv4 } from 'uuid';

export default function PayBlock({totalPrice, setCheckPayment, setOrderId}) {





    return(
        <div className='payWrapper'>
        <div className='payContainer'>
      <PaymentForm
  applicationId="sandbox-sq0idb-fFDGXqamGZOb0XKszK_z2w"
  cardTokenizeResponseReceived={async (token, verifiedBuyer) => {
    const response = await fetch("http://127.0.0.1:4000/payment", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        sourceId: token.token,
        totalPrice: totalPrice,
        uuidv4: uuidv4(),
      }),
    });
    setOrderId(await response.json())
    setCheckPayment(true);
    
  }}
  locationId='LMNABQ21XHT4R'
>
  <CreditCard />
</PaymentForm>
</div>
    </div>
    )
}