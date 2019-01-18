---
id: json-rpc
title: JSON RPC
---


## Explorer.getBlockchainHeight

get the blockchain tip height

### Parameters

<code>[]</code>

### Returns

type | is_array | optional
--- | --- | ---
<span style="color: #ed225d">int</span> | false | false


### Example

```
curl -X POST --data '{"jsonrpc":"2.0","method":"Explorer.getBlockchainHeight","params":[],"id":"1"}'
```





## Explorer.getAddressBalance

get the balance of an address

### Parameters

name | type | is_array
--- | --- | ---
<code>address</code> | <span style="color: #ed225d">string</span> | false


### Returns

type | is_array | optional
--- | --- | ---
<span style="color: #ed225d">string</span> | false | false


### Example

```
curl -X POST --data '{"jsonrpc":"2.0","method":"Explorer.getAddressBalance","params":["address: string"],"id":"1"}'
```





## Explorer.getAddressDetails

get the address detail of an iotex address

### Parameters

name | type | is_array
--- | --- | ---
<code>address</code> | <span style="color: #ed225d">string</span> | false


### Returns

type | is_array | optional
--- | --- | ---
<span style="color: #ed225d">AddressDetails</span> | false | false


### Example

```
curl -X POST --data '{"jsonrpc":"2.0","method":"Explorer.getAddressDetails","params":["address: string"],"id":"1"}'
```





## Explorer.getLastTransfersByRange

get list of transfers by start block height, transfer offset and limit

### Parameters

name | type | is_array
--- | --- | ---
<code>startBlockHeight</code> | <span style="color: #ed225d">int</span> | false
<code>offset</code> | <span style="color: #ed225d">int</span> | false
<code>limit</code> | <span style="color: #ed225d">int</span> | false
<code>showCoinBase</code> | <span style="color: #ed225d">bool</span> | false


### Returns

type | is_array | optional
--- | --- | ---
<span style="color: #ed225d">Transfer</span> | true | false


### Example

```
curl -X POST --data '{"jsonrpc":"2.0","method":"Explorer.getLastTransfersByRange","params":["startBlockHeight: int", "offset: int", "limit: int", "showCoinBase: bool"],"id":"1"}'
```





## Explorer.getTransferByID

get transfers from transaction id

### Parameters

name | type | is_array
--- | --- | ---
<code>transferID</code> | <span style="color: #ed225d">string</span> | false


### Returns

type | is_array | optional
--- | --- | ---
<span style="color: #ed225d">Transfer</span> | false | false


### Example

```
curl -X POST --data '{"jsonrpc":"2.0","method":"Explorer.getTransferByID","params":["transferID: string"],"id":"1"}'
```





## Explorer.getTransfersByAddress

get list of transfers belonging to an address

### Parameters

name | type | is_array
--- | --- | ---
<code>address</code> | <span style="color: #ed225d">string</span> | false
<code>offset</code> | <span style="color: #ed225d">int</span> | false
<code>limit</code> | <span style="color: #ed225d">int</span> | false


### Returns

type | is_array | optional
--- | --- | ---
<span style="color: #ed225d">Transfer</span> | true | false


### Example

```
curl -X POST --data '{"jsonrpc":"2.0","method":"Explorer.getTransfersByAddress","params":["address: string", "offset: int", "limit: int"],"id":"1"}'
```





## Explorer.getUnconfirmedTransfersByAddress

get list of unconfirmed transfers in actpool belonging to an address

### Parameters

name | type | is_array
--- | --- | ---
<code>address</code> | <span style="color: #ed225d">string</span> | false
<code>offset</code> | <span style="color: #ed225d">int</span> | false
<code>limit</code> | <span style="color: #ed225d">int</span> | false


### Returns

type | is_array | optional
--- | --- | ---
<span style="color: #ed225d">Transfer</span> | true | false


### Example

```
curl -X POST --data '{"jsonrpc":"2.0","method":"Explorer.getUnconfirmedTransfersByAddress","params":["address: string", "offset: int", "limit: int"],"id":"1"}'
```





## Explorer.getTransfersByBlockID

get all transfers in a block

### Parameters

