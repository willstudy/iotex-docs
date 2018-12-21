---
id: version-0.1.6-json-rpc
title: JSON RPC
original_id: json-rpc
---


## Explorer.getBlockchainHeight

get the blockchain tip height

### Parameters

```
[]
```

### Returns

```
{
  "optional": false,
  "is_array": false,
  "type": "int"
}
```

### Example

```
curl -X POST --data '{"jsonrpc":"2.0","method":"Explorer.getBlockchainHeight","params":[],"id":"1"}'
```





## Explorer.getAddressBalance

get the balance of an address

### Parameters

```
[
  {
    "is_array": false,
    "type": "string",
    "name": "address"
  }
]
```

### Returns

```
{
  "optional": false,
  "is_array": false,
  "type": "string"
}
```

### Example

```
curl -X POST --data '{"jsonrpc":"2.0","method":"Explorer.getAddressBalance","params":["address: string"],"id":"1"}'
```





## Explorer.getAddressDetails

get the address detail of an iotex address

### Parameters

```
[
  {
    "is_array": false,
    "type": "string",
    "name": "address"
  }
]
```

### Returns

```
{
  "optional": false,
  "is_array": false,
  "type": "AddressDetails"
}
```

### Example

```
curl -X POST --data '{"jsonrpc":"2.0","method":"Explorer.getAddressDetails","params":["address: string"],"id":"1"}'
```





## Explorer.getLastTransfersByRange

get list of transfers by start block height, transfer offset and limit

### Parameters

```
[
  {
    "is_array": false,
    "type": "int",
    "name": "startBlockHeight"
  },
  {
    "is_array": false,
    "type": "int",
    "name": "offset"
  },
  {
    "is_array": false,
    "type": "int",
    "name": "limit"
  },
  {
    "is_array": false,
    "type": "bool",
    "name": "showCoinBase"
  }
]
```

### Returns

```
{
  "optional": false,
  "is_array": true,
  "type": "Transfer"
}
```

### Example

```
curl -X POST --data '{"jsonrpc":"2.0","method":"Explorer.getLastTransfersByRange","params":["startBlockHeight: int", "offset: int", "limit: int", "showCoinBase: bool"],"id":"1"}'
```





## Explorer.getTransferByID

get transfers from transaction id

### Parameters

```
[
  {
    "is_array": false,
    "type": "string",
    "name": "transferID"
  }
]
```

### Returns

```
{
  "optional": false,
  "is_array": false,
  "type": "Transfer"
}
```

### Example

```
curl -X POST --data '{"jsonrpc":"2.0","method":"Explorer.getTransferByID","params":["transferID: string"],"id":"1"}'
```





## Explorer.getTransfersByAddress

get list of transfers belonging to an address

### Parameters

```
[
  {
    "is_array": false,
    "type": "string",
    "name": "address"
  },
  {
    "is_array": false,
    "type": "int",
    "name": "offset"
  },
  {
    "is_array": false,
    "type": "int",
    "name": "limit"
  }
]
```

### Returns

```
{
  "optional": false,
  "is_array": true,
  "type": "Transfer"
}
```

### Example

```
curl -X POST --data '{"jsonrpc":"2.0","method":"Explorer.getTransfersByAddress","params":["address: string", "offset: int", "limit: int"],"id":"1"}'
```





## Explorer.getUnconfirmedTransfersByAddress

get list of unconfirmed transfers in actpool belonging to an address

### Parameters

```
[
  {
    "is_array": false,
    "type": "string",
    "name": "address"
  },
  {
    "is_array": false,
    "type": "int",
    "name": "offset"
  },
  {
    "is_array": false,
    "type": "int",
    "name": "limit"
  }
]
```

### Returns

```
{
  "optional": false,
  "is_array": true,
  "type": "Transfer"
}
```

### Example

```
curl -X POST --data '{"jsonrpc":"2.0","method":"Explorer.getUnconfirmedTransfersByAddress","params":["address: string", "offset: int", "limit: int"],"id":"1"}'
```





## Explorer.getTransfersByBlockID

get all transfers in a block

### Parameters

```
[
  {
    "is_array": false,
    "type": "string",
    "name": "blkID"
  },
  {
    "is_array": false,
    "type": "int",
    "name": "offset"
  },
  {
    "is_array": false,
    "type": "int",
    "name": "limit"
  }
]
```

### Returns

```
{
  "optional": false,
  "is_array": true,
  "type": "Transfer"
}
```

### Example

```
curl -X POST --data '{"jsonrpc":"2.0","method":"Explorer.getTransfersByBlockID","params":["blkID: string", "offset: int", "limit: int"],"id":"1"}'
```





