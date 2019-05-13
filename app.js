const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser')
const expressGraphQL = require('express-graphql')
mongoose.connect(
    'mongodb://localhost/GraphQlShop_v2',
    {
        useCreateIndex: true,
        useNewUrlParser: true
    }, () =>{
        console.log('Connect to MongoDb...');
    }
);

const schema = require('./graphql/index');
app.use(
  "/graphql",
  cors(),
  bodyParser.json(),
  expressGraphQL({
    schema,
    graphiql: true
  })
);

app.use((req, res, next) => {
    const error = new Error('Not found');
    error.status = 404;
    next(error);
})

app.use((error, req, res, next) => {
    res.status(error.status||500);
    res.json({
        error:{
            message: error.message
        }
    })
})
module.exports = app;