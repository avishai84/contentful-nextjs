import { ApolloClient, InMemoryCache } from '@apollo/client';
const { CONTENTFUL_SPACE_ID, CONTENTFUL_MANAGEMENT_TOKEN } = process.env


const client = new ApolloClient({
    uri: `https://graphql.contentful.com/content/v1/spaces/${CONTENTFUL_SPACE_ID}/environments/master`,
    cache: new InMemoryCache(),
  });

export default client;