## Explorer.getLastVotesByRange

get list of votes by start block height, vote offset and limit

### Parameters

```
[
  {
    "is_array": false,
    "type": "int",
    "name": "startBlockHeight"
  },
  {
    "is_array": false,
    "type": "int",
    "name": "offset"
  },
  {
    "is_array": false,
    "type": "int",
    "name": "limit"
  }
]
```

### Returns

```
{
  "optional": false,
  "is_array": true,
  "type": "Vote"
}
```

### Example

```
curl -X POST --data '{"jsonrpc":"2.0","method":"Explorer.getLastVotesByRange","params":["startBlockHeight: int", "offset: int", "limit: int"],"id":"1"}'
```





## Explorer.getVoteByID

get vote from vote id

### Parameters

```
[
  {
    "is_array": false,
    "type": "string",
    "name": "voteID"
  }
]
```

### Returns

```
{
  "optional": false,
  "is_array": false,
  "type": "Vote"
}
```

### Example

```
curl -X POST --data '{"jsonrpc":"2.0","method":"Explorer.getVoteByID","params":["voteID: string"],"id":"1"}'
```





## Explorer.getVotesByAddress

get list of votes belonging to an address

### Parameters

```
[
  {
    "is_array": false,
    "type": "string",
    "name": "address"
  },
  {
    "is_array": false,
    "type": "int",
    "name": "offset"
  },
  {
    "is_array": false,
    "type": "int",
    "name": "limit"
  }
]
```

### Returns

```
{
  "optional": false,
  "is_array": true,
  "type": "Vote"
}
```

### Example

```
curl -X POST --data '{"jsonrpc":"2.0","method":"Explorer.getVotesByAddress","params":["address: string", "offset: int", "limit: int"],"id":"1"}'
```





## Explorer.getUnconfirmedVotesByAddress

get list of unconfirmed votes in actpool belonging to an address

### Parameters

```
[
  {
    "is_array": false,
    "type": "string",
    "name": "address"
  },
  {
    "is_array": false,
    "type": "int",
    "name": "offset"
  },
  {
    "is_array": false,
    "type": "int",
    "name": "limit"
  }
]
```

### Returns

```
{
  "optional": false,
  "is_array": true,
  "type": "Vote"
}
```

### Example

```
curl -X POST --data '{"jsonrpc":"2.0","method":"Explorer.getUnconfirmedVotesByAddress","params":["address: string", "offset: int", "limit: int"],"id":"1"}'
```





## Explorer.getVotesByBlockID

get all votes in a block

### Parameters

```
[
  {
    "is_array": false,
    "type": "string",
    "name": "blkID"
  },
  {
    "is_array": false,
    "type": "int",
    "name": "offset"
  },
  {
    "is_array": false,
    "type": "int",
    "name": "limit"
  }
]
```

### Returns

```
{
  "optional": false,
  "is_array": true,
  "type": "Vote"
}
```

### Example

```
curl -X POST --data '{"jsonrpc":"2.0","method":"Explorer.getVotesByBlockID","params":["blkID: string", "offset: int", "limit: int"],"id":"1"}'
```





## Explorer.getLastExecutionsByRange

get list of executions by start block height, execution offset and limit

### Parameters

```
[
  {
    "is_array": false,
    "type": "int",
    "name": "startBlockHeight"
  },
  {
    "is_array": false,
    "type": "int",
    "name": "offset"
  },
  {
    "is_array": false,
    "type": "int",
    "name": "limit"
  }
]
```

### Returns

```
{
  "optional": false,
  "is_array": true,
  "type": "Execution"
}
```

### Example

```
curl -X POST --data '{"jsonrpc":"2.0","method":"Explorer.getLastExecutionsByRange","params":["startBlockHeight: int", "offset: int", "limit: int"],"id":"1"}'
```





## Explorer.getExecutionByID

get execution from execution id

### Parameters

```
[
  {
    "is_array": false,
    "type": "string",
    "name": "executionID"
  }
]
```

### Returns

```
{
  "optional": false,
  "is_array": false,
  "type": "Execution"
}
```

### Example

```
curl -X POST --data '{"jsonrpc":"2.0","method":"Explorer.getExecutionByID","params":["executionID: string"],"id":"1"}'
```





## Explorer.getExecutionsByAddress

get list of executions belonging to an address

### Parameters

```
[
  {
    "is_array": false,
    "type": "string",
    "name": "address"
  },
  {
    "is_array": false,
    "type": "int",
    "name": "offset"
  },
  {
    "is_array": false,
    "type": "int",
    "name": "limit"
  }
]
```

