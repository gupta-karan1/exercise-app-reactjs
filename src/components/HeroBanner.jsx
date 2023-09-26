import React from "react";
import { Box, Button, Stack, Typography } from "@mui/material";
import HeroBannerImage from "../assets/images/banner.png";

const HeroBanner = () => {
  return (
    <Box
      sx={{
        mt: { lg: "100px", xs: "70px" },
        mb: { sm: "50px" },
      }}
      position="relative"
      p="20px"
      px="60px"
    >
      <Typography
        color="#FF2625"
        fontWeight={600}
        fontSize="26px"
        fontFamily="Josefin Sans"
      >
        Fitness Catalogue for Everyone
      </Typography>
      <Typography
        fontFamily="Josefin Sans"
        fontWeight={700}
        sx={{
          fontSize: { lg: "44px", xs: "40px" },
        }}
        mb="23px"
        mt="30px"
      >
        Sweat, Smile <br /> and Repeat
      </Typography>
      <Typography
        fontSize="22px"
        lineHeight="35px"
        mb={3}
        fontFamily="Josefin Sans"
      >
        Explore the world of fitness with us
      </Typography>
      <Button
        variant="contained"
        color="error"
        href="#exercises"
        sx={{
          fontFamily: "Josefin Sans",
          fontWeight: 600,
          fontSize: "18px",
          borderRadius: "4px",
          padding: "10px 30px",
          textTransform: "capitalize",
          boxShadow: "none",
          backgroundColor: "#FF2625",
        }}
      >
        Explore Exercises
      </Button>
      <Typography
        fontWeight={600}
        color="#FF2625"
        sx={{
          opacity: 0.1,
          display: { lg: "block", xs: "none" },
        }}
        fontSize="200px"
      >
        Exercise
      </Typography>
      <img src={HeroBannerImage} alt="banner" className="hero-banner-img" />
    </Box>
  );
};

export default HeroBanner;
