---
id: version-0.2-open-testnet
title: Testnet 2.0
original_id: open-testnet
---

The IoTeX Testnet is now fully open for community and developers! Join our Testnet and interact with IoTeX network today!

## Set up the node
Our complete software is packaged in the form of a docker image plus a config file for the convenience of set-up and deployment. You can easily set up and run a node by following instructions at https://github.com/iotexproject/iotex-testnet.

As of now, your node will be join as a fullnode to IoTeX network. Once we open the staking/voting on the testnet, you could promote your fullnode to a delegate and participate in block production. Expect that in the next 2-3 weeks.

## Interact with the node using CLI
ioctl is a command-line interface for interacting with IoTeX network. To install it,

```curl https://raw.githubusercontent.com/iotexproject/iotex-core/master/install-cli.sh | sh```

To set the endpoint that this tool talks to:
```ioctl config set endpoint 1.2.3.4:5678```

To create an account,
```ioctl account create```

To find an action/transaction by hash,
```ioctlaction hash 4ab56a16a0a904c92cb05afcdcdd962e4535b5f318dfc2d63684a02727d5b5da```

To check the balance of an account,

```ioctl account balance io1juvx5g063eu4ts832nukp4vgcwk2gnc5cu9ayd```

To send IOTX,
```ioctl action transfer io14maafjgdxazyqluwl9yur85rfd6kn59l9zvc57 10000 test -l 50000 -p 1 -a boss```

To find out more,
```ioctl -h```

## Interact with the node using explorer 2.0
TBD
