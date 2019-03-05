---
id: stand-alone
title: Stand-alone Mode
---

This guide explains what the stand-alone mode is, and how to set up and run a node in such mode.

# Stand-alone Mode
The IoTeX software package comes with a special stand-alone mode for testing purposes: where a single node comprises the entire blockchain by itself. It generates new block, validates the block, and adds the block to the blockchain. This lightweight special mode allows user to quickly launch and test a blockchain with a single computer/node, without bothering upper layer like consensue, network and hardware resources.

You can easily set up and run a node in stand-alone mode in 2 steps. First, install docker and download our docker image. Second, download the config file and adjust certain settings as you need. And finally, run the stand-alone node in one command!

## Install the IoTeX docker image
Install docker on your host machine at https://docs.docker.com/install/. Once docker is properly installed and started, download the IoTeX docker image:

`docker pull iotex/iotex-core:r0.4`

## Config setting for your stand-alone node
Download the config file <a href="/config_delegate.yaml" download>config_delegate.yaml</a>, on Linux/MacOS this can be easily done by the following command
```
curl https://docs.iotex.io/config_delegate.yaml > config_delegate.yaml
```
Open the file and change certain parameters of the stand-alone node as you need. For instance, blockCreationInterval specifies the amount of time it takes (in seconds) to produce next block. Change it to a larger value if you want block producing at a slower pace.

# Run the stand-alone node
Now we are ready to run the stand-alone node at the stroke of one command line:

```
sudo docker run -d -p 30100:14004 --mount type=bind,source=$PWD/config_delegate.yaml,target=/etc/iotex/config_local_delegate.yaml iotex/iotex-core:testnet iotex-server -config-path=/etc/iotex/config_local_delegate.yaml
```
If you pull the docker container's log, you will see output like below, showing the node started running and producing blocks
```
{"level":"warn","height":0,"hash":"05389a6d3550c24552b80fe0557e9dbf5fd1fece92a9f83c053903891e12fab3","time":"2019-01-04T18:19:37Z","message":"commit a block"}
{"level":"warn","height":1,"hash":"73c7c383d7d8373b1ff611c05e50ecf73d82f9b129aafcf84d27418c5c93cf37","time":"2019-01-04T18:19:39Z","message":"commit a block"}
{"level":"warn","height":2,"hash":"d2bef34e8ff9ce978fb68d27b6fee0759efbbd9766b39121d967cceac0b6103f","time":"2019-01-04T18:19:41Z","message":"commit a block"}
{"level":"warn","height":3,"hash":"888e87a9072328bd41720017879ca80e4573f43c1fffd818de6659eabafd9908","time":"2019-01-04T18:19:43Z","message":"commit a block"}
{"level":"warn","height":4,"hash":"82ebb34d7aabe0b790144d569e1bf7993b38eeb486d749c9a45fdd77fcad62dc","time":"2019-01-04T18:19:45Z","message":"commit a block"}
{"level":"warn","targetHeight":5,"time":"2019-01-04T18:19:47Z","message":"testnet"}
{"level":"warn","height":5,"hash":"bbd1658d7e6aed6a45e6446a54b4873c19ca5aa8387411d9b66461d484c073d0","time":"2019-01-04T18:19:47Z","message":"commit a block"}
{"level":"warn","height":6,"hash":"f733754bf1f49c2baa4f00f18e83b55163fd31cef46df1a1d5ad94c322126602","time":"2019-01-04T18:19:49Z","message":"commit a block"}
```

# Explore the stand-alone node
You can follow our open testnet guide to set up a front-end webpage to interact with the stand-alone node
