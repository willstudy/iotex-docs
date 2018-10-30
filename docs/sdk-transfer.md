---
id: sdk-transfer
title: Transfer
---

`iotx.sendTransfer` create, sign, and send a transaction of transfer to iotex blockchain network.

```js
import {Iotx, HttpProvider} from 'iotex-client-js';

const iotx = new Iotx(new HttpProvider('http://127.0.0.1:14004'));
const unlockedWallet = await iotx.accounts.add('c5364b1a2d99d127439be22edfd657889981e9ba4d6d18fe8eca489d48485371efcb2400');
const receipt = await iotx.sendTransfer({
  amount: '1',
  sender: unlockedWallet.rawAddress,
  senderPubKey: unlockedWallet.publicKey,
  recipient: 'io1qyqsqqqqcz8twkf0v55y04jr8cwmfk7q3lgjycyzjq0tx4',
  gasPrice: '1',
  gasLimit: 10000,
});
// => {
//   "version": 0,
//   "ID": "1b0252bd7addfa0920f61b222887743e42eacf9b607de45fa18a59e769cf674b",
//   "nonce": 20,
//   "sender": "io1qyqsqqqq26zujam2gt5cut0ggu8pa4d5q7hnrvsvace4x6",
//   "recipient": "io1qyqsqqqqcz8twkf0v55y04jr8cwmfk7q3lgjycyzjq0tx4",
//   "amount": "1",
//   "senderPubKey": "",
//   "signature": "",
//   "payload": "",
//   "gasLimit": 10000,
//   "gasPrice": "1",
//   "isCoinbase": false,
//   "fee": "",
//   "timestamp": 0,
//   "blockID": "",
//   "isPending": true
// }
```

Need more detailed API references? Please visit [iotx.sendTransfer](/docs/iotex-client-js#sendtransfer)
