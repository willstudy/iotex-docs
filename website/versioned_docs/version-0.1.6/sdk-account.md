---
id: version-0.1.6-sdk-account
title: Account
original_id: sdk-account
---

The `iotx.accounts` contains functions to generate Iotex accounts and sign transactions and data.

> WARNING: We are currently using remote RPC calls to implement the account functionality. In future versions,
> this remote implementation will be migrated to a local one. This package has NOT been audited and might potentially be unsafe.

```js
import {Iotx, HttpProvider} from 'iotex-client-js';

(async () => {
  const iotx = new Iotx(new HttpProvider('http://localhost:14004/'), {walletProvider: new HttpProvider('http://localhost:4004/api/wallet-core/')});

  // create a new wallet which contains a public key, a private key, and a raw address.
  const wallet = await iotx.accounts.create();

  // recover the whole wallet from a single private key
  const unlockedWallet = await iotx.accounts.add('c5364b1a2d99d127439be22edfd657889981e9ba4d6d18fe8eca489d48485371efcb2400');
})()
```

Wallet type is [TWallet](https://docs.iotex.io/docs/iotex-client-js#twallet). Need more detailed API references? Please visit [iotx.accounts](/docs/iotex-client-js#accounts)
