import React from "react";
import {
  Stack,
  Typography,
  Button,
  CircularProgress,
  Box,
} from "@mui/material";
import BodyPartImage from "../assets/icons/body-part.png";
import EquipmentImage from "../assets/icons/equipment.png";
import TargetImage from "../assets/icons/target.png";

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
      {!exerciseDetail && (
        <CircularProgress
          sx={{
            color: "#FF2625",
            width: "100px !important",
            height: "100px !important",
          }}
        />
      )}

      {exerciseDetail && (
        <Stack
          gap="60px"
          sx={{
            flexDirection: { xs: "column", md: "row" },
            p: "20px",
            alignItems: "center",
          }}
        >
          <img
            src={gifUrl}
            alt={name}
            loading="lazy"
            className="detail-image"
          />
          <Stack
            sc={{
              gap: { lg: "35px", md: "20px", xs: "10px" },
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
                secondaryMuscles.map((item) => (
                  <span style={{ color: "#FF2625" }}>{item + ", "} </span>
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