name | type | is_array
--- | --- | ---
<code>blkID</code> | <span style="color: #ed225d">string</span> | false
<code>offset</code> | <span style="color: #ed225d">int</span> | false
<code>limit</code> | <span style="color: #ed225d">int</span> | false


### Returns

type | is_array | optional
--- | --- | ---
<span style="color: #ed225d">Transfer</span> | true | false


### Example

```
curl -X POST --data '{"jsonrpc":"2.0","method":"Explorer.getTransfersByBlockID","params":["blkID: string", "offset: int", "limit: int"],"id":"1"}'
```





## Explorer.getLastVotesByRange

get list of votes by start block height, vote offset and limit

### Parameters

name | type | is_array
--- | --- | ---
<code>startBlockHeight</code> | <span style="color: #ed225d">int</span> | false
<code>offset</code> | <span style="color: #ed225d">int</span> | false
<code>limit</code> | <span style="color: #ed225d">int</span> | false


### Returns

type | is_array | optional
--- | --- | ---
<span style="color: #ed225d">Vote</span> | true | false


### Example

```
curl -X POST --data '{"jsonrpc":"2.0","method":"Explorer.getLastVotesByRange","params":["startBlockHeight: int", "offset: int", "limit: int"],"id":"1"}'
```





## Explorer.getVoteByID

get vote from vote id

### Parameters

name | type | is_array
--- | --- | ---
<code>voteID</code> | <span style="color: #ed225d">string</span> | false


### Returns

type | is_array | optional
--- | --- | ---
<span style="color: #ed225d">Vote</span> | false | false


### Example

```
curl -X POST --data '{"jsonrpc":"2.0","method":"Explorer.getVoteByID","params":["voteID: string"],"id":"1"}'
```





## Explorer.getVotesByAddress

get list of votes belonging to an address

### Parameters

name | type | is_array
--- | --- | ---
<code>address</code> | <span style="color: #ed225d">string</span> | false
<code>offset</code> | <span style="color: #ed225d">int</span> | false
<code>limit</code> | <span style="color: #ed225d">int</span> | false


### Returns

type | is_array | optional
--- | --- | ---
<span style="color: #ed225d">Vote</span> | true | false


### Example

```
curl -X POST --data '{"jsonrpc":"2.0","method":"Explorer.getVotesByAddress","params":["address: string", "offset: int", "limit: int"],"id":"1"}'
```





## Explorer.getUnconfirmedVotesByAddress

get list of unconfirmed votes in actpool belonging to an address

### Parameters

name | type | is_array
--- | --- | ---
<code>address</code> | <span style="color: #ed225d">string</span> | false
<code>offset</code> | <span style="color: #ed225d">int</span> | false
<code>limit</code> | <span style="color: #ed225d">int</span> | false


### Returns

type | is_array | optional
--- | --- | ---
<span style="color: #ed225d">Vote</span> | true | false


### Example

```
curl -X POST --data '{"jsonrpc":"2.0","method":"Explorer.getUnconfirmedVotesByAddress","params":["address: string", "offset: int", "limit: int"],"id":"1"}'
```





## Explorer.getVotesByBlockID

get all votes in a block

### Parameters

name | type | is_array
--- | --- | ---
<code>blkID</code> | <span style="color: #ed225d">string</span> | false
<code>offset</code> | <span style="color: #ed225d">int</span> | false
<code>limit</code> | <span style="color: #ed225d">int</span> | false


### Returns

type | is_array | optional
--- | --- | ---
<span style="color: #ed225d">Vote</span> | true | false


### Example

```
curl -X POST --data '{"jsonrpc":"2.0","method":"Explorer.getVotesByBlockID","params":["blkID: string", "offset: int", "limit: int"],"id":"1"}'
```





## Explorer.getLastExecutionsByRange

get list of executions by start block height, execution offset and limit

### Parameters

name | type | is_array
--- | --- | ---
<code>startBlockHeight</code> | <span style="color: #ed225d">int</span> | false
<code>offset</code> | <span style="color: #ed225d">int</span> | false
<code>limit</code> | <span style="color: #ed225d">int</span> | false


### Returns

