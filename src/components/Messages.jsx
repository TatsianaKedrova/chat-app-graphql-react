import { gql, useQuery } from "@apollo/client";
import { Box, Paper } from "@mui/material";
import React from "react";

const GET_MESSAGES = gql`
  query {
    messages {
      id
      userName
      content
    }
  }
`;

const Messages = ({ user }) => {
  const { data } = useQuery(GET_MESSAGES);
  if (!data) {
    return null;
  }
  console.log("data: ", typeof data);

  return data.messages.map(({ id, userName, content }) => (
    <Box
      key={id}
      sx={{
        display: "flex",
        justifyContent: user === userName ? "flex-end" : "flex-start",
        pt: "5px",
        mt: "30px",
      }}
    >
      {user !== userName && (
        <Box
          sx={{
            mx: 2,
            borderRadius: "50px",
            bgcolor: (theme) => theme.palette.info.light,
            display: "inline",
            width: "40px",
            height: "40px",
            textAlign: "center",
            mb: 1,
            border: 1
          }}
        >
          {userName.slice(0, 1).toUpperCase()}
        </Box>
      )}
      <Paper
        elevation={0}
        sx={{
          backgroundColor: user === userName ? "#E352F2" : "#1668A7",
          color: "#F9FAFB",
          p: "5px",
        }}
      >
        {content}
      </Paper>
    </Box>
  ));
};

export default Messages;
