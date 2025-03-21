import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter } from 'react-router-dom';
import { ApolloProvider } from "@apollo/client";
import client from "./apolloClient/apolloClient.js";

import "./scss/index.scss";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <BrowserRouter>
         <App/>
      </BrowserRouter>
    </ApolloProvider>
  </React.StrictMode>
);
