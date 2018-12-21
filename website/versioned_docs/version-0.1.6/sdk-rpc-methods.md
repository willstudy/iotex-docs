---
id: version-0.1.6-sdk-rpc-methods
title: RPC methods
original_id: sdk-rpc-methods
---

The `rpc-methods` package allows you to make JSON RPC calls to Iotex blockchain.

Use the umbrella iotx package:

```js
import {Iotx, HttpProvider} from 'iotex-client-js';

(async () => {
  const iotx = new Iotx(new HttpProvider('http://127.0.0.1:14004'));
  const height = await iotx.rpcMethods.getBlockchainHeight();
  const bal = await iotx.rpcMethods.getAddressBalance('io1qyqsqqqq26zujam2gt5cut0ggu8pa4d5q7hnrvsvace4x6');
})()
```

Use this standalone package:

```js
import {RpcMethods, HttpProvider} from 'iotex-client-js';

(async () => {
  const methods = new RpcMethods(new HttpProvider('http://127.0.0.1:14004'));
  const height = await methods.getBlockchainHeight();
  const bal = await methods.getAddressBalance('io1qyqsqqqq26zujam2gt5cut0ggu8pa4d5q7hnrvsvace4x6');
})()
```

If you would like to make JSON RPC calls by yourself, please visit [JSON RPC](/docs/json-rpc).

Need to check all RPC API references? Please visit [iotx.rpcMethods](/docs/iotex-client-js#rpcmethods)
