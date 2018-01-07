const service = require('./service');
const formatter = require('./formatter');

class Sheet {

  constructor(key, sheet = '') {
    this.key = key;
    this.sheet = sheet
  }
  async query(statement) {
    return formatter.format(((await service.query(this.key, this.sheet, statement)).data));
  }
}

module.exports = Sheet;