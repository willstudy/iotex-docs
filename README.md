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


## CLI (command-line interface)
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

### Install Release Build
```
curl https://raw.githubusercontent.com/iotexproject/iotex-core/master/install-cli.sh | sh
```

### Install Latest/unstable Build
```
curl https://raw.githubusercontent.com/iotexproject/iotex-core/master/install-cli.sh | sh -s "unstable"
```

### Usage
#### Set Endpoint
```
➜  ioctl config set endpoint api.testnet.iotex.one:80
endpoint is set to api.testnet.iotex.one:80
```

#### Get Wallet Directory
```
➜  ioctl config get wallet
/Users/IoTeX/.config/ioctl/default
```

#### Version
```
→  ioctl version
Client:
packageVersion:"snapshot-v0.6.0-71-gaec09136" packageCommitID:"aec091362222f3d552c546528c4fb61f075506d3" gitStatus:"clean" goVersion:"go version go1.11.5 darwin/amd64" buidTime:"2019-03-23-PDT/16:04:18"

Server: api.testnet.iotex.one:80
packageVersion:"v0.5.0-rc5-hotfix2" packageCommitID:"8f8f8b5a69a0e3897c34d591cd225ce31c946a9a" gitStatus:"clean" goVersion:"go version go1.11.5 linux/amd64" buidTime:"2019-03-22-UTC/22:16:52"
```

#### Create Accounts
```
➜  ioctl account create
{"Address": "io1tuc78c48hgezh5fxvszlp87qpuglndz7qu0hr2", "PrivateKey": "dc372db0fd7c667723b516a7efd85ec62b9e15a05541df861ff234ebc719bb70", "PublicKey": "0413c22f20043de0a4d8a6bf8359b7c08f15318766a65eb8910a6fb01dd83294ea280e4a0c36f106d0919417a372244392766dd94a1885318591f9e3e6d88482e5"}
```
```
➜  ioctl account create -n 3
{"Address": "io1nktp9dcn87rvvzge586hyf565q9j2hl0ah53t7", "PrivateKey": "8a29f18c5e4da05ab422b8eea4c0e15a74ea7dc83c652514986fdda511c0d116", "PublicKey": "04884f0fb25ed015655571ed73780a7e05c15a88a54184d8c70b719e731b89af00be43ae7a39c45ecd53eb0768d080a311d6fa59675b376b240fad17d082472ac4"}
{"Address": "io1a0rlvjxplghfkepadm6hs7jpurvwr3x0z6ypz2", "PrivateKey": "5723d52ac1066a5b3f9a33d646c94a4897a1c9ef0a062a0049382e95e95e4cf1", "PublicKey": "043cb6e513efb473ddc0ed749ce91f709a955efadfad474bcdd0efdbcfd74b0d01c7f3c3288c36c59fb6fbd9288c5fb7d5c1d2353be6614c7975ba9cbfc4a699d2"}
{"Address": "io1rscvduyau59mvnxjjuywez3dyju3wqgcgqendt", "PrivateKey": "75d54d4fb01cf02161429dbced5446a5334167b32bb31dd90c161cb7a74b5160", "PublicKey": "04eeff41a73c0ae9073b8e3f03118fca822516ec5fdd7a9f0cd469e3e26b539a2bf772be9284d1acf9de7e6895bb7bc4060255fd960883a5af10cda133eb63b115"}
```

#### Create An Account Into Wallet
```
➜  ioctl account createadd IOsenser
#IOsenser: Set password
#IOsenser: Enter password again
New account "IOsenser" is created.
Please Keep your password, or your will lose your private key.
```

#### Import An Account With Private Key
```
➜  ioctl account import whale
#whale: Enter your private key, which will not be exposed on the screen.
#whale: Set password
#whale: Enter password again
New account #whale is created. Keep your password, or your will lose your private key.
```

#### List Accounts
```
➜  ioctl account list
io1r2r0um9dw35922tptkuphseq43hq2knk3fjrlt - IOsenser
io17laykjt9qgafuxj58fuspuxzlv6y4qgxf82vnm - frank
io1l3wc0smczyay8xq747e2hw63mzg3ctp6uf8wsg
io14gnqxf9dpkn05g337rl7eyt2nxasphf5m6n0rd - whale
```

#### Alias Address
```
➜  ioctl alias set test io1l3wc0smczyay8xq747e2hw63mzg3ctp6uf8wsg
```