### Returns

```
{
  "optional": false,
  "is_array": true,
  "type": "Execution"
}
```

### Example

```
curl -X POST --data '{"jsonrpc":"2.0","method":"Explorer.getExecutionsByAddress","params":["address: string", "offset: int", "limit: int"],"id":"1"}'
```





## Explorer.getUnconfirmedExecutionsByAddress

get list of unconfirmed executions in actpool belonging to an address

### Parameters

```
[
  {
    "is_array": false,
    "type": "string",
    "name": "address"
  },
  {
    "is_array": false,
    "type": "int",
    "name": "offset"
  },
  {
    "is_array": false,
    "type": "int",
    "name": "limit"
  }
]
```

### Returns

```
{
  "optional": false,
  "is_array": true,
  "type": "Execution"
}
```

### Example

```
curl -X POST --data '{"jsonrpc":"2.0","method":"Explorer.getUnconfirmedExecutionsByAddress","params":["address: string", "offset: int", "limit: int"],"id":"1"}'
```





## Explorer.getExecutionsByBlockID

get all executions in a block

### Parameters

```
[
  {
    "is_array": false,
    "type": "string",
    "name": "blkID"
  },
  {
    "is_array": false,
    "type": "int",
    "name": "offset"
  },
  {
    "is_array": false,
    "type": "int",
    "name": "limit"
  }
]
```

### Returns

```
{
  "optional": false,
  "is_array": true,
  "type": "Execution"
}
```

### Example

```
curl -X POST --data '{"jsonrpc":"2.0","method":"Explorer.getExecutionsByBlockID","params":["blkID: string", "offset: int", "limit: int"],"id":"1"}'
```





## Explorer.getCreateDeposit

get create deposit from id

### Parameters

```
[
  {
    "is_array": false,
    "type": "string",
    "name": "createDepositID"
  }
]
```

### Returns

```
{
  "optional": false,
  "is_array": false,
  "type": "CreateDeposit"
}
```

### Example

```
curl -X POST --data '{"jsonrpc":"2.0","method":"Explorer.getCreateDeposit","params":["createDepositID: string"],"id":"1"}'
```





## Explorer.getCreateDepositsByAddress

get list of create deposits belonging to an address

### Parameters

```
[
  {
    "is_array": false,
    "type": "string",
    "name": "address"
  },
  {
    "is_array": false,
    "type": "int",
    "name": "offset"
  },
  {
    "is_array": false,
    "type": "int",
    "name": "limit"
  }
]
```

### Returns

```
{
  "optional": false,
  "is_array": true,
  "type": "CreateDeposit"
}
```

### Example

```
curl -X POST --data '{"jsonrpc":"2.0","method":"Explorer.getCreateDepositsByAddress","params":["address: string", "offset: int", "limit: int"],"id":"1"}'
```





## Explorer.getSettleDeposit

get settle deposit from id

### Parameters

```
[
  {
    "is_array": false,
    "type": "string",
    "name": "settleDepositID"
  }
]
```

### Returns

```
{
  "optional": false,
  "is_array": false,
  "type": "SettleDeposit"
}
```

### Example

```
curl -X POST --data '{"jsonrpc":"2.0","method":"Explorer.getSettleDeposit","params":["settleDepositID: string"],"id":"1"}'
```





## Explorer.getSettleDepositsByAddress

get list of settle deposits belonging to an address

### Parameters

```
[
  {
    "is_array": false,
    "type": "string",
    "name": "address"
  },
  {
    "is_array": false,
    "type": "int",
    "name": "offset"
  },
  {
    "is_array": false,
    "type": "int",
    "name": "limit"
  }
]
```

### Returns

```
{
  "optional": false,
  "is_array": true,
  "type": "SettleDeposit"
}
```

### Example

```
curl -X POST --data '{"jsonrpc":"2.0","method":"Explorer.getSettleDepositsByAddress","params":["address: string", "offset: int", "limit: int"],"id":"1"}'
```





## Explorer.getLastBlocksByRange

get list of blocks by block id offset and limit

### Parameters

```
[
  {
    "is_array": false,
    "type": "int",
    "name": "offset"
  },
  {
    "is_array": false,
    "type": "int",
    "name": "limit"
  }
]
```

### Returns

```
{
  "optional": false,
  "is_array": true,
  "type": "Block"
}
```

### Example

```
curl -X POST --data '{"jsonrpc":"2.0","method":"Explorer.getLastBlocksByRange","params":["offset: int", "limit: int"],"id":"1"}'
```





## Explorer.getBlockByID

get block by block id

### Parameters

