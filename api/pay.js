import { Client } from 'square';
import { v4 as uuidv4 } from 'uuid';

const { paymentsApi } = new Client({
    accessToken: 'EAAAEMO4EXhTIMbOZUAmW62mnzajtLIxE2M2jpNnKXAEUmlOpYb6ApMHksr2HqBr',
    environment: 'sandbox'
  });
  BigInt.prototype.toJSON = function() { return this.toString(); }
  export default async function handler(req, res) {
    if ( req.method === 'POST' ) {
      const { result } = await paymentsApi.createPayment({
        idempotencyKey: uuidv4(),
        sourceId: req.body.sourceId,
        amountMoney: {
          currency: 'USD',
          amount: 100
        }
      })
      console.log(result);
      res.status(200).json(result);
    } else {
      res.status(500).send();
    }
  }
  