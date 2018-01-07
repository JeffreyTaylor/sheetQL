sheetQL
=======


Install
=======
```bash
npm install sheetQL
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
const SheetQL = require('sheetQL');
const sheet = new SheetQL("SPREADSHEET_KEY");


(async function () {
  const result = await sheet.query('SELECT *');
  console.log(result);
})();
```
