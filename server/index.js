const express = require('express');
const {GraphqlHTTP} = require('express-graphql');
const port = process.env.PORT || 4000;
 const color = require('colors')
const schema = require('./schema/schema');
const connectDB = require('./config/db');

const app = express();

connectDB()

app.use('./graphql', GraphqlHTTP({
    schema,
    graphiql: process.env.NODE_ENV !== 'production'
}));
app.listen(port, () => console.log(`Listening on port ${port}`));