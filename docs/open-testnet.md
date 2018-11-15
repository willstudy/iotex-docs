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

Download the config file config_fullnode.yaml, open it in an editor, change the 127.0.0.1 in the below line to your external IP address

`host: "127.0.0.1"`

> Note: If your computer is on a LAN with internal IP address like 192.168.1.100, still put the external IP address in the config file. You’ll need to enable port-forwarding on the router/switch to forward both ingress and egress traffic on port 30555 to the internal address of your computer.

Second, upon joining a p2p network you’ll need to know an initial peer to contact to, this is called the bootstrap node. Change 127.0.0.1:4689 in the below line to 104.198.10.31:30555 (which is one node on our Testnet)

```
bootstrapNodes:
        - "127.0.0.1:4689"
```

# Run the full node

Now we are ready to run the full node at the stroke of one command line:

docker run -p 30555:30555 --mount type=bind,source=/path-to-config_fullnode.yaml/config_fullnode.yaml,target=/etc/iotex/config_local_fullnode.yaml iotex/iotex-core:testnet

-p 30555:30555 forward the port 30555 from your host computer to the running process in the docker container

--mount phrase use the config file with adjusted network setting above to override the default config in the docker container
