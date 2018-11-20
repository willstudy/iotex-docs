---
id: open-testnet
title: Open Testnet
---

The IoTeX Testnet is now fully open for community and developers! Join our Testnet as a full node and use our SDK to interact with IoTeX blockchain.

We are working on functionality that will allow you to join as a delegate and participate in generating blocks on the IoTeX Testnet Blockchain.

# Set up full node

Our complete software is packaged in the form of a docker image plus a config file for the convenience of set-up and deployment. You can easily set up and run a full node in 3 steps.

First, install docker and download our docker image. Second, download the config file and adjust certain networking settings. And finally, run the full node in one command!

## Install the IoTeX docker image

Install docker on your host machine at https://docs.docker.com/install/. Once docker is properly installed and started, download the IoTeX docker image:

`docker pull iotex/iotex-core:testnet`

## Config your network setting

The Testnet is basically a p2p network where nodes communicate to each other by relaying messages and blocks they receive on the network. To connect to and join the IoTeX Testnet, you’ll need to first set your IP address in the config file — without publishing your IP address other nodes won't know your existence and hence cannot send data to you.

Download the config file config_fullnode.yaml, open it in an editor, change the 127.0.0.1 after 'host:' to your external IP address. For instance, if your external IP is 30.30.30.30

`
# replace with your external IP address
host: "30.30.30.30"
`

> Note: If your computer is on a LAN with internal IP address like 192.168.1.100, still put the external IP address in the config file. You’ll need to enable port-forwarding on the router/switch to forward both ingress and egress traffic on port 30555 to the internal address of your computer.

Second, upon joining a p2p network you’ll need to know an initial peer to contact to, this is called the bootstrap node. This has already been properly configured in the file, bootnode.iotexconnect.io links to one node on our Testnet. You don't need to do any change here.

```
bootstrapNodes:
        - "bootnode.iotexconnect.io:30555"
```

# Run the full node

Now we are ready to run the full node at the stroke of one command line:

```
docker run -p 30555:30555 --mount type=bind,source=/path-to-config_fullnode.yaml/config_fullnode.yaml,target=/etc/iotex/config_local_fullnode.yaml iotex/iotex-core:testnet
```

-p 30555:30555 forward the port 30555 from your host computer to the running process in the docker container

--mount phrase use the config file with adjusted network setting above to override the default config in the docker container

You'll first see this message. It shows the full node has started and committed the genesis block (height = 0, hash = 05389a6d3550c24552b80fe0557e9dbf5fd1fece92a9f83c053903891e12fab3)

`
{"level":"info","iotxAddr":"io1qyqsqqqq8uhx9jtdc2xp5wx7nxyq3xf4c3jmxknzj23d2m","networkAddress":"35.230.101.152:30555","nodeType":"full_node","height":0,"
hash":"05389a6d3550c24552b80fe0557e9dbf5fd1fece92a9f83c053903891e12fab3","time":"2018-11-16T01:16:38Z","message":"commit a block"}
`

After a while, you will see more message like below, showing the full node kept receiving and committing more blocks

`
{"level":"info","iotxAddr":"io1qyqsqqqq8uhx9jtdc2xp5wx7nxyq3xf4c3jmxknzj23d2m","networkAddress":"35.230.101.152:30555","nodeType":"full_node","height":1,"hash":"2379d84c7dab2d1b7b0938b899083b3551c1fe0abe4aabca2a81f9e56ce6323c","time":"2018-11-16T01:18:11Z","message":"commit a block"}
{"level":"info","iotxAddr":"io1qyqsqqqq8uhx9jtdc2xp5wx7nxyq3xf4c3jmxknzj23d2m","networkAddress":"35.230.101.152:30555","nodeType":"full_node","recvHeight":1,"confirmedHeight":0,"source":"blockBuffer","syncedHeight":1,"time":"2018-11-16T01:18:11Z","message":"Successfully committed block."}
{"level":"info","iotxAddr":"io1qyqsqqqq8uhx9jtdc2xp5wx7nxyq3xf4c3jmxknzj23d2m","networkAddress":"35.230.101.152:30555","nodeType":"full_node","height":2,"hash":"709dc1dc64ded1c7203a6ff29218af9c525d14ba85e7038930979354f4aa3ea3","time":"2018-11-16T01:18:11Z","message":"commit a block"}
{"level":"info","iotxAddr":"io1qyqsqqqq8uhx9jtdc2xp5wx7nxyq3xf4c3jmxknzj23d2m","networkAddress":"35.230.101.152:30555","nodeType":"full_node","recvHeight":2,"confirmedHeight":1,"source":"blockBuffer","syncedHeight":2,"time":"2018-11-16T01:18:11Z","message":"Successfully committed block."}
{"level":"info","iotxAddr":"io1qyqsqqqq8uhx9jtdc2xp5wx7nxyq3xf4c3jmxknzj23d2m","networkAddress":"35.230.101.152:30555","nodeType":"full_node","height":3,"hash":"fb55c007f30297e454b1633d74dfa7b8003006e29df8c5fe19af767daeabdcb3","time":"2018-11-16T01:18:11Z","message":"commit a block"}
{"level":"info","iotxAddr":"io1qyqsqqqq8uhx9jtdc2xp5wx7nxyq3xf4c3jmxknzj23d2m","networkAddress":"35.230.101.152:30555","nodeType":"full_node","recvHeight":3,"confirmedHeight":2,"source":"blockBuffer","syncedHeight":3,"time":"2018-11-16T01:18:11Z","message":"Successfully committed block."}
{"level":"info","iotxAddr":"io1qyqsqqqq8uhx9jtdc2xp5wx7nxyq3xf4c3jmxknzj23d2m","networkAddress":"35.230.101.152:30555","nodeType":"full_node","height":4,"hash":"ab264081c077ea15a885ce8665151906986a648d57261f374340ea98ec7b7e6b","time":"2018-11-16T01:18:12Z","message":"commit a block"}
`
