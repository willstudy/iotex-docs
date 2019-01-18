const idl = require('./explorer.json');
const arrayToTable = require('./array2table');

function idlToJsonRpc() {
  return idl.map(en => getMethod(en)).join('');
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

${arrayToTable(f.params, null)}

### Returns

${arrayToTable([f.returns], null)}

### Example

\`\`\`
curl -X POST --data '{"jsonrpc":"2.0","method":"${item.name}.${f.name}","params":[${f.params.map(p => (`"${p.name}: ${p.type}"`)).join(', ')}],"id":"1"}'
\`\`\`

`
      })
      .join('\n\n\n');
  }

  return fn;
}

console.log(`---
id: json-rpc
title: JSON RPC
---

${idlToJsonRpc()}
`);
