---
id: guides
title: Get Started
---

## Introduction

Founded as an open-source project in 2017, IoTeX is building the world's leading auto-scalable and privacy-centric blockchain platform for the Internet of Things (IoT). Our mission is to build a decentralized trust fabric for the era of collaboration and data exchange among devices, applications and people. We are developing several innovative technologies in-house, including the blockchain-in-blockchain architecture for heterogeneous computing, fast and robust Roll-DPoS consensus scheme, and efficient trusted computing protocols. More details can be found [here](https://iotex.io/academics). IoTeX core team is continuously working hard to bring the community more cool features.

### Grand Design

Our long-term design employs Separation of Powers (a term coined by Charles-Louis de Secondat which states that political authority should be divided into legislative, executive and judicial powers).
![IoTeX Rootchain Architecture](https://cdn-images-1.medium.com/max/2600/1*D6GiPlh9TdikW82c8j1jrA.png)

* Governance layer, instantiated by the Gravity Chain is the layer that acts as a decentralized government for the IoTeX network. It uses a liveness-oriented consensus scheme (e.g., PoS variant) to facilitate tasks such as staking, voting, slashing, protocol-related proposals, and more. Will be launched in Q3/Q4 2019.
* Orchestration layer, instantiated by the Root Chain, is the general manager and coordinator for all subchains. It is powered by our safety-oriented Roll-DPoS consensus mechanism and aims for high throughput and reliability. Will be launched in Q1 2019 (a.k.a, Mainnet Alpha).
* Operational layer, instantiated by various subchains, is the concrete unit that handles business logic related to specific use cases/applications. In our design, subchains share the same pool of Delegates as the root chain, so anyone can spin up a subchain as effortlessly and securely as spinning up an EC2 instance on AWS Cloud. The first IoTeX subchain is expected to be launched in Q2/Q3 2019 focusing on privacy.
* Execution layer, is an optional layer for specific subchains to offload concerete computation tasks to.

### Root Chain

The root chain will be launched in Q1 2019 (a.k.a, Mainnet Alpha), which is consisted of the four layered components:
* Networking layer enables the peer-to-peer communication between IoTex nodes, and provide blockchain services (through [grpc](https://grpc.io/)) to other applications and users
* Consensus layer runs Roll-DPoS to select the active block producers among a pool of block producer candidates (who are elected via staking and voting), using a decentralized randomized algorithm (DKG + BLS).
* State transition layer is composed of five subprotocols and is responsible for transiting the states of the blockchain from one to the other.
* Programing layer implements the business logics for state transition. Currently it supports Ethereum virtual machine (EVM) with smart contracts written in Solidity. Developers could seamlessly port existing DApps onto it.

![IoTeX Rootchain Architecture](https://cdn-images-1.medium.com/max/2000/0*cPrsvVa1wIE0cqnS)

### Subprotocols and Actions

The state transition layer of IoTex root chain is flexible enough that any subprotocol can be plugged in without hustling.
* Account subprotocol provides the functionality for bookkeeping balances of accounts living on this blockchain.
* Execution subprotocol manages the execution of smart contracts and roll forward/back of the states.
* Poll subprotocol syncs with our staking/voting contracts living on Ethereum (which plays the role of Gravity chain before its ready), and instructs the delegates promotion/demotion on IoTeX root chain.
* Rewarding subprotocol is responsible for distributing block reward and epoch reward to eligible delegates and candidates.
* Multichain subprotocol manages sub-chain management and cross-chain communication which is a work-in-progress.

In the IoTeX network, transactions (the atomic operation unit to interact with the blockchain data) are referred to as "actions", and there are five types of actions corresponding to the five subprotocols as described. More information can be found [here](https://github.com/iotexproject/iotex-core/blob/master/proto/types/action.proto).


## Build and Run

The simplest way to get started with  IoTeX software package is to run it in stand-alone mode for demonstration and testing purposes. "Stand-alone" indicates a single node comprises the entire blockchain by itself, which generates new block, validates the block, and adds the block to the blockchain. This simple mode allows user to quickly launch and test a blockchain with a single computer/node, without requiring much hardware resources.

### From the source
1. setup golang environment, e.g., [on Linux](https://medium.com/@RidhamTarpara/install-go-1-11-on-ubuntu-18-04-16-04-lts-8c098c503c5f), [on MacOS](https://medium.com/golang-learn/quick-go-setup-guide-on-mac-os-x-956b327222b8)
2. ```git clone git@github.com:iotexproject/iotex-core.git```
3. ```make run```

### Use docker image
1. Install docker on your host machine at https://docs.docker.com/install/. Once docker is properly installed and started, download the IoTeX docker image: `docker pull iotex/iotex-core:latest`

2. Download the config file config_delegate.yaml from [iotex-core](https://github.com/iotexproject/iotex-core). Open the file and change certain parameters of the stand-alone node as you need. For instance, blockCreationInterval specifies the amount of time it takes (in seconds) to produce next block. Change it to a larger value if you want block producing at a slower pace.

3. ```sudo docker run -d -p 30100:14004 --mount type=bind,source=$PWD/config_delegate.yaml,target=/etc/iotex/config_local_delegate.yaml iotex/iotex-core:testnet iotex-server -config-path=/etc/iotex/config_local_delegate.yaml```


## Interact with Root Chain

There are two ways to interact with IoTeX root chain -- using CLI (command-line interface) and using
explorer 2.0. Both of which are built upon the APIs defined [here](https://github.com/iotexproject/iotex-core/blob/master/api/api.go).

### CLI (command-line interface)
ioctl is a command-line interface for interacting with IoTeX blockchains.
```
Usage:
  ioctl [command]

Available Commands:
  account     Deal with accounts of IoTeX blockchain
  action      Deal with actions of IoTeX blockchain
  bc          Deal with block chain of IoTeX blockchain
  help        Help about any command
  node        Deal with nodes of IoTeX blockchain
  version     Print the version number of ioctl
  wallet      Manage accounts of IoTeX blockchain

Flags:
  -h, --help   help for ioctl
```

#### Install
```
curl https://raw.githubusercontent.com/iotexproject/iotex-core/master/install-cli.sh | sh
```

#### Examples
##### Version
```
➜  ioctl git:(ioctl) ✗ ./ioctl version
v0.1
```
##### Set Endpoint
```
➜  ioctl git:(ioctl) ✗ ./ioctl config set endpoint 35.230.103.170:10000
endpoint is set to 35.230.103.170:10000
```
##### Get Wallet Directory
```
➜  ioctl git:(ioctl) ✗ ./ioctl config get wallet
/Users/frank/.config/ioctl/default
```

##### Create An Account
```
➜ ioctl git:(ioctl) ✗ ./ioctl account create
{"Address": "io180ls3vq360mw9q6m7nxudh0hl44cv9qr27rjhj", "PrivateKey": "3e7f689e1f270c97aef283bc621114fbef19076f25a0873a5cfb94fc4dc75c93", "PublicKey": "04e4db1786a5fe130f48c6128907e86084fa6a33a2f428423b502ced24f3addae56711d025fc28f5a75fd5efb7ce8aea6685b337d07770c3ce08bce4cd03169b83"}
```

##### Create An Account Into Wallet
```
➜  ioctl git:(ioctl) ✗ ./ioctl account createadd frank
#frank: Set password
#frank: Enter password again
New account "frank" is created.
Please Keep your password, or your will lose your private key.
```

##### List Accounts
```
➜  ioctl git:(ioctl) ✗ ./ioctl account list
name: a, address:io1znka733xefxjjw2wqddegplwtefun0mfdmz7dw
name: boss, address:io1ed52svvdun2qv8sf2m0xnynuxfaulv6jlww7ur
name: frank, address:io18jaldgzc8wlyfnzamgas62yu3kg5nw527czg37
```
##### Query Balance
```
➜  ioctl git:(ioctl) ✗ ./ioctl account balance io18jaldgzc8wlyfnzamgas62yu3kg5nw527czg37
io18jaldgzc8wlyfnzamgas62yu3kg5nw527czg37: 0.0 IOTX
```
```
➜  ioctl git:(ioctl) ✗ ./ioctl account balance boss
io1ed52svvdun2qv8sf2m0xnynuxfaulv6jlww7ur: 100000000.0 IOTX
```
##### Transfer Coins
```
➜ ioctl git:(ioctl) ✗ ./ioctl action transfer fake 123132123 ILILILILLIL -s boss -l 40000 -p 765
Enter password #boss:
Action has been sent to blockchain.
Wait for several seconds and query this action by hash:
6aa1a7c0c33e003f2354e99e9836337e718bd4d99306108bc47bd993b1d713bc
```

##### Deploy Contract
```
➜  ioctl git:(ioctl) ✗ ./ioctl action deploy  -b 608060405234801561001057600080fd5b5060df8061001f6000396000f3006080604052600436106049576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff16806360fe47b114604e5780636d4ce63c146078575b600080fd5b348015605957600080fd5b5060766004803603810190808035906020019092919050505060a0565b005b348015608357600080fd5b50608a60aa565b6040518082815260200191505060405180910390f35b8060008190555050565b600080549050905600a165627a7a7230582009e6d7025fff5ff3ba4cf7ba6b842526416df976e012a516f37e397607c1f2360029 -l 50000 -p 1 -s boss
Enter password #boss:

senderAddress: io1ed52svvdun2qv8sf2m0xnynuxfaulv6jlww7ur
version: 1
nonce: 1
gasLimit: 50000
gasPrice: 1000000000000
execution: <
  contract: 
  amount: 0
  data: 608060405234801561001057600080fd5b5060df8061001f6000396000f3006080604052600436106049576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff16806360fe47b114604e5780636d4ce63c146078575b600080fd5b348015605957600080fd5b5060766004803603810190808035906020019092919050505060a0565b005b348015608357600080fd5b50608a60aa565b6040518082815260200191505060405180910390f35b8060008190555050565b600080549050905600a165627a7a7230582009e6d7025fff5ff3ba4cf7ba6b842526416df976e012a516f37e397607c1f2360029
>
senderPubKey: 04b3fe4456876ca4c904c52dc3203e06651924d6cbd5e9f545ce990ea1289f3b8ddaff3b7e104803187f87b1e375076285e7137052260b14f2f33229a671a39a0c
signature: f8c53be5247e2f42bfc8055a82ce52f9cf210405e3051463bbabb1396cbba18c5566cd1d6413f41630f34505afaec54bc5d32b2f3ae4c263c86fbc9750bb358f01

Please confirm your action.
Type 'YES' to continue, quit for anything else.
yes

Action has been sent to blockchain.
Wait for several seconds and query this action by hash:
0dd1a84dbae83d1c2d33f72c0c91127c1bbc65ef8a316a438f5ab0efaaf44f27
```

##### Invoke Contract
```
➜  ioctl git:(ioctl) ✗ ./ioctl action invoke io1vqzcl56vlfspyaadyxhqy07jrmalx73vdaklzn 122 -s boss -b 60fe47b10000000000000000000000000000000000000000000000000000000000000001 -l 90000 -p 3
Enter password #boss:

senderAddress: io1ed52svvdun2qv8sf2m0xnynuxfaulv6jlww7ur
version: 1
nonce: 2
gasLimit: 90000
gasPrice: 3000000000000
execution: <
  contract: io1vqzcl56vlfspyaadyxhqy07jrmalx73vdaklzn
  amount: 122000000000000000000
  data: 60fe47b10000000000000000000000000000000000000000000000000000000000000001
>
senderPubKey: 04b3fe4456876ca4c904c52dc3203e06651924d6cbd5e9f545ce990ea1289f3b8ddaff3b7e104803187f87b1e375076285e7137052260b14f2f33229a671a39a0c
signature: bde6509fadfe80b707ef80e24041b4cfe7bf583c7d89a0649027090c191918b217ffae5faf1dd5f2d9e6d05f8721c8ff7a6b3b5cffb64610d3bad71c9c55e47001

Please confirm your action.
Type 'YES' to continue, quit for anything else.
yes

Action has been sent to blockchain.
Wait for several seconds and query this action by hash:
58fc6465bd3b7e33b1508064b0342dc786247b4e18859be72fea57c993dc4950
```

##### Query Action
```
➜ ioctl git:(ioctl) ✗ ./ioctl action hash 6aa1a7c0c33e003f2354e99e9836337e718bd4d99306108bc47bd993b1d713bc
senderAddress: io1llupp3n8q5x8usnr5w08j6hc6hn55x64l46rr7
version: 1
nonce: 1
gasLimit: 40000
gasPrice: "765"
transfer: <
amount: "123132123"
recipient: "io1xje007qlk8apvg3y5ps4lr3y7ke8zy5vrpgsgf"
payload: "ILILILILLIL"

senderPubKey: 04bc3a3123a0d72e1e622ec1a51087ef3b15a9d6db0f924c0fd8b4958653ff7608194321d1fd90c0c949b05b6b911d8d7e9aaadbe497e696367c19780a016ce440
signature: 1a4576b728c8b5cb2aa669502c6fd1d843e96bd70d6a3cf7dfa207bb1450b0c96bceded48b4a78a469731eae92d53dbc1ae05dca246983ec3235c844633798d500
```

##### Query Blockchain Height
```
➜  ioctl git:(ioctl) ✗ ./ioctl bc height
9051
```

##### Query Delegates
```
➜  ioctl git:(ioctl) ✗ ./ioctl node delegate
blockProducers: "io10zzw958qc6e8lxm5ptv0upxmg4ud65gyfj4xc0"
blockProducers: "io1qy6r2hlx0vj6z88ks6wnev82caqkp7r79kgvz2"
...
```

##### Query Productivity
```
➜  ioctl git:(ioctl) ✗ ./ioctl node productivity
io1959ykdhkene09at5nfl42a7xjwf5wgplpg7eh9: 7 (produced) / 167 (total of epoch 26)
io1m8rge0h4xvmfzkc4yup766slcvn5cwymqeenpe: 7 (produced) / 167 (total of epoch 26)
...
```
```
➜  ioctl git:(ioctl) ✗ ./ioctl node productivity io1j07xpufsj03sc0dg020jahacx2pnt6m8cdl6qt -e 25
io1j07xpufsj03sc0dg020jahacx2pnt6m8cdl6qt: 15 (produced) / 360 (total of epoch 25)
```

### Explorer 2.0
Work-in-progress

### API 2.0
#### GetAccount
```
Usage:
  Get Account Details
Request:
  Address: Account Encoded Address
Response:
  AccountMeta: Account Metadata
```  

#### GetActions
```
Usage:
  Get Actions By Index
Request:
  Start: Start Index of Actions
  Count: Number of Actions
Response:
  Actions: List of Actions
```

#### GetActions
```
Usage:
  Get Action By Action Hash
Request:
  Action Hash: Hash of Action
Response:
  Actions: Action
```  

#### GetActions
```
Usage:
  Get Actions By Address
Request:
  Address: Encoded Address
  Start: Start Index of Actions
  Count: Number of Actions
Resposne:
  Actions: List of Actions
```

#### GetActions
```
Usage:
  Get Unconfirmed Actions By Address
Request:
  Address: Encoded Address
  Start: Start Index of Unconfirmed Actions
  Count: Number of Unconfirmed Actions
Resposne:
  Actions: List of Actions
```

#### GetActions
```
Usage:
  Get Actions By Block
Request:
  BlkHash: Block Hash
  Start: Start Index of Actions
  Count: Number of Actions
Resposne:
  Actions: List of Actions
```

#### GetBlockMetas
```
Usage:
  Get Block Metadatas By Index
Request:
  Start: Start Index of Blocks
  Count: Number of Blocks
Response:
  BlkMetas: List of Block Metadatas
```  
    
#### GetBlockMetas
```
Usage:
  Get Block Metadata By Block Hash
Request:
  BlkHash: Block Hash
Response:
  BlkMetas: Block Metadata
```

#### GetChainMeta
```
Usage:
  Get Blockchain
Request:
  N/A
Response:
  ChainMeta: Blockchain Metadata
```

#### SendAction
```
Usage:
  Send Action
Request:
  Action: Action
Response:
  N/A
```
#### GetReceiptByAction
```
Usage:
  Get Action Receipt By Action Hash
Request:
  ActionHash: Action Hash
Response:
  Receipt: Action Receipt
```

#### ReadContract
```
Usage:
  Read Contract State
Request:
  Action: Action (Must Be An Execution)
Response:
  Data: Return Value in Execution Receipt
```

#### ReadState
```
Usage:
  Read State on Blockchain
Request:
  ProtocolID: Protocol ID
  MethodName: Method To Be Invoked To Read State
  Arguments: List of Method Arguments
Response:
  Data: State Result
```

#### SuggestGasPrice
```
Usage:
  Get Suggested Gas Price
Request:
  N/A
Response:
  GasPrice: Gas Price
```

#### EstimateGasForAction
```
Usage:
  Get Estimated Gas For Action
Request:
  Action: Action
Response:
  Gas: Gas
```

#### GetProductivity
```
Usage:
  Get Block Producers' Productivity Given Epoch Number
Request:
  EpochNumber: Epoch Number
Response:
  TotalBlks: Number of Total Blocks
  BlksPerDelegate: Number of blocks Produced By Each Delegate
```  
  
  
  
  

## Testnet 2.0


The IoTeX Testnet is now fully open for community and developers! Join our Testnet and interact with IoTeX network today!

### Set up the node
Our complete software is packaged in the form of a docker image plus a config file for the convenience of set-up and deployment. You can easily set up and run a node by following instructions at https://github.com/iotexproject/iotex-testnet.

As of now, your node will be join as a fullnode to IoTeX network. Once we open the staking/voting on the testnet, you could promote your fullnode to a delegate and participate in block production. Expect that in the next few weeks.

### Talk to us
If you encounter any technical problem when connect to the testnet, please do not hesitate to contact us via [gitter](https://gitter.im/iotex-dev-community/Lobby). In addition to this, please file issues under https://github.com/iotexproject/iotex-core/issues and we will investigate.


## Write a Smart Contract

TBD

## Glossary


- Delegate: the blockchain node which is elected to propose and validate new blocks, a.k.a. block producer.

- [Solidity](https://en.wikipedia.org/wiki/Solidity): the contract oriented programming language.

- Epoch: an epoch is composed for 8640 blocks which is responsible by the same group of delegates.

- Block period: the interval in seconds that blocks are produced. During the launch of the mainnet, the block period is 10 seconds, which will be reduced as the protocol gets stabilized.
