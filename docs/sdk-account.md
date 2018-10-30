---
id: sdk-account
title: Account
---

The `iotx.accounts` contains functions to generate Iotex accounts and sign transactions and data.

> WARNING: We are currently using remote RPC calls to implement the account functionality. In future versions,
> this remote implementation will be migrated to local one. This package has NOT been audited and might potentially be unsafe.

```js
import {Iotx, HttpProvider} from 'iotex-client-js';

const iotx = new Iotx(new HttpProvider('http://localhost:14004/'));
const wallet = await iotx.accounts.create();
// => {
//   "publicKey": "...",
//   "privateKey": "...",
//   "rawAddress": "..."
// }

// recover from private key
const unlockedWallet = await iotx.accounts.add('...iotx private key...');
// => {
//   "publicKey": "...",
//   "privateKey": "...",
//   "rawAddress": "..."
// }
accounts.wallets[unlockedWallet.publicKey];
// => {
//   "publicKey": "...",
//   "privateKey": "...",
//   "rawAddress": "..."
// }
```

Need more detailed API references? Please visit [iotx.accounts](/docs/iotex-client-js#accounts)
