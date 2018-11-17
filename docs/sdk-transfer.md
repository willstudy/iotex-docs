---
id: sdk-transfer
title: Transfer
---

`iotx.sendTransfer` create, sign, and send a transaction of transfer to iotex blockchain network.

```js
import {Iotx, HttpProvider, utils} from 'iotex-client-js';

(async () => {
  const iotx = new Iotx(new HttpProvider('http://localhost:14004/'), {walletProvider: new HttpProvider('http://localhost:4004/api/wallet-core/')});
  const unlockedWallet = await iotx.accounts.add('04356946f13e5c51a42158fdd29f6ee81e1c59af9f267cde16d5852ef5b32146d18e2f00');
  const receipt = await iotx.sendTransfer({
    amount: utils.toRau('1', 'Iotx'),
    sender: unlockedWallet.rawAddress,
    senderPubKey: unlockedWallet.publicKey,
    recipient: 'io1qyqsqqqqcz8twkf0v55y04jr8cwmfk7q3lgjycyzjq0tx4',
    gasPrice: '1',
    gasLimit: 10000,
  });
  // receipt return value => {
  // {
  //   "version": 0,
  //   "ID": "6951fe24280a457c596cc39f163ab5681d8754295918d7c334780dbdb4347e06",
  //   "nonce": 5,
  //   "sender": "io1qyqsqqqq4p5v65gg0hvqjcktqejmz0mqwqek5vnrhrkhg0",
  //   "recipient": "io1qyqsqqqqcz8twkf0v55y04jr8cwmfk7q3lgjycyzjq0tx4",
  //   "amount": "1000000000000000000",
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
})()
```

Need more detailed API references? Please visit [iotx.sendTransfer](/docs/iotex-client-js#sendtransfer)
