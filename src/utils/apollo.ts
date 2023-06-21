import { ApolloClient, HttpLink, InMemoryCache } from '@apollo/client';
import { api } from './api';

export const client = new ApolloClient({
  // uri: 'http://localhost:3500',
  cache: new InMemoryCache(),
  link: new HttpLink({
    uri: api ?? '',
  }),
});
