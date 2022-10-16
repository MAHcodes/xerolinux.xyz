import React from "react";
import ReactDOM from "react-dom/client";
import "./reset.css";
import "./index.css";
import "./markdown.css";
import App from "./App";
import ThemeContextProvider from "./contexts/ThemeContext";
import PopUpContextProvider from "./contexts/PopUpContext";
import ReleaseCountdownContextProvider from "./contexts/ReleaseCountdownContext";
import { BrowserRouter as Router } from "react-router-dom";
import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  uri: process.env.REACT_APP_HYGRAPH_URI,
  cache: new InMemoryCache(),
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <ThemeContextProvider>
    <PopUpContextProvider>
      <ReleaseCountdownContextProvider>
        <Router>
          <ApolloProvider client={client}>
            <App />
          </ApolloProvider>
        </Router>
      </ReleaseCountdownContextProvider>
    </PopUpContextProvider>
  </ThemeContextProvider>
);
