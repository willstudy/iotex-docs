---
id: interact-bc
title: Interact with Root Chain
---
There are two ways to interact with IoTeX root chain -- using CLI (command-line interface) and using
explorer 2.0. Both of which are built upon the APIs defined [here](https://github.com/iotexproject/iotex-core/blob/master/api/api.go).

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

### Create an account

```
➜ ioctl git:(ioctl) ✗ ./ioctl account create
{"Address": "io180ls3vq360mw9q6m7nxudh0hl44cv9qr27rjhj", "PrivateKey": "3e7f689e1f270c97aef283bc621114fbef19076f25a0873a5cfb94fc4dc75c93", "PublicKey": "04e4db1786a5fe130f48c6128907e86084fa6a33a2f428423b502ced24f3addae56711d025fc28f5a75fd5efb7ce8aea6685b337d07770c3ce08bce4cd03169b83"}
```

```
➜ ioctl git:(ioctl) ✗ ./ioctl account list
name: boss, address:io1llupp3n8q5x8usnr5w08j6hc6hn55x64l46rr7
name: fake, address:io1xje007qlk8apvg3y5ps4lr3y7ke8zy5vrpgsgf
➜ ioctl git:(ioctl) ✗ ./ioctl account balance boss
io1llupp3n8q5x8usnr5w08j6hc6hn55x64l46rr7: 100000000000000000000000000
```

### Transfer Coins
```
➜ ioctl git:(ioctl) ✗ ./ioctl action transfer fake 123132123 ILILILILLIL -s boss -l 40000 -p 765
Enter password #boss:
Action has been sent to blockchain.
Wait for several seconds and query this action by hash:
6aa1a7c0c33e003f2354e99e9836337e718bd4d99306108bc47bd993b1d713bc
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

## Explorer 2.0
Work-in-progress
