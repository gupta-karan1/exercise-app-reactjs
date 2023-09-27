import React from "react";
import { Stack, CircularProgress } from "@mui/material";
// import { InfinitySpin } from "react-loader-spinner";

const Loader = () => {
  return (
    <Stack
      direction="row"
      justifyContent="center"
      alignItems="center"
      width="100%"
    >
      <CircularProgress />
    </Stack>
  );
};

export default Loader;
