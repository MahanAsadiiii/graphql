import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { ApolloClient, InMemoryCache, ApolloProvider, gql } from '@apollo/client';
import { BrowserRouter } from 'react-router-dom';

let client = new ApolloClient({
  uri: 'http://sandboxrahnama.pellex.ir/petyarql/',
  cache: new InMemoryCache(),
})

// client.query({
//   query: ,
// }).then((result) => { console.log(result) });

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(

  <ApolloProvider client={client}>
      <App />
  </ApolloProvider>

);