#### Remove Alias
```
➜  ioctl alias remove frank
frank is removed
```

#### List Alias
```
➜  ioctl alias list
io1r2r0um9dw35922tptkuphseq43hq2knk3fjrlt - IOsenser
io1l3wc0smczyay8xq747e2hw63mzg3ctp6uf8wsg - test
io14gnqxf9dpkn05g337rl7eyt2nxasphf5m6n0rd - whale
```

#### Query Balance
```
➜  ioctl account balance IOsenser
io1r2r0um9dw35922tptkuphseq43hq2knk3fjrlt: 0.721 IOTX
```
```
➜  ioctl account balance io1l3wc0smczyay8xq747e2hw63mzg3ctp6uf8wsg
io1l3wc0smczyay8xq747e2hw63mzg3ctp6uf8wsg: 100000000 IOTX
```

#### Query Nonce
```
➜  ioctl account nonce IOsenser
io1r2r0um9dw35922tptkuphseq43hq2knk3fjrlt:
Nonce: 0, Pending Nonce: 1
```

#### Transfer Tokens
```
➜  ioctl action transfer IOsenser 7 pad#3212 -s whale -l 20000 -p 1
Enter password #whale:

senderAddress: io14gnqxf9dpkn05g337rl7eyt2nxasphf5m6n0rd (whale)
transfer: <
  recipient: io1r2r0um9dw35922tptkuphseq43hq2knk3fjrlt (IOsenser)
  amount: 7000000000000000000
  payload: pad#3212
>
senderPubKey: 04f591bf3d3e233f6705c8a78823e9ea4a9a73365ca4dd1e60e5567558135778fde8b79dc883b04a98ab68a0fe9e3b7ce984fceca0466c03f93f40d32915bf1d88
signature: 64f9dc75b3406a009692cde669d3186bc29844ba70520e16fdafc14487d8d6be184c4a43f5f7e1f688d759c985a268d1a4b73b34b9e98d1db61adcb549a37d0101

Please confirm your action.
Type 'YES' to continue, quit for anything else.
yes

Action has been sent to blockchain.
Wait for several seconds and query this action by hash:
aa56b8958d5030676876363ec054df4ac7044ea2fc09f51a1c238d22c9411c33
```

#### Query Action
```
➜  ioctl action hash aa56b8958d5030676876363ec054df4ac7044ea2fc09f51a1c238d22c9411c33
senderAddress: io14gnqxf9dpkn05g337rl7eyt2nxasphf5m6n0rd (whale)
transfer: <
  recipient: io1r2r0um9dw35922tptkuphseq43hq2knk3fjrlt (IOsenser)
  amount: 7000000000000000000
  payload: pad#3212
>
senderPubKey: 04f591bf3d3e233f6705c8a78823e9ea4a9a73365ca4dd1e60e5567558135778fde8b79dc883b04a98ab68a0fe9e3b7ce984fceca0466c03f93f40d32915bf1d88
signature: 64f9dc75b3406a009692cde669d3186bc29844ba70520e16fdafc14487d8d6be184c4a43f5f7e1f688d759c985a268d1a4b73b34b9e98d1db61adcb549a37d0101

senderAddress: io14gnqxf9dpkn05g337rl7eyt2nxasphf5m6n0rd (whale)
transfer: <
  recipient: io1r2r0um9dw35922tptkuphseq43hq2knk3fjrlt (IOsenser)
  amount: 7000000000000000000
  payload: pad#3212
>
senderPubKey: 04f591bf3d3e233f6705c8a78823e9ea4a9a73365ca4dd1e60e5567558135778fde8b79dc883b04a98ab68a0fe9e3b7ce984fceca0466c03f93f40d32915bf1d88
signature: 64f9dc75b3406a009692cde669d3186bc29844ba70520e16fdafc14487d8d6be184c4a43f5f7e1f688d759c985a268d1a4b73b34b9e98d1db61adcb549a37d0101

#This action has been written on blockchain
returnValue:
status: 1 (Success)
actHash: aa56b8958d5030676876363ec054df4ac7044ea2fc09f51a1c238d22c9411c33
gasConsumed: 10800
contractAddress:
```

