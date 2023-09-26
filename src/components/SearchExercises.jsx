import React, { useEffect, useState } from "react";
import { Box, Button, Stack, Typography, TextField } from "@mui/material";
import { fetchData, exerciseOptions } from "../utils/fetchData";
import HorizontalScrollbar from "./HorizontalScrollbar";

const SearchExercises = ({ setExercises, bodyPart, setBodyPart }) => {
  const [search, setSearch] = useState("");

  const [bodyParts, setBodyParts] = useState([]);

  useEffect(() => {
    const fetchExercisesData = async () => {
      const bodyParts = await fetchData(
        "https://exercisedb.p.rapidapi.com/exercises/bodyPartList",
        exerciseOptions
      );
      setBodyParts(["all", ...bodyParts]);
    };

    fetchExercisesData();
  }, []);

  // function to handle search exercises
  const handleSearch = async () => {
    if (search) {
      const exercisesData = await fetchData(
        `https://exercisedb.p.rapidapi.com/exercises/name/${search}?limit=20`,
        exerciseOptions
      );

      // const searchedExercises = exercisesData.filter(
      //   (item) =>
      //     item.name.toLowerCase().includes(search) ||
      //     item.bodyPart.toLowerCase().includes(search)
      //   // item.equipment.toLowerCase().includes(search) ||
      //   // item.target.toLowerCase().includes(search)
      // );

      setSearch("");
      setExercises(exercisesData);
    }
  };

  return (
    <Stack alignItems="center" mt="37px" justifyContent="center" p="20px">
      <Typography
        fontWeight={700}
        sx={{
          fontSize: { lg: "44px", xs: "30px" },
        }}
        mb="50px"
        textAlign="center"
        fontFamily="Josefin Sans"
      >
        Explore via Search <br /> or by Body Parts
      </Typography>
      <Box position="relative" mb="72px">
        <TextField
          height="76px"
          value={search}
          variant="outlined"
          placeholder="Dumbbell Bench Press"
          type="text"
          label="Search by Exercise Name"
          sx={{
            input: { fontWeight: "700", border: "none", borderRadius: "4px" },
            width: { lg: "1170px", xs: "350px" },
            backgroundColor: "#fff",
            boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.1)",
            borderRadius: "4px",
          }}
          color="error"
          onChange={(e) => {
            setSearch(e.target.value.toLowerCase());
          }}
        />
        <Button
          className="search-btn"
          sx={{
            bgcolor: "#FF2625",
            color: "#fff",
            textTransform: "none",
            width: { lg: "175px", xs: "80px" },
            fontSize: { lg: "20px", xs: "15px" },
            fontFamily: "Josefin Sans",
            fontWeight: 600,
            height: "56px",
            position: "absolute",
            right: "0",
            top: "0",
            boxShadow: "none",
          }}
          onClick={handleSearch}
        >
          Search
        </Button>
      </Box>

      <Box
        sx={{
          position: "relative",
          width: "100%",
          px: "20px",
        }}
      >
        <HorizontalScrollbar
          data={bodyParts}
          bodyPart={bodyPart}
          setBodyPart={setBodyPart}
          isBodyParts
        />
      </Box>
    </Stack>
  );
};

export default SearchExercises;
