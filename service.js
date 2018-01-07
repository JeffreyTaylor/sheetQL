const http = require('axios');

module.exports = {
  query: async (key, sheet, query) => {
    const url = `https://spreadsheets.google.com/tq?headers=1&key=${key}&sheet=${sheet}&tq=${query}&tqx=out:csv`
    return await http.get(url);
  }
};