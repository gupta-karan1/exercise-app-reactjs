import React, { useState, useEffect } from "react";
import { Box, Typography, Stack } from "@mui/material";
import Pagination from "@mui/material/Pagination";
import ExerciseCard from "./ExerciseCard";
import { exerciseOptions, fetchData } from "../utils/fetchData";

const Exercises = ({ setExercises, exercises, bodyPart }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const exercisesPerPage = 6;

  const paginate = (e, value) => {
    setCurrentPage(value);
    window.scrollTo({ top: 1800, left: 100, behavior: "smooth" });
  };

  const indexOfLastExercise = currentPage * exercisesPerPage;
  const indexOfFirstExercise = indexOfLastExercise - exercisesPerPage;
  const currentExercises = exercises.slice(
    indexOfFirstExercise,
    indexOfLastExercise
  );

  useEffect(() => {
    const fetchExerciseData = async () => {
      let exerciseData = [];

      if (bodyPart === "all") {
        exerciseData = await fetchData(
          "https://exercisedb.p.rapidapi.com/exercises?limit=20",
          exerciseOptions
        );
      } else {
        exerciseData = await fetchData(
          `https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodyPart}?limit=20`,
          exerciseOptions
        );
      }

      setExercises(exerciseData);
    };

    fetchExerciseData();
  }, [bodyPart, setExercises]);

  return (
    <Box id="exercises" sx={{ mt: { lg: "20px" } }} mt="10px" p="20px">
      <Typography
        variant="h4"
        sx={{
          fontFamily: "Josefin Sans",
          marginLeft: "20px",
        }}
      >
        Showing{" "}
        <span
          style={{
            color: "#FF2625",
          }}
        >
          {exercises.length}{" "}
        </span>
        Exercises
      </Typography>

      <Stack
        direction="row"
        sx={{
          gap: { lg: "50px", xs: "20px" },
        }}
        flexWrap="wrap"
        justifyContent="space-evenly"
        mt="50px"
      >
        {currentExercises.map((exercise, index) => (
          <ExerciseCard key={index} exercise={exercise} />
        ))}
      </Stack>
      <Stack mt="100px" alignItems="center">
        {exercises.length > 6 && (
          <Pagination
            count={Math.ceil(exercises.length / exercisesPerPage)}
            variant="outlined"
            shape="rounded"
            color="secondary"
            defaultPage={1}
            page={currentPage}
            size="large"
            onChange={paginate}
          />
        )}
      </Stack>
    </Box>
  );
};

export default Exercises;
