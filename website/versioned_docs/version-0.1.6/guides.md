---
id: version-0.1.6-guides
title: IoTeX Development Guides
original_id: guides
---

# Introduction

IoTeX is the auto-scalable and privacy-centric blockchain infrastructure for the Internet of Things (IoT). We are developing several in-house innovations to push the frontier of blockchain 3.0, including a blockchain-in-blockchain architecture for heterogeneous computing, fast and robust Roll-DPoS consensus scheme, and lightweight privacy-preserving techniques. Ultimately, we are bringing autonomous device coordination to the masses by "connecting the physical world, block by block."

![IoTeX Blockchain Architecture](https://cdn-images-1.medium.com/max/2000/0*cPrsvVa1wIE0cqnS)

IoTeX blockchain:
- Gives users the capability of provisioning their application-centric sub-chain, which is backed by the IoTeX root-chain, and on which they could do token transfer as well as execute smart contract.

- Uses Roll-DPoS consensus, so that token holders could vote the delegates who will produce new blocks for the whole network.

- Uses Byzantine fault tolerance alogrithm for consensus, so that the transactions could be immediately finalized once their block are committed.

- Supports Ethereum virtual machine (EVM) and smart contracts written in Sodility. Developers could seamlessly port existing DApps in Sodility onto it.

IoTeX team are continuously working hard to bring the community more cool features.

# Glossary

- Root-chain: root IoTeX blockchain which orchestrates all the sub-chains, and handles cross-chain communications.

- Sub-chain: application centric blockchain which attaches to the root-chain to utilize IoTeX network infrastructure, trust and cross-chain channels.

- Roll-DPoS: IoTeX's improved DPoS consensus scheme, which increases the randomization on the block producer election.

- Delegate: the blockchain node which is elected to propose or validate new block.

- [Sodility](https://en.wikipedia.org/wiki/Solidity): the contract oriented programming language.

- Transaction: the atomic operation unit to interact with the blockchain data. It has multiple sub-types (e.g., transfer, vote, execution) in IoTeX blockchain.
