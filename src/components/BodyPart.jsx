import React from "react";
import { Stack, Typography } from "@mui/material";
import Icon from "../assets/icons/gym.png";

const BodyPart = ({ item, setBodyPart, bodyPart }) => {
  return (
    <Stack
      type="button"
      alignItems="center"
      justifyContent="center"
      className="bodyPart-card"
      sx={{
        // borderTop: bodyPart === item ? "4px solid #FF2625" : "none",
        backgroundColor: "#fff",
        borderRadius: "20px",
        borderWidth: bodyPart === item ? "2px" : "0px",
        borderColor: bodyPart === item ? "#FF2625" : "#fff",
        borderStyle: "solid",

        width: "270px",
        height: "280px",
        cursor: "pointer",
        gap: "47px",
        marginRight: "30px",
        marginLeft: "5px",
      }}
      onClick={() => {
        setBodyPart(item);
        window.scrollTo({ top: 1800, left: 100, behavior: "smooth" });
      }}
    >
      <img
        src={Icon}
        alt="dumbell"
        style={{
          width: "40px",
          height: "40px",
        }}
      />
      <Typography
        fontSize="24px"
        fontWeight="bold"
        fontFamily="Josefin Sans"
        textTransform="capitalize"
        sx={{
          color: bodyPart === item ? "#FF2625" : "#000",
        }}
      >
        {item === "all" ? "All Exercises" : item}
      </Typography>
    </Stack>
  );
};

export default BodyPart;
