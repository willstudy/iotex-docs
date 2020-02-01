(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{293:function(a,e,t){"use strict";t.r(e);var s=t(16),n=Object(s.a)({},(function(){var a=this,e=a.$createElement,t=a._self._c||e;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("h2",{attrs:{id:"ioctl-command-line-interface"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#ioctl-command-line-interface"}},[a._v("#")]),a._v(" ioctl (command-line interface)")]),a._v(" "),t("p",[a._v("ioctl is a command-line interface for interacting with IoTeX blockchains.")]),a._v(" "),t("tabs",{attrs:{options:{useUrlFragment:!1}}},[t("tab",{attrs:{name:"bash"}},[t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("Usage:\n  ioctl "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("command"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v("\n\nAvailable Commands:\n  account     Manage accounts of IoTeX blockchain\n  action      Manage actions of IoTeX blockchain\n  "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("alias")]),a._v("       Manage aliases of IoTeX addresses\n  "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("bc")]),a._v("          Deal with block chain of IoTeX blockchain\n  config      Get, set, or reset configuration "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("for")]),a._v(" ioctl\n  "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("help")]),a._v("        Help about any "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("command")]),a._v("\n  node        Deal with nodes of IoTeX blockchain\n  stake       Support native staking from ioctl\n  update      Update ioctl with latest version\n  version     Print the version of ioctl and node\n  xrc20       Support ERC20 standard command-line from ioctl\n\nFlags:\n  -h, --help                   "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("help")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("for")]),a._v(" ioctl\n  -o, --output-format string   output "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("format")]),a._v("\n")])])])])],1),a._v(" "),t("h3",{attrs:{id:"install-release-build"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#install-release-build"}},[a._v("#")]),a._v(" Install Release Build")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("curl https://raw.githubusercontent.com/iotexproject/iotex-core/master/install-cli.sh | sh\n")])])]),t("h3",{attrs:{id:"install-latest-unstable-build"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#install-latest-unstable-build"}},[a._v("#")]),a._v(" Install Latest/Unstable Build")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v('curl https://raw.githubusercontent.com/iotexproject/iotex-core/master/install-cli.sh | sh -s "unstable"\n')])])]),t("h2",{attrs:{id:"usage-and-examples"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#usage-and-examples"}},[a._v("#")]),a._v(" Usage and Examples")]),a._v(" "),t("p",[a._v("Documentation of all ioctl commands with examples.")]),a._v(" "),t("h2",{attrs:{id:"config"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#config"}},[a._v("#")]),a._v(" Config")]),a._v(" "),t("p",[t("code",[a._v("Variables: [endpoint, wallet, explorer, defaultacc]")]),t("br"),a._v(" "),t("code",[a._v("Explorers: [iotexscan (default), iotxplorer, custom]")])]),a._v(" "),t("h4",{attrs:{id:"set-config"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#set-config"}},[a._v("#")]),a._v(" Set Config")]),a._v(" "),t("p",[t("code",[a._v("Usage: ioctl config set VARIABLE VALUE")])]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("➜  ioctl config set endpoint api.iotex.one:443\nendpoint is set to api.iotex.one:443\n")])])]),t("h4",{attrs:{id:"get-config"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#get-config"}},[a._v("#")]),a._v(" Get Config")]),a._v(" "),t("p",[t("code",[a._v("Usage: ioctl config get VARIABLE | all")])]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("➜  ioctl config get wallet\n/Users/IoTeX/.config/ioctl/default\n")])])]),t("h4",{attrs:{id:"reset-config"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#reset-config"}},[a._v("#")]),a._v(" Reset Config")]),a._v(" "),t("p",[t("code",[a._v("Usage: ioctl config reset")])]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("➜  ioctl config reset\nConfig reset to default values\n")])])]),t("h2",{attrs:{id:"account"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#account"}},[a._v("#")]),a._v(" Account")]),a._v(" "),t("h4",{attrs:{id:"create-account-s"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#create-account-s"}},[a._v("#")]),a._v(" Create Account(s)")]),a._v(" "),t("p",[t("code",[a._v("Usage: ioctl account create")])]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v('➜  ioctl account create\n{\n  "accounts": [\n    {\n      "address": "io12ly97a3sk94ne06qjz2vv6clv3za7mk2z2sra9",\n      "privateKey": "bb59a2a2c21242831906e0c8d188c642fdc1324d27ac4ae0d8cbea373b22147b",\n      "publicKey": "040780ba149d24ee5418084ee193a6be8b3b7cf5329d160fc8902270b342c4fed4b646cdd5fdaf52932eecb957297a9bf6dbb24f7faa9287a27df6b5e83781c74b"\n    }\n  ]\n}\n')])])]),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v('➜  ioctl account create -n 3\n{\n  "accounts": [\n    {\n      "address": "io1dcx2490vk2sg0f7ujv9d3gu67rpvyk5rjp854s",\n      "privateKey": "a40ffd19150b4f3cbb1ca779862fc63b15d432c0be9bba81c56856d00e370b91",\n      "publicKey": "04483333bf900b59a412c26a8cf287e122be5d2882d66263ce330a2c84e426fcf48dca4e189dbef15dc3511b049b7708c1e3a49e4904a6286ffcc6019bb27a4ca9"\n    },\n    {\n      "address": "io19sypnkmj6agqqgusht07m35lvlhz4ruehetagk",\n      "privateKey": "fd49783f8687379e3eb6e5778977044cc7e464dd16df8444b8643d3d636f7ebc",\n      "publicKey": "04bcae59b817ec2924adef52088e9295bb040d1a34fe49e64b41ca56e2cbb3be115256975d2c1472b0a3b47bea720810de092ef4d209924ce09fa896b29588a90d"\n    },\n    {\n      "address": "io1ehlhw6kedp5x8y04ddr7fl0cs68ns32hdxuvdl",\n      "privateKey": "2c1bdc74c7ff03f08f2e2d3b65af9a54dc5addc42613670bd4bb1f0440cd9468",\n      "publicKey": "04cd1ff13e20cbe83bc8759ce21404edc2a9b78c57f8d2ffc648f2213dfee98b61d9ebaffe03f32e7a13fbe319b1958c99ed701c3fa1046790f6af12f32262309b"\n    }\n  ]\n}\n')])])]),t("h4",{attrs:{id:"create-an-account-into-wallet"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#create-an-account-into-wallet"}},[a._v("#")]),a._v(" Create An Account Into Wallet")]),a._v(" "),t("p",[t("code",[a._v("Usage: ioctl account createadd ALIAS")])]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v('➜  ioctl account createadd IOsenser\n#IOsenser: Set password\n#IOsenser: Enter password again\nNew account "IOsenser" is created.\nPlease Keep your password, or your will lose your private key.\n')])])]),t("h4",{attrs:{id:"import-an-account-with-private-key"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#import-an-account-with-private-key"}},[a._v("#")]),a._v(" Import An Account With Private Key")]),a._v(" "),t("p",[t("code",[a._v("Usage: ioctl account import [key|keystore] ALIAS")]),a._v("\nTwo options are available. If you use "),t("code",[a._v("key")]),a._v(",")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("➜  ioctl account import key whale\n#whale: Enter your private key, which will not be exposed on the screen.\n#whale: Set password\n#whale: Enter password again\nNew account #whale is created. Keep your password, or your will lose your private key.\n")])])]),t("p",[a._v("If you use "),t("code",[a._v("keystore")]),a._v(",")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("➜  ioctl account import keystore whale\n")])])]),t("h4",{attrs:{id:"export-private-key-from-an-account"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#export-private-key-from-an-account"}},[a._v("#")]),a._v(" Export Private Key From An Account")]),a._v(" "),t("p",[t("code",[a._v("Usage: ioctl account export (ALIAS|ADDRESS)")])]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("➜  ioctl account export whale\nEnter password #whale:\nxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx\n")])])]),t("h4",{attrs:{id:"delete-an-account"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#delete-an-account"}},[a._v("#")]),a._v(" Delete An Account")]),a._v(" "),t("p",[t("code",[a._v("Usage: ioctl account delete (ALIAS|ADDRESS)")])]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("➜  ioctl account delete whale\n** This is an irreversible action!\nOnce an account is deleted, all the assets under this account may be lost!\nType 'YES' to continue, quit for anything else.\nyes\nEnter password #io1t54nfdnpldaxkpm35f2gzh3rx6cakypmp5xfz5:\nAccount #io1t54nfdnpldaxkpm35f2gzh3rx6cakypmp5xfz5 has been deleted.\n")])])]),t("h4",{attrs:{id:"list-accounts"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#list-accounts"}},[a._v("#")]),a._v(" List Accounts")]),a._v(" "),t("p",[t("code",[a._v("Usage: ioctl account list")])]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("➜  ioctl account list\nio1r2r0um9dw35922tptkuphseq43hq2knk3fjrlt - IOsenser\nio17laykjt9qgafuxj58fuspuxzlv6y4qgxf82vnm - frank\nio1l3wc0smczyay8xq747e2hw63mzg3ctp6uf8wsg\nio14gnqxf9dpkn05g337rl7eyt2nxasphf5m6n0rd - 007\n")])])]),t("h4",{attrs:{id:"query-balance"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#query-balance"}},[a._v("#")]),a._v(" Query Balance")]),a._v(" "),t("p",[t("code",[a._v("Usage: ioctl account balance (ALIAS|ADDRESS)")])]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("➜  ioctl account balance IOsenser\nio1r2r0um9dw35922tptkuphseq43hq2knk3fjrlt: 0.721 IOTX\n")])])]),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("➜  ioctl account balance io1l3wc0smczyay8xq747e2hw63mzg3ctp6uf8wsg\nio1l3wc0smczyay8xq747e2hw63mzg3ctp6uf8wsg: 4689 IOTX\n")])])]),t("h4",{attrs:{id:"query-nonce"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#query-nonce"}},[a._v("#")]),a._v(" Query Nonce")]),a._v(" "),t("p",[t("code",[a._v("Usage: ioctl account nonce (ALIAS|ADDRESS)")])]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("➜  ioctl account nonce IOsenser\nio1r2r0um9dw35922tptkuphseq43hq2knk3fjrlt:\nNonce: 0, Pending Nonce: 1\n")])])]),t("h4",{attrs:{id:"translate-address"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#translate-address"}},[a._v("#")]),a._v(" Translate Address")]),a._v(" "),t("p",[t("code",[a._v("Usage: ioctl account ethaddr (ALIAS|IOTEX_ADDRESS|ETH_ADDRESS)")])]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("➜  ioctl account ethaddr io14gnqxf9dpkn05g337rl7eyt2nxasphf5m6n0rd\nio14gnqxf9dpkn05g337rl7eyt2nxasphf5m6n0rd - 0xAA260324ad0DA6FA2231f0FfEC916A99bb00dd34\n")])])]),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("➜  ioctl account ethaddr 0xAA260324ad0DA6FA2231f0FfEC916A99bb00dd34\nio14gnqxf9dpkn05g337rl7eyt2nxasphf5m6n0rd - 0xAA260324ad0DA6FA2231f0FfEC916A99bb00dd34\n")])])]),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("➜  ioctl account ethaddr 007\nio14gnqxf9dpkn05g337rl7eyt2nxasphf5m6n0rd - 0xAA260324ad0DA6FA2231f0FfEC916A99bb00dd34\n")])])]),t("h4",{attrs:{id:"update-password-of-an-account"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#update-password-of-an-account"}},[a._v("#")]),a._v(" Update Password Of An Account")]),a._v(" "),t("p",[t("code",[a._v("Usage: ioctl account update (ALIAS|ADDRESS)")])]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("➜  ioctl account update IOsenser\n#IOsenser: Enter current password\n#IOsenser: Enter new password\n#IOsenser: Enter new password again\nAccount #IOsenser has been updated.\n")])])]),t("h2",{attrs:{id:"alias"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#alias"}},[a._v("#")]),a._v(" Alias")]),a._v(" "),t("h4",{attrs:{id:"set-alias"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#set-alias"}},[a._v("#")]),a._v(" Set Alias")]),a._v(" "),t("p",[t("code",[a._v("Usage: ioctl alias set ALIAS ADDRESS")])]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("➜  ioctl alias set test io1l3wc0smczyay8xq747e2hw63mzg3ctp6uf8wsg\nset\n")])])]),t("h4",{attrs:{id:"remove-alias"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#remove-alias"}},[a._v("#")]),a._v(" Remove Alias")]),a._v(" "),t("p",[t("code",[a._v("Usage: ioctl alias remove ALIAS")])]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("➜  ioctl alias remove frank\nfrank is removed\n")])])]),t("h4",{attrs:{id:"list-alias"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#list-alias"}},[a._v("#")]),a._v(" List Alias")]),a._v(" "),t("p",[t("code",[a._v("Usage: ioctl alias list")])]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("➜  ioctl alias list\nio1r2r0um9dw35922tptkuphseq43hq2knk3fjrlt - IOsenser\nio1l3wc0smczyay8xq747e2hw63mzg3ctp6uf8wsg - test\nio14gnqxf9dpkn05g337rl7eyt2nxasphf5m6n0rd - whale\n")])])]),t("h2",{attrs:{id:"action"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#action"}},[a._v("#")]),a._v(" Action")]),a._v(" "),t("h4",{attrs:{id:"transfer-tokens"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#transfer-tokens"}},[a._v("#")]),a._v(" Transfer Tokens")]),a._v(" "),t("p",[t("code",[a._v("Usage: ioctl action transfer (ALIAS|RECIPIENT_ADDRESS) AMOUNT_IOTX [DATA] -s SIGNER [-l GAS_LIMIT] [-p GAS_PRICE]")])]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("➜  ioctl action transfer IOsenser 7 pad#3212 -s whale\nEnter password #whale:\n\nsenderAddress: io14gnqxf9dpkn05g337rl7eyt2nxasphf5m6n0rd (whale)\ntransfer: <\n  recipient: io1r2r0um9dw35922tptkuphseq43hq2knk3fjrlt (IOsenser)\n  amount: 7000000000000000000\n  payload: pad#3212\n>\nsenderPubKey: 04f591bf3d3e233f6705c8a78823e9ea4a9a73365ca4dd1e60e5567558135778fde8b79dc883b04a98ab68a0fe9e3b7ce984fceca0466c03f93f40d32915bf1d88\nsignature: 64f9dc75b3406a009692cde669d3186bc29844ba70520e16fdafc14487d8d6be184c4a43f5f7e1f688d759c985a268d1a4b73b34b9e98d1db61adcb549a37d0101\n\nPlease confirm your action.\nType 'YES' to continue, quit for anything else.\nyes\n\nAction has been sent to blockchain.\nWait for several seconds and query this action by hash:\niotexscan.io/action/aa56b8958d5030676876363ec054df4ac7044ea2fc09f51a1c238d22c9411c33\n")])])]),t("h4",{attrs:{id:"query-action"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#query-action"}},[a._v("#")]),a._v(" Query Action")]),a._v(" "),t("p",[t("code",[a._v("Usage: ioctl action hash ACTION_HASH")])]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("→  ioctl action hash 690fb07fbb5ba3b762a7a16edea35ff1c3b02b43a6331aef88c4daa1bc933ad4\n\nversion: 1  nonce: 7  gasLimit: 122222  gasPrice: 2000000000000 Rau\nsenderAddress: io1znka733xefxjjw2wqddegplwtefun0mfdmz7dw (whale)\ntransfer: <\n  recipient: io18jaldgzc8wlyfnzamgas62yu3kg5nw527czg37 (nani)\n  amount: 123000000000000000000 Rau\n  payload:\n>\nsenderPubKey: 04d0fade363080b9061844ed6b1009f35595515b31295e37e870106d3201a638856db2c3f870dbbcafc559af54574f3487dbea0d318588608d7aca8e77e4ce5ade\nsignature: 2e10f265fdc5944fab11afaebd258292afe8f9076157fbaca6bfdd3ece9047483fb3aa10ce187fe55d2d9c591e5eda430833b744f825a6ae34c9b34461d3940f01\n\n#This action has been written on blockchain\nreturnValue:\nstatus: 1 (Success)\nactHash: 690fb07fbb5ba3b762a7a16edea35ff1c3b02b43a6331aef88c4daa1bc933ad4\ngasConsumed: 10000\ncontractAddress:\nlogs:0\n")])])]),t("h4",{attrs:{id:"deploy-contract"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#deploy-contract"}},[a._v("#")]),a._v(" Deploy Contract")]),a._v(" "),t("p",[t("code",[a._v("Usage: ioctl action deploy -s SIGNER -b BYTE_CODE -l GAS_LIMIT [-p GAS_PRICE]")])]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("➜  ioctl action deploy -b 608060405234801561001057600080fd5b5060df8061001f6000396000f3006080604052600436106049576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff16806360fe47b114604e5780636d4ce63c146078575b600080fd5b348015605957600080fd5b5060766004803603810190808035906020019092919050505060a0565b005b348015608357600080fd5b50608a60aa565b6040518082815260200191505060405180910390f35b8060008190555050565b600080549050905600a165627a7a7230582009e6d7025fff5ff3ba4cf7ba6b842526416df976e012a516f37e397607c1f2360029 -l 50000 -p 1 -s whale\nEnter password #whale:\n\nsenderAddress: io14gnqxf9dpkn05g337rl7eyt2nxasphf5m6n0rd (whale)\nversion: 1\nnonce: 3\ngasLimit: 50000\ngasPrice: 1000000000000\nexecution: <\n  contract:\n  amount: 0\n  data: 608060405234801561001057600080fd5b5060df8061001f6000396000f3006080604052600436106049576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff16806360fe47b114604e5780636d4ce63c146078575b600080fd5b348015605957600080fd5b5060766004803603810190808035906020019092919050505060a0565b005b348015608357600080fd5b50608a60aa565b6040518082815260200191505060405180910390f35b8060008190555050565b600080549050905600a165627a7a7230582009e6d7025fff5ff3ba4cf7ba6b842526416df976e012a516f37e397607c1f2360029\n>\nsenderPubKey: 04f591bf3d3e233f6705c8a78823e9ea4a9a73365ca4dd1e60e5567558135778fde8b79dc883b04a98ab68a0fe9e3b7ce984fceca0466c03f93f40d32915bf1d88\nsignature: a0cbb205184c3153217bdd7e1d251a70bf8d9222b7ab9b8015254e5961f21602694477ea5bed2005fe21f47724130af173b7abe2b5f9304b09f188749c88c2f001\n\nPlease confirm your action.\nType 'YES' to continue, quit for anything else.\nyes\n\nAction has been sent to blockchain.\nWait for several seconds and query this action by hash:\nb49e5860c5b4154fdb6bcb808a60fbf8de2ac7807d99551ec5357d83ad2612e5\n")])])]),t("h4",{attrs:{id:"invoke-contract"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#invoke-contract"}},[a._v("#")]),a._v(" Invoke Contract")]),a._v(" "),t("p",[t("code",[a._v("Usage: ioctl action invoke (ALIAS|CONTRACT_ADDRESS) [AMOUNT_IOTX] -s SIGNER -b BYTE_CODE -l GAS_LIMIT [-p GAS_PRICE]")])]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("➜  ioctl action invoke io1vqzcl56vlfspyaadyxhqy07jrmalx73vdaklzn 122 -s boss -b 60fe47b10000000000000000000000000000000000000000000000000000000000000001 -l 90000 -p 3\nEnter password #boss:\n\nsenderAddress: io1ed52svvdun2qv8sf2m0xnynuxfaulv6jlww7ur\nversion: 1\nnonce: 2\ngasLimit: 90000\ngasPrice: 3000000000000\nexecution: <\n  contract: io1vqzcl56vlfspyaadyxhqy07jrmalx73vdaklzn\n  amount: 122000000000000000000\n  data: 60fe47b10000000000000000000000000000000000000000000000000000000000000001\n>\nsenderPubKey: 04b3fe4456876ca4c904c52dc3203e06651924d6cbd5e9f545ce990ea1289f3b8ddaff3b7e104803187f87b1e375076285e7137052260b14f2f33229a671a39a0c\nsignature: bde6509fadfe80b707ef80e24041b4cfe7bf583c7d89a0649027090c191918b217ffae5faf1dd5f2d9e6d05f8721c8ff7a6b3b5cffb64610d3bad71c9c55e47001\n\nPlease confirm your action.\nType 'YES' to continue, quit for anything else.\nyes\n\nAction has been sent to blockchain.\nWait for several seconds and query this action by hash:\n58fc6465bd3b7e33b1508064b0342dc786247b4e18859be72fea57c993dc4950\n")])])]),t("h4",{attrs:{id:"claim-reward"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#claim-reward"}},[a._v("#")]),a._v(" Claim Reward")]),a._v(" "),t("p",[t("code",[a._v("Usage: ioctl action claim AMOUNT_IOTX [DATA] -s SIGNER [-l GAS_LIMIT] [-p GASPRICE]")])]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v('➜  ioctl action claim 321 happy -s whale\nEnter password #whale:\n\nsenderAddress: io14gnqxf9dpkn05g337rl7eyt2nxasphf5m6n0rd (whale)\nversion: 1\nnonce: 6\ngasLimit: 15000\ngasPrice: "1000000000000"\nclaimFromRewardingFund: <\n  amount: "321000000000000000000"\n  data: "happy"\n>\nsenderPubKey: 04f591bf3d3e233f6705c8a78823e9ea4a9a73365ca4dd1e60e5567558135778fde8b79dc883b04a98ab68a0fe9e3b7ce984fceca0466c03f93f40d32915bf1d88\nsignature: 6b4022afc93901b7de420f84829e9f3e2f531a83c4c0f3a935df3694dbe09e7f068733a294207e9ee39e0d83b4fc206e9f7059592e648b8d92a0bb1eed489f4000\n\nPlease confirm your action.\nType \'YES\' to continue, quit for anything else.\nyes\n\nAction has been sent to blockchain.\nWait for several seconds and query this action by hash:\n59a73e24a41385005519d1d1e7f164b36b98717f2c5649785b43c2588245502d\n')])])]),t("h2",{attrs:{id:"native-staking"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#native-staking"}},[a._v("#")]),a._v(" Native Staking")]),a._v(" "),t("h4",{attrs:{id:"create-bucket-for-voting"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#create-bucket-for-voting"}},[a._v("#")]),a._v(" Create Bucket for Voting")]),a._v(" "),t("p",[t("code",[a._v("Usage: ioctl stake create AMOUNT_IOTX CANDIDATE_NAME STAKE_DURATION [DATA] [--auto-restake] [-c ALIAS|CONTRACT_ADDRESS] [-s SIGNER] [-n NONCE] [-l GAS_LIMIT] [-p GASPRICE] [-P PASSWORD] [-y]")])]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("➜   ioctl stake create 100 frank 35 VotingForFrank --auto-restake\nEnter password #ioxxx...xxx:\n...\n...\nAction has been sent to blockchain.\nWait for several seconds and query this action by hash:iotexscan.io/action/xxx...xxx\n")])])]),t("h4",{attrs:{id:"add-iotx-to-certain-bucket"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#add-iotx-to-certain-bucket"}},[a._v("#")]),a._v(" Add IOTX to Certain Bucket")]),a._v(" "),t("p",[t("code",[a._v("Usage: ioctl stake add IOTX_AMOUNT BUCKET_INDEX [DATA] [-c ALIAS|CONTRACT_ADDRESS] [-s SIGNER] [-n NONCE] [-l GAS_LIMIT] [-p GASPRICE] [-P PASSWORD] [-y]")])]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("➜   ioctl stake add 100 1\nEnter password #ioxxx...xxx:\n...\n...\nAction has been sent to blockchain.\nWait for several seconds and query this action by hash:iotexscan.io/action/xxx...xxx\n")])])]),t("h4",{attrs:{id:"renew-a-bucket"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#renew-a-bucket"}},[a._v("#")]),a._v(" Renew a Bucket")]),a._v(" "),t("p",[t("code",[a._v("Usage: ioctl stake renew BUCKET_INDEX STAKE_DURATION [DATA] [--auto-restake] [-c ALIAS|CONTRACT_ADDRESS] [-s SIGNER] [-n NONCE] [-l GAS_LIMIT] [-p GASPRICE] [-P PASSWORD] [-y]")])]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("➜   ioctl stake renew 1 14\nEnter password #ioxxx...xxx:\n...\n...\nAction has been sent to blockchain.\nWait for several seconds and query this action by hash:iotexscan.io/action/xxx...xxx\n")])])]),t("h4",{attrs:{id:"release-a-over-time-bucket"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#release-a-over-time-bucket"}},[a._v("#")]),a._v(" Release a Over-Time Bucket")]),a._v(" "),t("p",[t("code",[a._v("Usage: ioctl stake release BUCKET_INDEX [DATA] [-c ALIAS|CONTRACT_ADDRESS] [-s SIGNER] [-n NONCE] [-l GAS_LIMIT] [-p GASPRICE] [-P PASSWORD] [-y]")])]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("➜   ioctl stake release 1\nEnter password #ioxxx...xxx:\n...\n...\nAction has been sent to blockchain.\nWait for several seconds and query this action by hash:iotexscan.io/action/xxx...xxx\n")])])]),t("h4",{attrs:{id:"withdraw-iotx-from-a-released-bucket"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#withdraw-iotx-from-a-released-bucket"}},[a._v("#")]),a._v(" Withdraw IOTX From a Released Bucket")]),a._v(" "),t("p",[t("code",[a._v("Usage: ioctl stake withdraw BUCKET_INDEX [DATA] [-c ALIAS|CONTRACT_ADDRESS] [-s SIGNER] [-n NONCE] [-l GAS_LIMIT] [-p GASPRICE] [-P PASSWORD] [-y]")])]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("➜   ioctl stake withdraw 1\nEnter password #ioxxx...xxx:\n...\n...\nAction has been sent to blockchain.\nWait for several seconds and query this action by hash:iotexscan.io/action/xxx...xxx\n")])])]),t("h4",{attrs:{id:""}},[t("a",{staticClass:"header-anchor",attrs:{href:"#"}},[a._v("#")])]),a._v(" "),t("h2",{attrs:{id:"xrc20"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#xrc20"}},[a._v("#")]),a._v(" XRC20")]),a._v(" "),t("h4",{attrs:{id:"query-total-token-supply-on-erc20-contract"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#query-total-token-supply-on-erc20-contract"}},[a._v("#")]),a._v(" Query Total Token Supply On Erc20 Contract")]),a._v(" "),t("p",[t("code",[a._v("Usage: ioctl xrc20 totalSupply -c ALIAS|CONTRACT_ADDRESS")])]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("➜   ioctl xrc20 totalSupply -c io1y9ndaezjrdlkw93hquqru7txh9jcsmtmrvt4yw\nRaw output: 0000000000000000000000000000000000000000010f73e141e95768f6bfacac\nOutput in decimal: 328166124527934490560933036\n")])])]),t("h4",{attrs:{id:"query-account-balance-on-erc20-contract"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#query-account-balance-on-erc20-contract"}},[a._v("#")]),a._v(" Query Account Balance On Erc20 Contract")]),a._v(" "),t("p",[t("code",[a._v("Usage: ioctl xrc20 balanceOf ALIAS|ACCOUNT_ADDRESS -c ALIAS|CONTRACT_ADDRESS")])]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("➜   ioctl xrc20 balanceOf io1q4enhh0tp5pqpa6s4urhwrx32529pmyyzdgu3q -c io1y9ndaezjrdlkw93hquqru7txh9jcsmtmrvt4yw\nRaw output: 000000000000000000000000000000000000000000000000b469471f80170d33\nOutput in decimal: 13000000000000199987\n")])])]),t("h4",{attrs:{id:"transfer-token-on-erc20-contract"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#transfer-token-on-erc20-contract"}},[a._v("#")]),a._v(" Transfer Token On Erc20 Contract")]),a._v(" "),t("p",[t("code",[a._v("Usage: ioctl xrc20 transfer ALIAS|TARGET_ADDRESS AMOUNT -c ALIAS|CONTRACT_ADDRESS [-l GAS_LIMIT] -s SIGNER [-p GAS_PRICE]")])]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("➜   ioctl xrc20 transfer io1juvx5g063eu4ts832nukp4vgcwk2gnc5cu9ayd 4 -c io1y9ndaezjrdlkw93hquqru7txh9jcsmtmrvt4yw -s ALIAS -l 50000\nEnter password #ioxxx...xxx:\n...\n...\nAction has been sent to blockchain.\nWait for several seconds and query this action by hash:iotexscan.io/action/xxx...xxx\n")])])]),t("h4",{attrs:{id:"transfer-token-from-another-address-on-erc20-contract"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#transfer-token-from-another-address-on-erc20-contract"}},[a._v("#")]),a._v(" Transfer Token From Another Address On Erc20 Contract")]),a._v(" "),t("p",[t("code",[a._v("Usage: ioctl xrc20 transferFrom ALIAS|OWNER_ADDRESS ALIAS|TARGET_ADDRESS AMOUNT -c ALIAS|CONTRACT_ADDRESS [-l GAS_LIMIT] -s SIGNER [-p GAS_PRICE]")])]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("➜   ioctl xrc20 transferFrom io1q4enhh0tp5pqpa6s4urhwrx32529pmyyzdgu3q io1juvx5g063eu4ts832nukp4vgcwk2gnc5cu9ayd 4 -c io1y9ndaezjrdlkw93hquqru7txh9jcsmtmrvt4yw -s ALIAS -l 50000\nEnter password #ioxxx...xxx:\n...\n...\nAction has been sent to blockchain.\nWait for several seconds and query this action by hash:iotexscan.io/action/xxx...xxx\n")])])]),t("h4",{attrs:{id:"allow-spender-withdraw-from-account-with-limitation"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#allow-spender-withdraw-from-account-with-limitation"}},[a._v("#")]),a._v(" Allow Spender Withdraw From Account With Limitation")]),a._v(" "),t("p",[t("code",[a._v("Usage: ioctl approve ALIAS|SPENDER_ADDRESS XRC20_AMOUNT -c ALIAS|CONTRACT_ADDRESS -s SIGNER [-l GAS_LIMIT]")])]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("➜   ioctl xrc20 approve io1juvx5g063eu4ts832nukp4vgcwk2gnc5cu9ayd 4 -c io1y9ndaezjrdlkw93hquqru7txh9jcsmtmrvt4yw -s ALIAS -l 50000\nEnter password #ioxxx...xxx:\n...\n...\nAction has been sent to blockchain.\nWait for several seconds and query this action by hash:iotexscan.io/action/xxx...xxx\n")])])]),t("h4",{attrs:{id:"query-remaining-withdraw-amount-for-spender"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#query-remaining-withdraw-amount-for-spender"}},[a._v("#")]),a._v(" Query Remaining Withdraw Amount For Spender")]),a._v(" "),t("p",[t("code",[a._v("Usage: ioctl allowance ALIAS|OWNER_ADDRESS ALIAS|SPENDER_ADDRESS -c ALIAS|CONTRACT_ADDRESS")])]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("➜   ioctl xrc20 allowance io1q4enhh0tp5pqpa6s4urhwrx32529pmyyzdgu3q io1juvx5g063eu4ts832nukp4vgcwk2gnc5cu9ayd -c io1y9ndaezjrdlkw93hquqru7txh9jcsmtmrvt4yw\nRaw output: 0000000000000000000000000000000000000000000000000000000000000004\nOutput in decimal: 4\n")])])]),t("h2",{attrs:{id:"blockchain"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#blockchain"}},[a._v("#")]),a._v(" Blockchain")]),a._v(" "),t("h4",{attrs:{id:"query-blockchain-information"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#query-blockchain-information"}},[a._v("#")]),a._v(" Query Blockchain Information")]),a._v(" "),t("p",[t("code",[a._v("Usage: ioctl bc info")])]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("➜  ioctl bc info\nheight:50268  numActions:50852  tps:0\nepochNum:140  epochStartHeight:50041  gravityChainStartHeight:7485100\n")])])]),t("h4",{attrs:{id:"query-block"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#query-block"}},[a._v("#")]),a._v(" Query Block")]),a._v(" "),t("p",[t("code",[a._v("Usage: ioctl bc block [HEIGHT|HASH]")])]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("➜  ioctl bc block\nTransactions: 1\nHeight: 122\nTotal Amount: 0\nTimestamp: 1553238923\nProducer Public Key: io1urumju6laya40h25rx2cdseql9xm2gm8auepac\nTransactions Root: 8a4e41d5a183a4e12784872da4d76c32ac8d1cf11ed1543859e98000dbdf2620\nReceipt Root: e8e28a529d99a70b7dab8dd6d491bdb0c20818defac307780c919a610e552d6a\nDelta State Digest: 82286c69c59aaff815bb888b876eed7228ea51065027dc07ac1c04e5e082ea6b\nHash: 87f73c3a6e3312075a9aae70660656a9209bb11fb4d5fb1a2f21e020e20d3365\n")])])]),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("➜  ioctl bc block 101\nTransactions: 1\nHeight: 101\nTotal Amount: 0\nTimestamp: 1553238713\nProducer Public Key: io1urumju6laya40h25rx2cdseql9xm2gm8auepac\nTransactions Root: 8a4e41d5a183a4e12784872da4d76c32ac8d1cf11ed1543859e98000dbdf2620\nReceipt Root: e8e28a529d99a70b7dab8dd6d491bdb0c20818defac307780c919a610e552d6a\nDelta State Digest: 999003ad9f4ea85f45a8a3ebafcb8ad03c43852fbe8cce14aaf86bed9aed8895\nHash: c9cac24ed4a782583526132cc266f3def121e34ad4c4244f8b045fdd2d82d4cc\n")])])]),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("➜  ioctl bc block c9cac24ed4a782583526132cc266f3def121e34ad4c4244f8b045fdd2d82d4cc\nTransactions: 1\nHeight: 101\nTotal Amount: 0\nTimestamp: 1553238713\nProducer Public Key: io1urumju6laya40h25rx2cdseql9xm2gm8auepac\nTransactions Root: 8a4e41d5a183a4e12784872da4d76c32ac8d1cf11ed1543859e98000dbdf2620\nReceipt Root: e8e28a529d99a70b7dab8dd6d491bdb0c20818defac307780c919a610e552d6a\nDelta State Digest: 999003ad9f4ea85f45a8a3ebafcb8ad03c43852fbe8cce14aaf86bed9aed8895\nHash: c9cac24ed4a782583526132cc266f3def121e34ad4c4244f8b045fdd2d82d4cc\n")])])]),t("h2",{attrs:{id:"node"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#node"}},[a._v("#")]),a._v(" Node")]),a._v(" "),t("h4",{attrs:{id:"query-delegates"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#query-delegates"}},[a._v("#")]),a._v(" Query Delegates")]),a._v(" "),t("p",[t("code",[a._v("Usage: ioctl node delegate [-e epoch-num|-n]")])]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("➜  ioctl node delegate\nEpoch: 140,  Start block height: 50041,  Total blocks in epoch: 238\n\nAddress                                     Rank   Alias   Status   Blocks   Votes\nio1kr8c6krd7dhxaaqwdkr6erqgu4z0scug3drgja      1           active   10       55001936.845735597412152533\nio108h7sa5sap44e244hz649zyk5y4rqzsvnpzxh5      2                             48735653.694155983836182304\nio1f0rh94m3ctkwep3rlsswwq5vxwlntx4s574l3q      3                             46160987.404981007320038095\nio14u5d66rt465ykm7t2847qllj0reml27q30kr75      4                             45709929.504998607776485547\nio1wl83n3up9w8nedf30lnyxzple0gu5pme0dyrds      5           active   10       38555248.666748708397999935\nio1qqaswtu7rcevahucpfxc0zxx088pylwtxnkrrl      6                             32708257.835646444877501838\nio1nf0rvzgq3tqym6n3trttsrt7d4gqqsmqfzy0da      7                             29712098.816122003636349154\n...\n")])])]),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("➜  ioctl node delegate -e 96\nEpoch: 96,  Start block height: 34201,  Total blocks in epoch: 360\n\nAddress                                     Rank   Alias   Status   Blocks   Votes\nio1kr8c6krd7dhxaaqwdkr6erqgu4z0scug3drgja      1           active   15       54541792.307642085450786008\nio108h7sa5sap44e244hz649zyk5y4rqzsvnpzxh5      2           active   15       48737756.399894630566687188\nio1f0rh94m3ctkwep3rlsswwq5vxwlntx4s574l3q      3           active   15       46190928.658730546519935761\nio14u5d66rt465ykm7t2847qllj0reml27q30kr75      4                             46085297.487903898159647528\nio1wl83n3up9w8nedf30lnyxzple0gu5pme0dyrds      5           active   15       38572640.296620127370097465\nio1qqaswtu7rcevahucpfxc0zxx088pylwtxnkrrl      6           active   16       32953849.701042695805874862\nio1nf0rvzgq3tqym6n3trttsrt7d4gqqsmqfzy0da      7           active   15       29482829.876487336517790368\n...\n")])])]),t("h4",{attrs:{id:"query-reward"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#query-reward"}},[a._v("#")]),a._v(" Query Reward")]),a._v(" "),t("p",[t("code",[a._v("Usage: ioctl node reward (ALIAS|DELEGATE_ADDRESS)")])]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("➜  ioctl node reward whale\nio1t54nfdnpldaxkpm35f2gzh3rx6cakypmp5xfz5: 45819 IOTX\n")])])]),t("h2",{attrs:{id:"update-tools"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#update-tools"}},[a._v("#")]),a._v(" Update tools")]),a._v(" "),t("h4",{attrs:{id:"version"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#version"}},[a._v("#")]),a._v(" Version")]),a._v(" "),t("p",[t("code",[a._v("Usage: ioctl version")])]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v('→  ioctl version\nClient:\npackageVersion:"v0.5.0" packageCommitID:"a4308fc82bea22cfaa45addef679a09f41f3a998" gitStatus:"clean" goVersion:"go version go1.11.5 darwin/amd64" buildTime:"2019-04-20-PDT/18:04:37"\n\nServer: api.iotex.one:443\npackageVersion:"v0.5.0" packageCommitID:"a4308fc82bea22cfaa45addef679a09f41f3a998" gitStatus:"clean" goVersion:"go version go1.11.5 linux/amd64" buildTime:"2019-04-21-UTC/01:04:11"\n')])])]),t("h4",{attrs:{id:"update-ioctl"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#update-ioctl"}},[a._v("#")]),a._v(" Update ioctl")]),a._v(" "),t("p",[t("code",[a._v("Usage: ioctl update [-t version-type]")])]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("➜  ioctl update\nDownloading the latest stable version ...\nPassword:\nioctl is up-to-date now.\n")])])]),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("➜  ioctl update -t unstable\nDownloading the latest unstable version ...\nPassword:\nioctl is up-to-date now.\n")])])])],1)}),[],!1,null,null,null);e.default=n.exports}}]);