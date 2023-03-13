const express = require('express');
const { Client } = require('square');
const { randomUUID } = require('crypto');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const { paymentsApi } = new Client({
  accessToken: 'EAAAEMO4EXhTIMbOZUAmW62mnzajtLIxE2M2jpNnKXAEUmlOpYb6ApMHksr2HqBr',
  environment: 'sandbox'
});

app.post('/payment', async (req, res) => {
    const { sourceId, totalPrice } = req.body;
   
  const idempotencyKey = randomUUID();

  try {
    const { result } = await paymentsApi.createPayment({
      idempotencyKey, 
      sourceId,
      amountMoney: {
        currency: 'USD',
        amount: BigInt(totalPrice),
      }
    });
    BigInt.prototype.toJSON = function() { return this.toString(); }
    console.log(result);
    res.status(200).json(result);
  } catch (error) {
    console.error(error);
    res.status(500).send(error);
  }
});

app.listen(4000, () => {
  console.log('Server listening on port 4000');
});