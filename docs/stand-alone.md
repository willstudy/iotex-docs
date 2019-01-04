---
id: stand-alone
title: Stand-alone Mode
---

This guide explains what the stand-alone mode is, and how to set up and run a node in such mode.

# Stand-alone Mode
The IoTeX software package comes with a special stand-alone mode: where a single node comprises the entire blockchain by itself. It generates new block, validates the block, and adds the block to the blockchain. This lightweight special mode allows user to quickly launch and test a blockchain with a single computer/node, without bothering upper layer like consensue, network and hardware resources.

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

> Note: If your computer is on a LAN with internal IP address like 192.168.1.100, still put the external IP address in the config file. You’ll need to enable port-forwarding on the router/switch to forward both ingress and egress traffic on port 30555 to the internal address of your computer.

# Run the stand-alone node
Now we are ready to run the stand-alone node at the stroke of one command line:

```
sudo docker run -d -p 30555:30555 -p 30100:14004 --mount type=bind,source=$PWD/config_delegate.yaml,target=/etc/iotex/config_local_delegate.yaml iotex/iotex-core:testnet iotex-server -config-path=/etc/iotex/config_local_delegate.yaml
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

With the correct URL in hand, let’s set up your own Explorer. Click on <a target="_blank" href="https://heroku.com/deploy?template=https://github.com/iotexproject/iotex-explorer">
  <img src="https://www.herokucdn.com/deploy/button.svg" alt="Deploy">
</a> Please sign up a free Heroku account if you don't have one yet.

![App deploy](/img/heroku-deploy.png)

Enter a name you like in App name and click the Deploy app button, it takes about 3~4 minutes to build and deploy. Wait until you see green tick and “Your app was successfully deployed”, click on Manage app, as shown below 

![App finish](/img/heroku-finish.png)

Then click on Settings tab, and Reveal Config Vars. 

![App setting](/img/heroku-setting.png)

We’ll need to config these 5 parameters for the Explorer app to working correctly. 

You’ll end up like the figure below, with http://yourIP:30100 replaced by the Explorer URL mentioned earlier.

![App config](/img/heroku-config.png)

Now you are ready to launch your own IoTeX explorer. Click on Open app in the top right of the page, or go to http://appname.herokuapp.com, you will see your own IoTeX explorer live in action!
