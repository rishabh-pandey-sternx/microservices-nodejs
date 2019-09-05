const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());


app.post('/order', async (req, res) => {
    res.send({ 'post order' });
  });


app.get('/order', async (req, res) => {
    res.send({ 'get order' });
  });
  
app.listen(3001, () => console.log('listening order'));