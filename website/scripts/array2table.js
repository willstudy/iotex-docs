/**
 * Generate markdown table from an array of objects
 *
 * @param  {Array} array    Array of objects
 * @param  {Array} columns  Optional, table column names, otherwise taken from the keys of the first object
 * @param  {String} alignment Optional table alignment. Can be 'center' (default), 'left' or 'right'
 *
 * @return {String} Markdown table
 */
module.exports = function arrayToTable (array, columns, alignment = 'center') {
  if (array.length<=0) return `<code>[]</code>`
  var table = ""
  var separator = {
    'left': ':---',
    'right': '---:',
    'center': '---'
  }

  var oCols = ['name', 'type', 'is_array']

  // Generate column list
  var cols = columns
    ? columns.split(",")
    : (array[0]?Object.keys(array[0]):[])

/*  cols.filter(value => -1 !== oCols.indexOf(value));
  cols.concat(oCols)
  cols = [...new Set(cols)]*/

  cols.sort((a, b)=> { return oCols.indexOf(a)>=0 && (oCols.indexOf(a) <= oCols.indexOf(b)) ? -1 : 1})
  // Generate table headers
  table += cols.join(" | ")
  table += "\r\n"

  // Generate table header seperator
  table += cols.map(function () {
    return separator[alignment] || separator.center
  }).join(' | ')
  table += "\r\n"

  // Generate table body
  array.forEach(function (item) {
    table += cols.map(function (key) {
      return key==='name'? `<code>${String(item[key])}</code>`:
        (key==='type'? `<span style="color: #ed225d">${String(item[key])}</span>`: String(item[key]))
    }).join(" | ") + "\r\n"
  })

  // Return table
  return table
}
