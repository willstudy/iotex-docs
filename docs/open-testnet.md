---
id: open-testnet
title: Open Testnet
---

The IoTeX Testnet is now fully open for community and developers! Join our Testnet as a full node and use our SDK to interact with IoTeX blockchain.

This is the phase I of the Open Testnet launch, which focuses on running a full node. The following guide covers that in 3 parts:

1. Set up full node
2. Run the full node
3. Explore the full node

p.s. We are working on functionality that will allow you to join as a delegate and participate in generating blocks on the IoTeX Testnet Blockchain. That will be launched in phase II in near future.

# Set up the full node
Our complete software is packaged in the form of a docker image plus a config file for the convenience of set-up and deployment. You can easily set up and run a full node in 3 steps.

First, install docker and download our docker image. Second, download the config file and adjust certain networking settings. And finally, run the full node in one command!

## Install the IoTeX docker image
Install docker on your host machine at https://docs.docker.com/install/. Once docker is properly installed and started, download the IoTeX docker image:

`docker pull iotex/iotex-core:testnet`

## Config your network setting
The Testnet is basically a p2p network where nodes communicate to each other by relaying messages and blocks they receive on the network. To connect to and join the IoTeX Testnet, you’ll need to first set your IP address in the config file — without publishing your IP address other nodes won't know your existence and hence cannot send data to you.

Download the config file <a href="/config_fullnode.yaml" download>config_fullnode.yaml</a>, on Linux/MacOS this can be easily done by the following command
```
curl https://docs.iotex.io/config_fullnode.yaml > config_fullnode.yaml
```
Open the file and change the 127.0.0.1 after 'host:' to your external IP address. For example, if your external IP is 30.30.30.30

```
# replace with your external IP address
host: "30.30.30.30"
```

> Note: If your computer is on a LAN with internal IP address like 192.168.1.100, still put the external IP address in the config file. You’ll need to enable port-forwarding on the router/switch to forward both ingress and egress traffic on port 30555 to the internal address of your computer.

Second, upon joining a p2p network you’ll need to know an initial peer to contact to, this is called the bootstrap node. This has already been properly configured in the file, bootnode.iotexconnect.io links to one node on our Testnet. You don't need to do any change here.

```
bootstrapNodes:
        - "bootnode.iotexconnect.io:30555"
```

# Run the full node
Now we are ready to run the full node at the stroke of one command line:

```
sudo docker run -d -p 30555:30555 -p 30100:14004 --mount type=bind,source=/path-to-config_fullnode.yaml/config_fullnode.yaml,target=/etc/iotex/config_local_fullnode.yaml iotex/iotex-core:testnet
```
You can now use standard docker commands to check the status. For instance, type `sudo docker container ls` you will see something like
```
CONTAINER ID   IMAGE                      COMMAND                  CREATED             STATUS              PORTS                                                NAMES
b3554e412b00   iotex/iotex-core:testnet   "iotex-server -confi…"   About an hour ago   Up About an hour    0.0.0.0:30555->30555/tcp, 0.0.0.0:30100->14004/tcp   sad_lehmann
```
If you pull the log by `sudo docker logs b3554e412b00`, at the beginning of the log you can find the genesis block creation message (height = 0, hash = 05389a6d3550c24552b80fe0557e9dbf5fd1fece92a9f83c053903891e12fab3)
```
{"level":"info","iotxAddr":"io1qyqsqqqq8uhx9jtdc2xp5wx7nxyq3xf4c3jmxknzj23d2m","networkAddress":"35.230.101.152:30555","nodeType":"full_node","height":0,"hash":"05389a6d3550c24552b80fe0557e9dbf5fd1fece92a9f83c053903891e12fab3","time":"2018-11-16T01:16:38Z","message":"commit a block"}
```
And more message like below, showing the full node kept receiving and committing more blocks
```
{"level":"info","iotxAddr":"io1qyqsqqqq8uhx9jtdc2xp5wx7nxyq3xf4c3jmxknzj23d2m","networkAddress":"35.230.101.152:30555","nodeType":"full_node","height":1,"hash":"2379d84c7dab2d1b7b0938b899083b3551c1fe0abe4aabca2a81f9e56ce6323c","time":"2018-11-16T01:18:11Z","message":"commit a block"}
{"level":"info","iotxAddr":"io1qyqsqqqq8uhx9jtdc2xp5wx7nxyq3xf4c3jmxknzj23d2m","networkAddress":"35.230.101.152:30555","nodeType":"full_node","recvHeight":1,"confirmedHeight":0,"source":"blockBuffer","syncedHeight":1,"time":"2018-11-16T01:18:11Z","message":"Successfully committed block."}
{"level":"info","iotxAddr":"io1qyqsqqqq8uhx9jtdc2xp5wx7nxyq3xf4c3jmxknzj23d2m","networkAddress":"35.230.101.152:30555","nodeType":"full_node","height":2,"hash":"709dc1dc64ded1c7203a6ff29218af9c525d14ba85e7038930979354f4aa3ea3","time":"2018-11-16T01:18:11Z","message":"commit a block"}
{"level":"info","iotxAddr":"io1qyqsqqqq8uhx9jtdc2xp5wx7nxyq3xf4c3jmxknzj23d2m","networkAddress":"35.230.101.152:30555","nodeType":"full_node","recvHeight":2,"confirmedHeight":1,"source":"blockBuffer","syncedHeight":2,"time":"2018-11-16T01:18:11Z","message":"Successfully committed block."}
{"level":"info","iotxAddr":"io1qyqsqqqq8uhx9jtdc2xp5wx7nxyq3xf4c3jmxknzj23d2m","networkAddress":"35.230.101.152:30555","nodeType":"full_node","height":3,"hash":"fb55c007f30297e454b1633d74dfa7b8003006e29df8c5fe19af767daeabdcb3","time":"2018-11-16T01:18:11Z","message":"commit a block"}
{"level":"info","iotxAddr":"io1qyqsqqqq8uhx9jtdc2xp5wx7nxyq3xf4c3jmxknzj23d2m","networkAddress":"35.230.101.152:30555","nodeType":"full_node","recvHeight":3,"confirmedHeight":2,"source":"blockBuffer","syncedHeight":3,"time":"2018-11-16T01:18:11Z","message":"Successfully committed block."}
```

