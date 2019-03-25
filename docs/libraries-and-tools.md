---
title: Libraries and Tools
---

## SDK Overview

<span style="color:red">We are migrating to <em>SDK 2.0</em>. The doc below is deprecated.</span>


`iotex-client-js` is a collection of JavaScript libraries which allow you to interact with a local or remote iotex blockchain node, using an HTTP connection.

::: warning
Red components above will be deprecated in the future. Now we are exposing a public endpoint in explorer for the wallet.
:::

### Installation

In your JS project root, use `npm install` or `yarn add`.

```js
npm install iotex-client-js
```

### Quick Start

Using JS SDK

1. [generate an account / recover an account from the private key](/docs/libraries-and-tools.html#account)
2. [transfer tokens](/docs/libraries-and-tools.html#transfer)
3. [run smart contracts](/docs/libraries-and-tools.html#smart-contract)
4. [make RPC calls](/docs/libraries-and-tools.html#rpc-methods)
5. [check the complete API references](/docs/reference.html#iotex-client-js)

[Using JSON RPC endpoints](/docs/reference.html#json-rpc)


Having questions? Ask in [our gitter chat room](https://gitter.im/iotex-dev-community/Lobby).

## Account


The `iotx.accounts` contains functions to generate Iotex accounts and sign transactions and data.

::: warning
We are currently using remote RPC calls to implement the account functionality. In future versions,
::: 
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

Wallet type is [TWallet](/docs/reference.html#iotex-client-js). Need more detailed API references? Please visit [iotx.accounts](/docs/reference.html#accounts)


## Transfer


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

The receipt's type is [TReceipt](/docs/reference.html#treceipt). Need more detailed API references? Please visit [iotx.sendTransfer](/docs/reference.html#sendtransfer)


## Smart Contract


The `iotx.Contract` class makes it easy to interact with smart contracts on the iotex blockchain. When you create a new contract object, you give it the json interface of the respective smart contract, and it will auto converts all calls into low-level ABI calls over RPC for you.

This allows you to interact with smart contracts as if they were JavaScript objects.

### Compiling Solidity

`iotex-client-js` does not compile solidity. However, you can use the following ways to get ABI and bytecode.

1. option 1: use https://iotexscan.io/wallet

2. option 2: in Node.js, use [`solc`](https://www.npmjs.com/package/solc)

```js
import solc from 'solc';

const solidityFileString = `
pragma solidity ^0.4.16;

contract SimpleStorage {
   uint storedData;

   function set(uint x) public {
       storedData = x;
   }

   function get() public view returns (uint) {
       return storedData;
   }
}
`;
const contractName = ':SimpleStorage';
const output = solc.compile(solidityFileString, 1);
const abi = JSON.parse(output.contracts[contractName].interface);
const bytecode = output.contracts[contractName].bytecode;
```

3. option 3: in browser, use [browser-solc](https://www.npmjs.com/package/browser-solc)

### Deploying Contract

Once you get the abi and bytecode from the above step, then you can deploy it by sending the execution to the iotex blockchain network.

```js
import {Iotx, HttpProvider} from 'iotex-client-js';

(async () => {
  const contractName = ':SimpleStorage';
  const abi = [
    {
      "constant": false,
      "inputs": [
        {
          "name": "x",
          "type": "uint256"
        }
      ],
      "name": "set",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "get",
      "outputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    }
  ]
  const bytecode = "608060405234801561001057600080fd5b5060bf8061001f6000396000f30060806040526004361060485763ffffffff7c010000000000000000000000000000000000000000000000000000000060003504166360fe47b18114604d5780636d4ce63c146064575b600080fd5b348015605857600080fd5b5060626004356088565b005b348015606f57600080fd5b506076608d565b60408051918252519081900360200190f35b600055565b600054905600a165627a7a723058208236d8b2917002adfa862bbd8ea837cd90c6d76c5f0d7e1a0a7549faece1559f0029"

  const provider = new HttpProvider('http://localhost:14004/');
  const iotx = new Iotx(provider, {walletProvider: new HttpProvider('http://localhost:4004/api/wallet-core/')});
  const wallet = await iotx.accounts.add('c5364b1a2d99d127439be22edfd657889981e9ba4d6d18fe8eca489d48485371efcb2400');
  const contract = new iotx.Contract({abi, contractName, wallet});
  const exec = await contract.deploy({
    byteCode: bytecode,
    gasLimit: 100000,
    gasPrice: '0',
    version: 1,
    contract: '',
    amount: '1',
  });
})()
```

The exec's type is [TExecution](/docs/reference.html#texecution). And then you can query its receipt.

```js
const receipt = await iotx.rpcMethods.getReceiptByExecutionID(exec.ID);
// receipt return value => {
//   returnValue: '',
//   status: 1,
//   hash: '7eb31c95ae0066c17699f6ca7d30b2e3f654794c7c30d9af06118f4f459f56ae',
//   gasConsumed: 10000,
//   contractAddress: 'io1qyqsqqqqgh345g9zle6qg7txkumkshluqd2p0yj0n7e50m',
//   logs: []
// }
```

### Interacting with Smart Contract

After you get the contract address from the receipt, you can interact with the contract by preparing the methods first, and then call contract functions.
There are methods `set` and `get` in the example contract `SimpleStorage` defined in the [solidity string above](#compiling-solidity), so you can call them as the following.

```js
await contract
.prepareMethods({
     contractAddress: receipt.contractAddress,
     gasLimit: 100000,
     gasPrice: '0',
     version: 1,
     amount: '0',
   })
.set(666);

const value = await contract
.prepareMethods({
     contractAddress: receipt.contractAddress,
     gasLimit: 100000,
     gasPrice: '0',
     version: 1,
     amount: '0',
   })
.get();
```
The value above is a dynamic type depending on what you defined in the solidity. Need more detailed API references? Please visit [iotx.Contract](/docs/reference.html#iotex-client-js)




## RPC Methods

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

If you would like to make JSON RPC calls by yourself, please visit [JSON RPC](/docs/reference.html#json-rpc).

Need to check all RPC API references? Please visit [iotx.rpcMethods](/docs/reference.html#rpcmethods)