type | is_array | optional
--- | --- | ---
<span style="color: #ed225d">Execution</span> | true | false


### Example

```
curl -X POST --data '{"jsonrpc":"2.0","method":"Explorer.getLastExecutionsByRange","params":["startBlockHeight: int", "offset: int", "limit: int"],"id":"1"}'
```





## Explorer.getExecutionByID

get execution from execution id

### Parameters

name | type | is_array
--- | --- | ---
<code>executionID</code> | <span style="color: #ed225d">string</span> | false


### Returns

type | is_array | optional
--- | --- | ---
<span style="color: #ed225d">Execution</span> | false | false


### Example

```
curl -X POST --data '{"jsonrpc":"2.0","method":"Explorer.getExecutionByID","params":["executionID: string"],"id":"1"}'
```





## Explorer.getExecutionsByAddress

get list of executions belonging to an address

### Parameters

name | type | is_array
--- | --- | ---
<code>address</code> | <span style="color: #ed225d">string</span> | false
<code>offset</code> | <span style="color: #ed225d">int</span> | false
<code>limit</code> | <span style="color: #ed225d">int</span> | false


### Returns

type | is_array | optional
--- | --- | ---
<span style="color: #ed225d">Execution</span> | true | false


### Example

```
curl -X POST --data '{"jsonrpc":"2.0","method":"Explorer.getExecutionsByAddress","params":["address: string", "offset: int", "limit: int"],"id":"1"}'
```





## Explorer.getUnconfirmedExecutionsByAddress

get list of unconfirmed executions in actpool belonging to an address

### Parameters

name | type | is_array
--- | --- | ---
<code>address</code> | <span style="color: #ed225d">string</span> | false
<code>offset</code> | <span style="color: #ed225d">int</span> | false
<code>limit</code> | <span style="color: #ed225d">int</span> | false


### Returns

type | is_array | optional
--- | --- | ---
<span style="color: #ed225d">Execution</span> | true | false


### Example

```
curl -X POST --data '{"jsonrpc":"2.0","method":"Explorer.getUnconfirmedExecutionsByAddress","params":["address: string", "offset: int", "limit: int"],"id":"1"}'
```





## Explorer.getExecutionsByBlockID

get all executions in a block

### Parameters

name | type | is_array
--- | --- | ---
<code>blkID</code> | <span style="color: #ed225d">string</span> | false
<code>offset</code> | <span style="color: #ed225d">int</span> | false
<code>limit</code> | <span style="color: #ed225d">int</span> | false


### Returns

type | is_array | optional
--- | --- | ---
<span style="color: #ed225d">Execution</span> | true | false


### Example

```
curl -X POST --data '{"jsonrpc":"2.0","method":"Explorer.getExecutionsByBlockID","params":["blkID: string", "offset: int", "limit: int"],"id":"1"}'
```





## Explorer.getCreateDeposit

get create deposit from id

### Parameters

name | type | is_array
--- | --- | ---
<code>createDepositID</code> | <span style="color: #ed225d">string</span> | false


### Returns

type | is_array | optional
--- | --- | ---
<span style="color: #ed225d">CreateDeposit</span> | false | false


### Example

```
curl -X POST --data '{"jsonrpc":"2.0","method":"Explorer.getCreateDeposit","params":["createDepositID: string"],"id":"1"}'
```





## Explorer.getCreateDepositsByAddress

get list of create deposits belonging to an address

### Parameters

name | type | is_array
--- | --- | ---
<code>address</code> | <span style="color: #ed225d">string</span> | false
<code>offset</code> | <span style="color: #ed225d">int</span> | false
<code>limit</code> | <span style="color: #ed225d">int</span> | false


### Returns

type | is_array | optional
--- | --- | ---
<span style="color: #ed225d">CreateDeposit</span> | true | false


### Example

```
curl -X POST --data '{"jsonrpc":"2.0","method":"Explorer.getCreateDepositsByAddress","params":["address: string", "offset: int", "limit: int"],"id":"1"}'
```





## Explorer.getSettleDeposit

get settle deposit from id

### Parameters

name | type | is_array
--- | --- | ---
<code>settleDepositID</code> | <span style="color: #ed225d">string</span> | false