# Explore the full node
The IoTeX docker image is embedded with a service in the backend called Explorer. It connects to the blockchain on the full node and provides API to access and query data on the blockchain through JSON RPC. In this part of the guide we’ll show you how to quickly deploy your own IoTeX blockchain explorer.

In the docker command there is a flag `-p 30100:14004`, this will expose the Explorer service to port 30100 on your host machine (14004 is the internal port inside the docker container). Your Explorer URL is hence the external IP : 30100. For example, with an IP 30.30.30.30 the Explorer URL is http://30.30.30.30:30100

With the correct URL in hand, let’s set up your own Explorer. Click on the button below. Please sign up a free Heroku account if you don't have one yet.

<a target="_blank" href="https://heroku.com/deploy?template=https://github.com/iotexproject/iotex-explorer">
  <img src="https://www.herokucdn.com/deploy/button.svg" alt="Deploy">
</a>

You will see a page like below:

<img src="https://docs.iotex.io/img/heroku-deploy.png" alt="App deploy" style="width: 75%; height: 75%;">

Enter a name you like in App name and click the Deploy app button, it takes about 3~4 minutes to build and deploy. Wait until you see green tick and “Your app was successfully deployed”, as shown below

<img src="https://docs.iotex.io/img/heroku-finish.png" alt="App finish" style="width: 75%; height: 75%;">

Click on Manage app. On the coming page, click on Settings tab, and Reveal Config Vars.

<img src="https://docs.iotex.io/img/heroku-setting.png" alt="App setting" style="width: 75%; height: 75%;">

We’ll need to add these 5 parameters for the Explorer app to working correctly:

| KEY | VALUE |
| --- | --- |
| CHAINS | [{"id":1,"name":"mainchain","url":"http://iotexscan.io/","gatewayUrl":"https://iotexscan.com/"},{"id":2,"name":"subchain","url":"http://subchain.iotexscan.io/","gatewayUrl":"https://subchain.iotexscan.io/"}] |
| IOTEX_CORE_URL | type in **Explorer URL** mentioned earlier |
| IOTEX_WALLET_URL | 159.89.223.147:42124 |
| NODE_ENV | production |

You’ll end up like the figure below, with the 3rd item `http://yourIP:30100` replaced by the Explorer URL mentioned earlier.

<img src="https://docs.iotex.io/img/heroku-config.png" alt="App config" style="width: 75%; height: 75%;">

Now you are ready to launch your own IoTeX explorer. Click on Open app in the top right of the page, or go to `http://appname.herokuapp.com`, you will see your own IoTeX explorer live in action!
