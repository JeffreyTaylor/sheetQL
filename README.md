sheetql
=======


Install
=======
```bash
npm install sheetql
```


Setting up your spreadsheet
===========================
Create a Google Sheet with the first row as column names

| Name | Age | IsActive |
| ---- | ---- | ---- |
| bob | 99 | TRUE |
| john | 85 | FALSE |


Example
=======
```javascript
const Sheetql = require('sheetql');
const sheet = new Sheetql('SPREADSHEET_KEY');

const result = await sheet.query('SELECT *');
console.log(result);
```