### Returns

type | is_array | optional
--- | --- | ---
<span style="color: #ed225d">SettleDeposit</span> | false | false


### Example

```
curl -X POST --data '{"jsonrpc":"2.0","method":"Explorer.getSettleDeposit","params":["settleDepositID: string"],"id":"1"}'
```





## Explorer.getSettleDepositsByAddress

get list of settle deposits belonging to an address

### Parameters

name | type | is_array
--- | --- | ---
<code>address</code> | <span style="color: #ed225d">string</span> | false
<code>offset</code> | <span style="color: #ed225d">int</span> | false
<code>limit</code> | <span style="color: #ed225d">int</span> | false


### Returns

type | is_array | optional
--- | --- | ---
<span style="color: #ed225d">SettleDeposit</span> | true | false


### Example

```
curl -X POST --data '{"jsonrpc":"2.0","method":"Explorer.getSettleDepositsByAddress","params":["address: string", "offset: int", "limit: int"],"id":"1"}'
```





## Explorer.getLastBlocksByRange

get list of blocks by block id offset and limit

### Parameters

name | type | is_array
--- | --- | ---
<code>offset</code> | <span style="color: #ed225d">int</span> | false
<code>limit</code> | <span style="color: #ed225d">int</span> | false


### Returns

type | is_array | optional
--- | --- | ---
<span style="color: #ed225d">Block</span> | true | false


### Example

```
curl -X POST --data '{"jsonrpc":"2.0","method":"Explorer.getLastBlocksByRange","params":["offset: int", "limit: int"],"id":"1"}'
```





## Explorer.getBlockByID

get block by block id

### Parameters

name | type | is_array
--- | --- | ---
<code>blkID</code> | <span style="color: #ed225d">string</span> | false


### Returns

type | is_array | optional
--- | --- | ---
<span style="color: #ed225d">Block</span> | false | false


### Example

```
curl -X POST --data '{"jsonrpc":"2.0","method":"Explorer.getBlockByID","params":["blkID: string"],"id":"1"}'
```





## Explorer.getCoinStatistic

get statistic of iotx

### Parameters

<code>[]</code>

### Returns

type | is_array | optional
--- | --- | ---
<span style="color: #ed225d">CoinStatistic</span> | false | false


### Example

```
curl -X POST --data '{"jsonrpc":"2.0","method":"Explorer.getCoinStatistic","params":[],"id":"1"}'
```





## Explorer.getConsensusMetrics

get consensus metrics

### Parameters

<code>[]</code>

### Returns

type | is_array | optional
--- | --- | ---
<span style="color: #ed225d">ConsensusMetrics</span> | false | false


### Example

```
curl -X POST --data '{"jsonrpc":"2.0","method":"Explorer.getConsensusMetrics","params":[],"id":"1"}'
```





## Explorer.getCandidateMetrics

get candidates metrics

### Parameters

<code>[]</code>

### Returns

type | is_array | optional
--- | --- | ---
<span style="color: #ed225d">CandidateMetrics</span> | false | false


### Example

```
curl -X POST --data '{"jsonrpc":"2.0","method":"Explorer.getCandidateMetrics","params":[],"id":"1"}'
```





## Explorer.getCandidateMetricsByHeight

get candidates metrics at given height

### Parameters

name | type | is_array
--- | --- | ---
<code>h</code> | <span style="color: #ed225d">int</span> | false


### Returns

type | is_array | optional
--- | --- | ---
<span style="color: #ed225d">CandidateMetrics</span> | false | false


### Example

```
curl -X POST --data '{"jsonrpc":"2.0","method":"Explorer.getCandidateMetricsByHeight","params":["h: int"],"id":"1"}'
```





## Explorer.sendTransfer

send transfer

### Parameters

name | type | is_array
--- | --- | ---
<code>request</code> | <span style="color: #ed225d">SendTransferRequest</span> | false


### Returns

type | is_array | optional
--- | --- | ---
<span style="color: #ed225d">SendTransferResponse</span> | false | false


### Example

```
curl -X POST --data '{"jsonrpc":"2.0","method":"Explorer.sendTransfer","params":["request: SendTransferRequest"],"id":"1"}'
```





