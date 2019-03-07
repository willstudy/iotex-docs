---
id: version-0.3-guides
title: Introduction
original_id: guides
---

Founded as an open-source project in 2017, IoTeX is building the world's leading auto-scalable and privacy-centric blockchain platform for the Internet of Things (IoT). Our mission is to build a decentralized trust fabric for the era of collaboration and data exchange among devices, applications and people. We are developing several innovative technologies in-house, including the blockchain-in-blockchain architecture for heterogeneous computing, fast and robust Roll-DPoS consensus scheme, and efficient trusted computing protocols. More details can be found [here](https://iotex.io/academics). IoTeX core team is continuously working hard to bring the community more cool features.

## Grand Design
Our long-term design employs Separation of Powers (a term coined by Charles-Louis de Secondat which states that political authority should be divided into legislative, executive and judicial powers).
![IoTeX Rootchain Architecture](https://cdn-images-1.medium.com/max/2600/1*D6GiPlh9TdikW82c8j1jrA.png)

* Governance layer, instantiated by the Gravity Chain is the layer that acts as a decentralized government for the IoTeX network. It uses a liveness-oriented consensus scheme (e.g., PoS variant) to facilitate tasks such as staking, voting, slashing, protocol-related proposals, and more. Will be launched in Q3/Q4 2019.
* Orchestration layer, instantiated by the Root Chain, is the general manager and coordinator for all subchains. It is powered by our safety-oriented Roll-DPoS consensus mechanism and aims for high throughput and reliability. Will be launched in Q1 2019 (a.k.a, Mainnet Alpha).
* Operational layer, instantiated by various subchains, is the concrete unit that handles business logic related to specific use cases/applications. In our design, subchains share the same pool of Delegates as the root chain, so anyone can spin up a subchain as effortlessly and securely as spinning up an EC2 instance on AWS Cloud. The first IoTeX subchain is expected to be launched in Q2/Q3 2019 focusing on privacy.
* Execution layer, is an optional layer for specific subchains to offload concerete computation tasks to.

## Root Chain
The root chain will be launched in Q1 2019 (a.k.a, Mainnet Alpha), which is consisted of the four layered components:
* Networking layer enables the peer-to-peer communication between IoTex nodes, and provide blockchain services (through [grpc](https://grpc.io/)) to other applications and users
* Consensus layer runs Roll-DPoS to select the active block producers among a pool of block producer candidates (who are elected via staking and voting), using a decentralized randomized algorithm (DKG + BLS).
* State transition layer is composed of five subprotocols and is responsible for transiting the states of the blockchain from one to the other.
* Programing layer implements the business logics for state transition. Currently it supports Ethereum virtual machine (EVM) with smart contracts written in Solidity. Developers could seamlessly port existing DApps onto it.

![IoTeX Rootchain Architecture](https://cdn-images-1.medium.com/max/2000/0*cPrsvVa1wIE0cqnS)

## Subprotocols and Actions
The state transition layer of IoTex root chain is flexible enough that any subprotocol can be plugged in without hustling.
* Account subprotocol provides the functionality for bookkeeping balances of accounts living on this blockchain.
* Execution subprotocol manages the execution of smart contracts and roll forward/back of the states.
* Poll subprotocol syncs with our staking/voting contracts living on Ethereum (which plays the role of Gravity chain before its ready), and instructs the delegates promotion/demotion on IoTeX root chain.
* Rewarding subprotocol is responsible for distributing block reward and epoch reward to eligible delegates and candidates.
* Multichain subprotocol manages sub-chain management and cross-chain communication which is a work-in-progress.

In the IoTeX network, transactions (the atomic operation unit to interact with the blockchain data) are referred to as "actions", and there are five types of actions corresponding to the five subprotocols as described. More information can be found [here](https://github.com/iotexproject/iotex-core/blob/master/proto/types/action.proto).
