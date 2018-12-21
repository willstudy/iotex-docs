---
id: version-0.1.6-sdk-transfer
title: Transfer
original_id: sdk-transfer
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
    gasPrice: '0',
    gasLimit: 1000000,
  });
})()
```

The receipt's type is [TReceipt](https://docs.iotex.io/docs/iotex-client-js#treceipt). Need more detailed API references? Please visit [iotx.sendTransfer](/docs/iotex-client-js#sendtransfer)