```
[
  {
    "is_array": false,
    "type": "string",
    "name": "blkID"
  }
]
```

### Returns

```
{
  "optional": false,
  "is_array": false,
  "type": "Block"
}
```

### Example

```
curl -X POST --data '{"jsonrpc":"2.0","method":"Explorer.getBlockByID","params":["blkID: string"],"id":"1"}'
```





## Explorer.getCoinStatistic

get statistic of iotx

### Parameters

```
[]
```

### Returns

```
{
  "optional": false,
  "is_array": false,
  "type": "CoinStatistic"
}
```

### Example

```
curl -X POST --data '{"jsonrpc":"2.0","method":"Explorer.getCoinStatistic","params":[],"id":"1"}'
```





## Explorer.getConsensusMetrics

get consensus metrics

### Parameters

```
[]
```

### Returns

```
{
  "optional": false,
  "is_array": false,
  "type": "ConsensusMetrics"
}
```

### Example

```
curl -X POST --data '{"jsonrpc":"2.0","method":"Explorer.getConsensusMetrics","params":[],"id":"1"}'
```





## Explorer.getCandidateMetrics

get candidates metrics

### Parameters

```
[]
```

### Returns

```
{
  "optional": false,
  "is_array": false,
  "type": "CandidateMetrics"
}
```

### Example

```
curl -X POST --data '{"jsonrpc":"2.0","method":"Explorer.getCandidateMetrics","params":[],"id":"1"}'
```





## Explorer.getCandidateMetricsByHeight

get candidates metrics at given height

### Parameters

```
[
  {
    "is_array": false,
    "type": "int",
    "name": "h"
  }
]
```

### Returns

```
{
  "optional": false,
  "is_array": false,
  "type": "CandidateMetrics"
}
```

### Example

```
curl -X POST --data '{"jsonrpc":"2.0","method":"Explorer.getCandidateMetricsByHeight","params":["h: int"],"id":"1"}'
```





## Explorer.sendTransfer

send transfer

### Parameters

```
[
  {
    "is_array": false,
    "type": "SendTransferRequest",
    "name": "request"
  }
]
```

### Returns

```
{
  "optional": false,
  "is_array": false,
  "type": "SendTransferResponse"
}
```

### Example

```
curl -X POST --data '{"jsonrpc":"2.0","method":"Explorer.sendTransfer","params":["request: SendTransferRequest"],"id":"1"}'
```





## Explorer.sendVote

send vote

### Parameters

```
[
  {
    "is_array": false,
    "type": "SendVoteRequest",
    "name": "request"
  }
]
```

### Returns

```
{
  "optional": false,
  "is_array": false,
  "type": "SendVoteResponse"
}
```

### Example

```
curl -X POST --data '{"jsonrpc":"2.0","method":"Explorer.sendVote","params":["request: SendVoteRequest"],"id":"1"}'
```





## Explorer.sendSmartContract

sendSmartContract

### Parameters

```
[
  {
    "is_array": false,
    "type": "Execution",
    "name": "request"
  }
]
```

### Returns

```
{
  "optional": false,
  "is_array": false,
  "type": "SendSmartContractResponse"
}
```

### Example

```
curl -X POST --data '{"jsonrpc":"2.0","method":"Explorer.sendSmartContract","params":["request: Execution"],"id":"1"}'
```





## Explorer.putSubChainBlock

putSubChainBlock

### Parameters

```
[
  {
    "is_array": false,
    "type": "PutSubChainBlockRequest",
    "name": "request"
  }
]
```

### Returns

```
{
  "optional": false,
  "is_array": false,
  "type": "PutSubChainBlockResponse"
}
```

### Example

```
curl -X POST --data '{"jsonrpc":"2.0","method":"Explorer.putSubChainBlock","params":["request: PutSubChainBlockRequest"],"id":"1"}'
```





## Explorer.sendAction

sendAction

### Parameters

```
[
  {
    "is_array": false,
    "type": "SendActionRequest",
    "name": "request"
  }
]
```

### Returns

```
{
  "optional": false,
  "is_array": false,
  "type": "SendActionResponse"
}
```

### Example

```
curl -X POST --data '{"jsonrpc":"2.0","method":"Explorer.sendAction","params":["request: SendActionRequest"],"id":"1"}'
```





## Explorer.getPeers

get list of peers

### Parameters

```
[]
```

### Returns

```
{
  "optional": false,
  "is_array": false,
  "type": "GetPeersResponse"
}
```

### Example

```
curl -X POST --data '{"jsonrpc":"2.0","method":"Explorer.getPeers","params":[],"id":"1"}'
```





## Explorer.getReceiptByExecutionID

