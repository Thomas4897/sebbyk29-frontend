import Layout from "../Layout";
import { Box } from "@mui/material";
import { useState, useEffect } from "react";

const HomePage = () => {
  return (
    <Layout color="primary">
      <Box
        mt={10}
        width={1}
        display="flex"
        flexDirection="row"
        alignItems="center"
        justifyContent="space-evenly"
      >
        <iframe
          width="600"
          height="340"
          src="https://www.youtube.com/embed?max-results=1&controls=0&showinfo=0&rel=0&listType=user_uploads&list=SebbyK29"
          frameborder="0"
          allowfullscreen
        />
      </Box>
    </Layout>
  );
};

export default HomePage;