## Explorer.sendVote

send vote

### Parameters

name | type | is_array
--- | --- | ---
<code>request</code> | <span style="color: #ed225d">SendVoteRequest</span> | false


### Returns

type | is_array | optional
--- | --- | ---
<span style="color: #ed225d">SendVoteResponse</span> | false | false


### Example

```
curl -X POST --data '{"jsonrpc":"2.0","method":"Explorer.sendVote","params":["request: SendVoteRequest"],"id":"1"}'
```





## Explorer.sendSmartContract

sendSmartContract

### Parameters

name | type | is_array
--- | --- | ---
<code>request</code> | <span style="color: #ed225d">Execution</span> | false


### Returns

type | is_array | optional
--- | --- | ---
<span style="color: #ed225d">SendSmartContractResponse</span> | false | false


### Example

```
curl -X POST --data '{"jsonrpc":"2.0","method":"Explorer.sendSmartContract","params":["request: Execution"],"id":"1"}'
```





## Explorer.putSubChainBlock

putSubChainBlock

### Parameters

name | type | is_array
--- | --- | ---
<code>request</code> | <span style="color: #ed225d">PutSubChainBlockRequest</span> | false


### Returns

type | is_array | optional
--- | --- | ---
<span style="color: #ed225d">PutSubChainBlockResponse</span> | false | false


### Example

```
curl -X POST --data '{"jsonrpc":"2.0","method":"Explorer.putSubChainBlock","params":["request: PutSubChainBlockRequest"],"id":"1"}'
```





## Explorer.sendAction

sendAction

### Parameters

name | type | is_array
--- | --- | ---
<code>request</code> | <span style="color: #ed225d">SendActionRequest</span> | false


### Returns

type | is_array | optional
--- | --- | ---
<span style="color: #ed225d">SendActionResponse</span> | false | false


### Example

```
curl -X POST --data '{"jsonrpc":"2.0","method":"Explorer.sendAction","params":["request: SendActionRequest"],"id":"1"}'
```





## Explorer.getPeers

get list of peers

### Parameters

<code>[]</code>

### Returns

type | is_array | optional
--- | --- | ---
<span style="color: #ed225d">GetPeersResponse</span> | false | false


### Example

```
curl -X POST --data '{"jsonrpc":"2.0","method":"Explorer.getPeers","params":[],"id":"1"}'
```





## Explorer.getReceiptByExecutionID

get receipt by execution id

### Parameters

name | type | is_array
--- | --- | ---
<code>id</code> | <span style="color: #ed225d">string</span> | false


### Returns

type | is_array | optional
--- | --- | ---
<span style="color: #ed225d">Receipt</span> | false | false


### Example

```
curl -X POST --data '{"jsonrpc":"2.0","method":"Explorer.getReceiptByExecutionID","params":["id: string"],"id":"1"}'
```





## Explorer.getReceiptByActionID

get receipt by action id

### Parameters

name | type | is_array
--- | --- | ---
<code>id</code> | <span style="color: #ed225d">string</span> | false


### Returns

type | is_array | optional
--- | --- | ---
<span style="color: #ed225d">Receipt</span> | false | false


### Example

```
curl -X POST --data '{"jsonrpc":"2.0","method":"Explorer.getReceiptByActionID","params":["id: string"],"id":"1"}'
```





## Explorer.readExecutionState

read execution state

### Parameters

name | type | is_array
--- | --- | ---
<code>request</code> | <span style="color: #ed225d">Execution</span> | false


### Returns

type | is_array | optional
--- | --- | ---
<span style="color: #ed225d">string</span> | false | false


### Example

```
curl -X POST --data '{"jsonrpc":"2.0","method":"Explorer.readExecutionState","params":["request: Execution"],"id":"1"}'
```





## Explorer.getBlockOrActionByHash

get block or action by a hash

### Parameters

name | type | is_array
--- | --- | ---
<code>hashStr</code> | <span style="color: #ed225d">string</span> | false


### Returns

type | is_array | optional
--- | --- | ---
<span style="color: #ed225d">GetBlkOrActResponse</span> | false | false


