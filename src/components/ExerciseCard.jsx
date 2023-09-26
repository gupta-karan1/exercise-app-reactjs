import React from "react";
import { Link } from "react-router-dom";
import { Stack, Typography, Box } from "@mui/material";

const ExerciseCard = ({ exercise }) => {
  return (
    <Box
      sx={{
        width: { lg: "420px", xs: "300px" },
        // height: { lg: "500px", xs: "400px" },
        boxShadow: "0 0 10px rgba(0,0,0,0.1)",
        backgroundColor: "#fff",
        borderRadius: "20px",
        // overflow: "scroll",
        margin: "10px",
        transition: "all 0.3s ease",
        "&:hover": {
          transform: "scale(1.05)",
        },
        padding: "20px",
      }}
    >
      <Link
        to={`/exercise/${exercise.id}`}
        style={{
          textDecoration: "none",
        }}
      >
        <img
          src={exercise.gifUrl}
          alt={exercise.name}
          loading="lazy"
          style={{
            // width: "400px",
            width: "100%",
            // height: "400px",
            objectFit: "cover",
            borderRadius: "20px",
            // boxShadow: "0 0 10px rgba(0,0,0,0.1)",
          }}
        />

        <Stack
          direction="row"
          justifyContent="flex-start"
          flexWrap="wrap"
          alignItems="center"
          mt={2}
          gap={1}
          mb={2}
        >
          <Typography
            variant="subtitle2"
            sx={{
              color: "#000",
              backgroundColor: "#cae9ff",
              borderRadius: "50px",
              paddingY: "7px",
              paddingX: "20px",
              width: "fit-content",
              fontFamily: "Josefin Sans",
            }}
            textTransform="capitalize"
          >
            {exercise.bodyPart}
          </Typography>

          <Typography
            variant="subtitle2"
            sx={{
              color: "#000",
              backgroundColor: "#cae9ff",
              borderRadius: "50px",
              paddingY: "7px",
              paddingX: "20px",
              width: "fit-content",
              fontFamily: "Josefin Sans",
            }}
            textTransform="capitalize"
          >
            {exercise.target}
          </Typography>

          <Typography
            variant="subtitle2"
            sx={{
              color: "#000",
              backgroundColor: "#cae9ff",
              borderRadius: "50px",
              paddingY: "7px",
              paddingX: "20px",
              width: "fit-content",
              fontFamily: "Josefin Sans",
            }}
            textTransform="capitalize"
          >
            {exercise.equipment}
          </Typography>
        </Stack>
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <Typography
            variant="h5"
            sx={{
              color: "black",
              fontFamily: "Josefin Sans",
              fontWeight: "bold",
            }}
            mt="10px"
            textTransform="capitalize"
          >
            {exercise.name}
          </Typography>
          {/* <Button variant="outlined">View Exercise</Button> */}
        </Stack>
      </Link>
    </Box>
  );
};

export default ExerciseCard;
