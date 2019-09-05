const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());


app.post('/delivery', async (req, res) => {
    res.send({ 'post delivery' });
  });

  app.post('/get', async (req, res) => {
    res.send({ 'get delivery' });
  });
  
app.listen(3002, () => console.log('listening delivery'));