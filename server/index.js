const express = require('express');
const {GraphqlHTTP} = require('express-graphql');
const port = process.env.PORT || 4000;
 
const schema = require('./schema/schema');

const app = express();
app.use('./graphql', GraphqlHTTP({
    schema,
    graphiql: process.env.NODE_ENV !== 'production'
}));
app.listen(port, () => console.log(`Listening on port ${port}`));