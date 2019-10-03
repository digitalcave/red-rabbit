import React from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';
import Root from './Root';

const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql',
});

const App = () => (
  <ApolloProvider client={client}>
    <Root />
  </ApolloProvider>
);

export default App;
