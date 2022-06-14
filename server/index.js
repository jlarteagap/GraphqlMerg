const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const port = process.env.PORT || 4000;
 const color = require('colors')
const schema = require('./schema/schema');
const connectDB = require('./config/db');
require('dotenv').config();
const app = express();

connectDB()

app.use(
    '/graphql',
    graphqlHTTP({
      schema,
      graphiql: process.env.NODE_ENV === 'development',
    })
  );
app.listen(port, () => console.log(`Listening on port ${port}`));