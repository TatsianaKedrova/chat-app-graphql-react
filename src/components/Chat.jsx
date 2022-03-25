import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import React from "react";
import Messages from "./Messages";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import { CssBaseline } from "@mui/material";

const client = new ApolloClient({
  uri: "http://localhost:4000/",
  cache: new InMemoryCache(),
});

const Chat = () => {
  return (
    <>
      <CssBaseline />
      <Container
        maxWidth={"md"}
        sx={{
          backgroundColor: "#8DD3F7",
          height: "600px",
          my: "60px",
        }}
        disableGutters
      >
        <Messages user={"Tania"} />
      </Container>
    </>
  );
};

export default () => (
  <ApolloProvider client={client}>
    <Chat />
  </ApolloProvider>
);
