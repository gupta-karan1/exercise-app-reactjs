import React from "react";
import { Box, Stack, Typography } from "@mui/material";

const Footer = () => {
  return (
    <Box mt="80px">
      <Stack
        direction="row"
        justifyContent="center"
        alignItems="center"
        width="100%"
      >
        <Typography
          variant="h5"
          mb="20px"
          fontFamily="Josefin Sans"
          textTransform="capitalize"
          textAlign="center"
        >
          <span
            style={{
              color: "#ff2625",
              textTransform: "capitalize",
            }}
          >
            © 2023
          </span>{" "}
          Exercise Finder
        </Typography>
      </Stack>
    </Box>
  );
};

export default Footer;