#### Deploy Contract
```
➜  ioctl action deploy -b 608060405234801561001057600080fd5b5060df8061001f6000396000f3006080604052600436106049576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff16806360fe47b114604e5780636d4ce63c146078575b600080fd5b348015605957600080fd5b5060766004803603810190808035906020019092919050505060a0565b005b348015608357600080fd5b50608a60aa565b6040518082815260200191505060405180910390f35b8060008190555050565b600080549050905600a165627a7a7230582009e6d7025fff5ff3ba4cf7ba6b842526416df976e012a516f37e397607c1f2360029 -l 50000 -p 1 -s whale
Enter password #whale:

senderAddress: io14gnqxf9dpkn05g337rl7eyt2nxasphf5m6n0rd (whale)
version: 1
nonce: 3
gasLimit: 50000
gasPrice: 1000000000000
execution: <
  contract:
  amount: 0
  data: 608060405234801561001057600080fd5b5060df8061001f6000396000f3006080604052600436106049576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff16806360fe47b114604e5780636d4ce63c146078575b600080fd5b348015605957600080fd5b5060766004803603810190808035906020019092919050505060a0565b005b348015608357600080fd5b50608a60aa565b6040518082815260200191505060405180910390f35b8060008190555050565b600080549050905600a165627a7a7230582009e6d7025fff5ff3ba4cf7ba6b842526416df976e012a516f37e397607c1f2360029
>
senderPubKey: 04f591bf3d3e233f6705c8a78823e9ea4a9a73365ca4dd1e60e5567558135778fde8b79dc883b04a98ab68a0fe9e3b7ce984fceca0466c03f93f40d32915bf1d88
signature: a0cbb205184c3153217bdd7e1d251a70bf8d9222b7ab9b8015254e5961f21602694477ea5bed2005fe21f47724130af173b7abe2b5f9304b09f188749c88c2f001

Please confirm your action.
Type 'YES' to continue, quit for anything else.
yes

Action has been sent to blockchain.
Wait for several seconds and query this action by hash:
b49e5860c5b4154fdb6bcb808a60fbf8de2ac7807d99551ec5357d83ad2612e5
```

#### Invoke Contract
```
➜  ioctl action invoke io1vqzcl56vlfspyaadyxhqy07jrmalx73vdaklzn 122 -s boss -b 60fe47b10000000000000000000000000000000000000000000000000000000000000001 -l 90000 -p 3
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

#### Claim Reward
```
➜  ioctl action claim 321 happy -s whale -l 30000 -p 1
Enter password #whale:

senderAddress: io14gnqxf9dpkn05g337rl7eyt2nxasphf5m6n0rd (whale)
version: 1
nonce: 6
gasLimit: 30000
gasPrice: "1000000000000"
claimFromRewardingFund: <
  amount: "321000000000000000000"
  data: "happy"
>
senderPubKey: 04f591bf3d3e233f6705c8a78823e9ea4a9a73365ca4dd1e60e5567558135778fde8b79dc883b04a98ab68a0fe9e3b7ce984fceca0466c03f93f40d32915bf1d88
signature: 6b4022afc93901b7de420f84829e9f3e2f531a83c4c0f3a935df3694dbe09e7f068733a294207e9ee39e0d83b4fc206e9f7059592e648b8d92a0bb1eed489f4000

Please confirm your action.
Type 'YES' to continue, quit for anything else.
yes

Action has been sent to blockchain.
Wait for several seconds and query this action by hash:
59a73e24a41385005519d1d1e7f164b36b98717f2c5649785b43c2588245502d
```

#### Query Blockchain Height
```
➜  ioctl bc height
9051
```

#### Query Block
```
➜  ioctl bc block
Transactions: 1
Height: 122
Total Amount: 0
Timestamp: 1553238923
Producer Public Key: io1urumju6laya40h25rx2cdseql9xm2gm8auepac
Transactions Root: 8a4e41d5a183a4e12784872da4d76c32ac8d1cf11ed1543859e98000dbdf2620
Receipt Root: e8e28a529d99a70b7dab8dd6d491bdb0c20818defac307780c919a610e552d6a
Delta State Digest: 82286c69c59aaff815bb888b876eed7228ea51065027dc07ac1c04e5e082ea6b
Hash: 87f73c3a6e3312075a9aae70660656a9209bb11fb4d5fb1a2f21e020e20d3365
```
```
➜  ioctl bc block 101
Transactions: 1
Height: 101
Total Amount: 0
Timestamp: 1553238713
Producer Public Key: io1urumju6laya40h25rx2cdseql9xm2gm8auepac
Transactions Root: 8a4e41d5a183a4e12784872da4d76c32ac8d1cf11ed1543859e98000dbdf2620
Receipt Root: e8e28a529d99a70b7dab8dd6d491bdb0c20818defac307780c919a610e552d6a
Delta State Digest: 999003ad9f4ea85f45a8a3ebafcb8ad03c43852fbe8cce14aaf86bed9aed8895
Hash: c9cac24ed4a782583526132cc266f3def121e34ad4c4244f8b045fdd2d82d4cc
```
```
➜  ioctl bc block c9cac24ed4a782583526132cc266f3def121e34ad4c4244f8b045fdd2d82d4cc
Transactions: 1
Height: 101
Total Amount: 0
Timestamp: 1553238713
Producer Public Key: io1urumju6laya40h25rx2cdseql9xm2gm8auepac
Transactions Root: 8a4e41d5a183a4e12784872da4d76c32ac8d1cf11ed1543859e98000dbdf2620
Receipt Root: e8e28a529d99a70b7dab8dd6d491bdb0c20818defac307780c919a610e552d6a
Delta State Digest: 999003ad9f4ea85f45a8a3ebafcb8ad03c43852fbe8cce14aaf86bed9aed8895
Hash: c9cac24ed4a782583526132cc266f3def121e34ad4c4244f8b045fdd2d82d4cc
```

#### Query Delegates
```
➜  ioctl node delegate
Epoch: 4, Total blocks: 22