### Example

```
curl -X POST --data '{"jsonrpc":"2.0","method":"Explorer.getBlockOrActionByHash","params":["hashStr: string"],"id":"1"}'
```





## Explorer.createDeposit

deposit balance from main-chain to sub-chain

### Parameters

name | type | is_array
--- | --- | ---
<code>request</code> | <span style="color: #ed225d">CreateDepositRequest</span> | false


### Returns

type | is_array | optional
--- | --- | ---
<span style="color: #ed225d">CreateDepositResponse</span> | false | false


### Example

```
curl -X POST --data '{"jsonrpc":"2.0","method":"Explorer.createDeposit","params":["request: CreateDepositRequest"],"id":"1"}'
```





## Explorer.getDeposits

get deposits on a sub-chain

### Parameters

name | type | is_array
--- | --- | ---
<code>subChainID</code> | <span style="color: #ed225d">int</span> | false
<code>offset</code> | <span style="color: #ed225d">int</span> | false
<code>limit</code> | <span style="color: #ed225d">int</span> | false


### Returns

type | is_array | optional
--- | --- | ---
<span style="color: #ed225d">Deposit</span> | true | false


### Example

```
curl -X POST --data '{"jsonrpc":"2.0","method":"Explorer.getDeposits","params":["subChainID: int", "offset: int", "limit: int"],"id":"1"}'
```





## Explorer.settleDeposit

settle deposit on sub-chain. This is a sub-chain API

### Parameters

name | type | is_array
--- | --- | ---
<code>request</code> | <span style="color: #ed225d">SettleDepositRequest</span> | false


### Returns

type | is_array | optional
--- | --- | ---
<span style="color: #ed225d">SettleDepositResponse</span> | false | false


### Example

```
curl -X POST --data '{"jsonrpc":"2.0","method":"Explorer.settleDeposit","params":["request: SettleDepositRequest"],"id":"1"}'
```





## Explorer.suggestGasPrice

suggest gas price

### Parameters

<code>[]</code>

### Returns

type | is_array | optional
--- | --- | ---
<span style="color: #ed225d">int</span> | false | false


### Example

```
curl -X POST --data '{"jsonrpc":"2.0","method":"Explorer.suggestGasPrice","params":[],"id":"1"}'
```





## Explorer.estimateGasForTransfer

estimate gas for transfer

### Parameters

name | type | is_array
--- | --- | ---
<code>request</code> | <span style="color: #ed225d">SendTransferRequest</span> | false


### Returns

type | is_array | optional
--- | --- | ---
<span style="color: #ed225d">int</span> | false | false


### Example

```
curl -X POST --data '{"jsonrpc":"2.0","method":"Explorer.estimateGasForTransfer","params":["request: SendTransferRequest"],"id":"1"}'
```





## Explorer.estimateGasForVote

estimate gas for vote

### Parameters

<code>[]</code>

### Returns

type | is_array | optional
--- | --- | ---
<span style="color: #ed225d">int</span> | false | false


### Example

```
curl -X POST --data '{"jsonrpc":"2.0","method":"Explorer.estimateGasForVote","params":[],"id":"1"}'
```





## Explorer.estimateGasForSmartContract

estimate gas for smart contract

### Parameters

name | type | is_array
--- | --- | ---
<code>request</code> | <span style="color: #ed225d">Execution</span> | false


### Returns

type | is_array | optional
--- | --- | ---
<span style="color: #ed225d">int</span> | false | false


### Example

```
curl -X POST --data '{"jsonrpc":"2.0","method":"Explorer.estimateGasForSmartContract","params":["request: Execution"],"id":"1"}'
```





## Explorer.getStateRootHash

get the state root hash of a given block height

### Parameters

name | type | is_array
--- | --- | ---
<code>blockHeight</code> | <span style="color: #ed225d">int</span> | false


### Returns

type | is_array | optional
--- | --- | ---
<span style="color: #ed225d">string</span> | false | false


### Example

```
curl -X POST --data '{"jsonrpc":"2.0","method":"Explorer.getStateRootHash","params":["blockHeight: int"],"id":"1"}'
```



