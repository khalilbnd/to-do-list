const express = require('express');

const app = express();
const routes = require('./routes');
const { AppDataSource } = require('./data-source');
const bodyParser = require('body-parser');

app.use(bodyParser.json(
    
))
app.use('/v1', routes);

AppDataSource.initialize()
  .then(() => {
    console.log("Data Source has been initialized!");
  })
  .catch((err) => {
    console.error("Error during Data Source initialization", err);
  });



app.listen(3000, () => {
    console.log('Server is running on port 3000');
    });