Address                                    Alias  Blocks
io1ns7y0pxmklk8ceattty6n7makpw76u770u5avy         0
io1l3wc0smczyay8xq747e2hw63mzg3ctp6uf8wsg  test   0
io14gnqxf9dpkn05g337rl7eyt2nxasphf5m6n0rd  whale  0
io1urumju6laya40h25rx2cdseql9xm2gm8auepac         22
io1skmqp33qme8knyw0fzgt9takwrc2nvz4sevk5c         0
...
```
```
➜  ioctl node delegate whale
Epoch: 4, Total blocks: 34
io14gnqxf9dpkn05g337rl7eyt2nxasphf5m6n0rd  whale  0
```
```
➜  ioctl node delegate whale -e 1
Epoch: 1, Total blocks: 48
io14gnqxf9dpkn05g337rl7eyt2nxasphf5m6n0rd  whale  0
```

#### Query Reward
```
➜  ioctl node reward whale
io14gnqxf9dpkn05g337rl7eyt2nxasphf5m6n0rd: 45819 IOTX
```

#### Update Ioctl
```
➜  ioctl update
Downloading the latest stable version ...
Password:
ioctl is up-to-date now.
```

## Explorer 2.0
Work-in-progress

## API 2.0
### GetAccount
```
Usage:
  Get Account Details
Request:
  Address: Account Encoded Address
Response:
  AccountMeta: Account Metadata
```  

### GetActions
```
Usage:
  Get Actions By Index
Request:
  Start: Start Index of Actions
  Count: Number of Actions
Response:
  Actions: List of Actions
```

### GetActions
```
Usage:
  Get Action By Action Hash
Request:
  Action Hash: Hash of Action
Response:
  Actions: Action
```  

### GetActions
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

### GetActions
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

### GetActions
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

### GetBlockMetas
```
Usage:
  Get Block Metadatas By Index
Request:
  Start: Start Block Height
  Count: Number of Blocks
Response:
  BlkMetas: List of Block Metadatas
```  
    
### GetBlockMetas
```
Usage:
  Get Block Metadata By Block Hash
Request:
  BlkHash: Block Hash
Response:
  BlkMetas: Block Metadata
```

### GetChainMeta
```
Usage:
  Get Blockchain
Request:
  N/A
Response:
  ChainMeta: Blockchain Metadata
```

### SendAction
```
Usage:
  Send Action
Request:
  Action: Action
Response:
  N/A
```
### GetReceiptByAction
```
Usage:
  Get Action Receipt By Action Hash
Request:
  ActionHash: Action Hash
Response:
  Receipt: Action Receipt
```

### ReadContract
```
Usage:
  Read Contract State
Request:
  Action: Action (Must Be An Execution)
Response:
  Data: Return Value in Execution Receipt
```

### ReadState
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

### SuggestGasPrice
```
Usage:
  Get Suggested Gas Price
Request:
  N/A
Response:
  GasPrice: Gas Price
```

### EstimateGasForAction
```
Usage:
  Get Estimated Gas For Action
Request:
  Action: Action
Response:
  Gas: Gas
```

### GetProductivity
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
