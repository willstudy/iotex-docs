---
title: Vita-Bot
---

## Bot Overview

`vita-bot` is a universal bot framework. currently, support discord and telegram, it aims to make it easier to develop and maintain bots

## Command

The `client.command` is used to creat a command. here is a simple usage:

```js
client.command({
  name: "balance",
  aliases: ["wallet"],
  description: "desc fro balance"
  allow:{
    telegram: true,
    discord: true
  },
  use:[autoClear()],
  onDiscord({adapter, args, flags}){},
  onTelegram({adapter, args, flags}){}
})
```

## Sub Commands

If you want to create a command contains subcommands(eg: `vitadrop create random`), Here's an easy way to do it:

```js
client.command({
  name: "vitadrop",
  description: "Commands for vitadrop",
  subCommands: [
    {
      name: "create",
      description: "Create vitadrop",
      subCommands: [
        {
          name: "random",
          description: "Create a random VITA airdrop"
          onDiscord(){},
          onTelegram(){}
        }
      ]
    }
  ]
});
```

## Adapter

The adapter is used to handle different commands to be consistent in different bots. It includes the following common usage：

**get account**

```js
client.command({
  name: "balance",
  async onDiscord({ adapter, msg }) {
    const account = await adapter.getAccount();
  },
  async onTelegram({ adapter, ctx }) {
    const account = await adapter.getAccount();
  }
});
```

**send DM message**

for send DM message, you can use `adapter.sendDM(message)`.

for send PM message, you can use `adapter.sendPM(message)`.

for reply a message, you can use `adapter.reply(message)`.

for edit a message, you can use `adapter.edit(reply, message)`.

```js
client.command({
  name: "balance",
  async onTelegram({ adapter }) {
    const account = await adapter.getAccount();
    const [iotx, vita] = await account.getBalance();
    await adapter.sendDM(
      new RichEmbed({
        description: `${account.user.ioAddress}\n${iotx.balance} IOTX\n${vita.balance} VITA`
      })
    );
  }
});
```

## Args & Flags

Args and flags are automatically parsed through the bot, you can easily use them.

```js
client.command({
  name: "test",
  usage: "<foo> <bar>",
  example: "foo bar",
  flags: {
    flags1: { type: "string", alias: "f1", required: true },
    flags2: { type: "string", alias: "f2", default: "falgs2" }
  },
  async onDiscord({ args, flags }) {
    const [foo, bar] = args;
    const { flags1, flags2 } = flags;
  }
});
```

## Middleware

Middleware can check, record, and process data during command execution

```js
client.command({
  name: "test",
  usage: "<foo> <bar>",
  use: [checkArgs(args => args.length >= 1)],
  async onDiscord({ args, flags }) {
    const [foo, bar] = args;
  }
});
```
