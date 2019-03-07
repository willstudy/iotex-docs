---
id: stand-alone
title: Build and Run
---
The simplest way to get started with  IoTeX software package is to run it in stand-alone mode for demonstration and testing purposes. "Stand-alone" indicates a single node comprises the entire blockchain by itself, which generates new block, validates the block, and adds the block to the blockchain. This simple mode allows user to quickly launch and test a blockchain with a single computer/node, without requiring much hardware resources.

## From the source
1. setup golang environment, e.g., [on Linux](https://medium.com/@RidhamTarpara/install-go-1-11-on-ubuntu-18-04-16-04-lts-8c098c503c5f), [on MacOS](https://medium.com/golang-learn/quick-go-setup-guide-on-mac-os-x-956b327222b8)
2. ```git clone git@github.com:iotexproject/iotex-core.git```
3. ```make run```

## Use docker image
1. Install docker on your host machine at https://docs.docker.com/install/. Once docker is properly installed and started, download the IoTeX docker image: `docker pull iotex/iotex-core:latest`

2. Download the config file config_delegate.yaml from [iotex-core](https://github.com/iotexproject/iotex-core). Open the file and change certain parameters of the stand-alone node as you need. For instance, blockCreationInterval specifies the amount of time it takes (in seconds) to produce next block. Change it to a larger value if you want block producing at a slower pace.

3. ```sudo docker run -d -p 30100:14004 --mount type=bind,source=$PWD/config_delegate.yaml,target=/etc/iotex/config_local_delegate.yaml iotex/iotex-core:testnet iotex-server -config-path=/etc/iotex/config_local_delegate.yaml```