get receipt by execution id

### Parameters

```
[
  {
    "is_array": false,
    "type": "string",
    "name": "id"
  }
]
```

### Returns

```
{
  "optional": false,
  "is_array": false,
  "type": "Receipt"
}
```

### Example

```
curl -X POST --data '{"jsonrpc":"2.0","method":"Explorer.getReceiptByExecutionID","params":["id: string"],"id":"1"}'
```





## Explorer.readExecutionState

read execution state

### Parameters

```
[
  {
    "is_array": false,
    "type": "Execution",
    "name": "request"
  }
]
```

### Returns

```
{
  "optional": false,
  "is_array": false,
  "type": "string"
}
```

### Example

```
curl -X POST --data '{"jsonrpc":"2.0","method":"Explorer.readExecutionState","params":["request: Execution"],"id":"1"}'
```





## Explorer.getBlockOrActionByHash

get block or action by a hash

### Parameters

```
[
  {
    "is_array": false,
    "type": "string",
    "name": "hashStr"
  }
]
```

### Returns

```
{
  "optional": false,
  "is_array": false,
  "type": "GetBlkOrActResponse"
}
```

### Example

```
curl -X POST --data '{"jsonrpc":"2.0","method":"Explorer.getBlockOrActionByHash","params":["hashStr: string"],"id":"1"}'
```





## Explorer.createDeposit

deposit balance from main-chain to sub-chain

### Parameters

```
[
  {
    "is_array": false,
    "type": "CreateDepositRequest",
    "name": "request"
  }
]
```

### Returns

```
{
  "optional": false,
  "is_array": false,
  "type": "CreateDepositResponse"
}
```

### Example

```
curl -X POST --data '{"jsonrpc":"2.0","method":"Explorer.createDeposit","params":["request: CreateDepositRequest"],"id":"1"}'
```





## Explorer.getDeposits

get deposits on a sub-chain

### Parameters

```
[
  {
    "is_array": false,
    "type": "int",
    "name": "subChainID"
  },
  {
    "is_array": false,
    "type": "int",
    "name": "offset"
  },
  {
    "is_array": false,
    "type": "int",
    "name": "limit"
  }
]
```

### Returns

```
{
  "optional": false,
  "is_array": true,
  "type": "Deposit"
}
```

### Example

```
curl -X POST --data '{"jsonrpc":"2.0","method":"Explorer.getDeposits","params":["subChainID: int", "offset: int", "limit: int"],"id":"1"}'
```





## Explorer.settleDeposit

settle deposit on sub-chain. This is a sub-chain API

### Parameters

```
[
  {
    "is_array": false,
    "type": "SettleDepositRequest",
    "name": "request"
  }
]
```

### Returns

```
{
  "optional": false,
  "is_array": false,
  "type": "SettleDepositResponse"
}
```

### Example

```
curl -X POST --data '{"jsonrpc":"2.0","method":"Explorer.settleDeposit","params":["request: SettleDepositRequest"],"id":"1"}'
```





## Explorer.suggestGasPrice

suggest gas price

### Parameters

```
[]
```

### Returns

```
{
  "optional": false,
  "is_array": false,
  "type": "int"
}
```

### Example

```
curl -X POST --data '{"jsonrpc":"2.0","method":"Explorer.suggestGasPrice","params":[],"id":"1"}'
```





## Explorer.estimateGasForTransfer

estimate gas for transfer

### Parameters

```
[
  {
    "is_array": false,
    "type": "SendTransferRequest",
    "name": "request"
  }
]
```

### Returns

```
{
  "optional": false,
  "is_array": false,
  "type": "int"
}
```

### Example

```
curl -X POST --data '{"jsonrpc":"2.0","method":"Explorer.estimateGasForTransfer","params":["request: SendTransferRequest"],"id":"1"}'
```





## Explorer.estimateGasForVote

estimate gas for vote

### Parameters

```
[]
```

### Returns

```
{
  "optional": false,
  "is_array": false,
  "type": "int"
}
```

### Example

```
curl -X POST --data '{"jsonrpc":"2.0","method":"Explorer.estimateGasForVote","params":[],"id":"1"}'
```





## Explorer.estimateGasForSmartContract

estimate gas for smart contract

### Parameters

```
[
  {
    "is_array": false,
    "type": "Execution",
    "name": "request"
  }
]
```

### Returns

```
{
  "optional": false,
  "is_array": false,
  "type": "int"
}
```

### Example

```
curl -X POST --data '{"jsonrpc":"2.0","method":"Explorer.estimateGasForSmartContract","params":["request: Execution"],"id":"1"}'
```



