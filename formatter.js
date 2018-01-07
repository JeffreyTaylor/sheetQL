module.exports = {
  format: (input) => {
    return toCamelCase(csv2json(input));
  }
};

function csv2json(csv) {
  var lines=csv.split("\n");
  var result = [];
  var headers=lines[0].split(",");
  for(var i=1;i<lines.length;i++){
    var obj = {};
    var currentline=lines[i].split(",");
    for(var j=0;j<headers.length;j++){
      const header = headers[j].replace(/['"]+/g, '');
      obj[header] = currentline[j].replace(/['"]+/g, '');
    }
    result.push(obj);
  }
  return result;
}


function toCamelCase(o) {
  let newO, origKey, newKey, value;
  if (o instanceof Array) {
    newO = [];
    for (origKey in o) {
      value = o[origKey];
      if (typeof value === "object") {
        value = toCamelCase(value)
      }
      newO.push(value)
    }
  } else {
    newO = {};
    for (origKey in o) {
      if (o.hasOwnProperty(origKey)) {
        newKey = (origKey.charAt(0).toLowerCase() + origKey.slice(1) || origKey).toString();
        value = o[origKey];
        if (value instanceof Array || (value !== null && value.constructor === Object)) {
          value = toCamelCase(value);
        }
        newO[newKey] = value
      }
    }
  }
  return newO
}
