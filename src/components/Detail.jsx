import React from "react";
import { Stack, Typography, Box } from "@mui/material";
import Loader from "./Loader";

const Detail = ({ exerciseDetail }) => {
  const {
    name,
    gifUrl,
    target,
    equipment,
    secondaryMuscles,
    instructions,
    bodyPart,
  } = exerciseDetail;

  return (
    <Box>
      {exerciseDetail && (
        <Stack
          gap="60px"
          sx={{
            flexDirection: { xs: "column", md: "row" },
            px: { lg: "100px", xs: "20px" },
            alignItems: "center",
            mt: { lg: "50px", xs: "30px" },
            mb: { lg: "100px", xs: "50px" },
          }}
        >
          {gifUrl ? (
            <img
              src={gifUrl || "https://i.imgur.com/2qV5d6u.gif"}
              alt={name}
              loading="lazy"
              className="detail-image"
            />
          ) : (
            <Loader />
          )}
          <Stack
            sx={{
              gap: { lg: "35px", md: "20px", xs: "10px" },
              px: { lg: "50px", xs: "20px" },
            }}
          >
            <Typography
              variant="h2"
              sx={{
                fontFamily: "Josefin Sans, sans-serif",
                fontWeight: "bold",
                mb: "30px",
              }}
              textTransform="capitalize"
            >
              {name}
            </Typography>

            <Typography
              variant="h6"
              sx={{
                fontFamily: "Josefin Sans, sans-serif",
                mb: "30px",
              }}
            >
              This <span style={{ color: "#FF2625" }}>{bodyPart}</span> exercise
              can help you become stronger, fitter and more flexible.{" "}
              {name?.charAt(0).toUpperCase() + name?.slice(1)} is a great
              exercise for your{" "}
              <span style={{ color: "#FF2625" }}>{target}</span> muscles. You
              can do this exercise with{" "}
              <span style={{ color: "#FF2625" }}>{equipment} </span> equipment.
              This also works your{" "}
              {secondaryMuscles &&
                secondaryMuscles.map((item, index) => (
                  <span key={index} style={{ color: "#FF2625" }}>
                    {item + ", "}{" "}
                  </span>
                ))}{" "}
              as secondary muscles.
            </Typography>

            <Stack>
              <Typography
                variant="h5"
                sx={{
                  fontFamily: "Josefin Sans, sans-serif",
                  fontWeight: "bold",
                  mb: "10px",
                }}
              >
                Instructions:{" "}
              </Typography>
              {instructions &&
                instructions.map((item, index) => (
                  <Typography
                    key={index}
                    variant="h6"
                    sx={{
                      fontFamily: "Josefin Sans, sans-serif",
                    }}
                  >
                    {" "}
                    {index + 1}
                    {". "}
                    {item}
                  </Typography>
                ))}
            </Stack>
          </Stack>
        </Stack>
      )}
    </Box>
  );
};

export default Detail;
