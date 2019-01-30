const express = require('express')
const app = express();

app.use('/', express.static('src'));

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log('Example app listening on port 8080!')
});
