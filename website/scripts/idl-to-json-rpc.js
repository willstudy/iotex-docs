const idl = require('./explorer.json');

function idlToJsonRpc() {
  return idl.map(en => {
    return `
${getMethod(en)}
              `
  }).join('');
}

function getMethod(item) {
  if (item.type === 'struct') {
    return '';
  }
  if (item.type === 'comment') {
    return '';
  }
  if (item.type === 'meta') {
    return '';
  }

  let fn = '';
  if (item.type === 'interface') {
    fn = item
      .functions
      .map(f => {
        return `
## ${item.name}.${f.name}

${f.comment}

### Parameters

\`\`\`
${JSON.stringify(f.params, null, 2)}
\`\`\`

### Returns

\`\`\`
${JSON.stringify(f.returns, null, 2)}
\`\`\`

### Example

\`\`\`
curl -X POST --data '{"jsonrpc":"2.0","method":"${item.name}.${f.name}","params":[${f.params.map(p => (`"${p.name}: ${p.type}"`)).join(', ')}],"id":1}'
\`\`\`

`
      })
      .join('\n\n\n');
  }

  return fn;
}

console.log(`---
id: iotex-core-json-rpc
title: JSON RPC for iotex-core
---

${idlToJsonRpc()}
`);
