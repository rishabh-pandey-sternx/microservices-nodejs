const express = require('express');
const bodyParser = require('body-parser');
// Loading all the constants from .env
const dotenv = require('dotenv');

const app = express();

app.use(bodyParser.json());

app.get('/', async (req, res) => {
  res.send('ok');
});

/**
 * Get port from environment and store in Express.
 */
dotenv.config();

/**
 * Listen on provided port, on all network interfaces.
 */
app.listen(process.env.PORT || 3000, function() {
  console.log('Express server listening on port ' + process.env.PORT || 3000);
});
