import React from "react";
import { Box, Stack, Typography } from "@mui/material";
import Loader from "./Loader";
import HorizontalScrollbar from "./HorizontalScrollbar";

const SimilarExercises = ({
  targetMuscleExercises,
  equipmentExercises,
  target,
  equipment,
}) => {
  return (
    <Box
      sx={{
        mt: { lg: "20px", xs: "30px" },
        mb: "50px",
        px: { lg: "100px", xs: "20px" },
      }}
    >
      <Typography
        variant="h4"
        mb="20px"
        fontFamily="Josefin Sans"
        textTransform="capitalize"
      >
        Similar{" "}
        <span
          style={{
            color: "#ff2625",
            textTransform: "capitalize",
          }}
        >
          {target}
        </span>{" "}
        Muscle Exercises
      </Typography>
      <Stack
        direction="row"
        sx={{
          position: "relative",
          mb: "50px",
        }}
      >
        {targetMuscleExercises.length ? (
          <HorizontalScrollbar data={targetMuscleExercises} />
        ) : (
          <Loader />
        )}
      </Stack>
      <Typography
        variant="h4"
        mb="20px"
        fontFamily="Josefin Sans"
        textTransform="capitalize"
      >
        Similar{" "}
        <span
          style={{
            color: "#ff2625",
            textTransform: "capitalize",
          }}
        >
          {equipment}
        </span>{" "}
        Exercises
      </Typography>
      <Stack
        direction="row"
        sx={{
          position: "relative",
        }}
      >
        {equipmentExercises.length ? (
          <HorizontalScrollbar data={equipmentExercises} />
        ) : (
          <Loader />
        )}
      </Stack>
    </Box>
  );
};

export default SimilarExercises;
