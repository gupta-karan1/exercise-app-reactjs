import React from "react";
import { Box, Stack, Typography } from "@mui/material";
import Loader from "./Loader";

const ExerciseVideos = ({ exerciseVideos, name }) => {
  // console.log(exerciseVideos);

  if (!exerciseVideos.length) return <Loader />;
  return (
    <Box
      sx={{
        marginTop: { lg: "20px", xs: "10px" },
      }}
      px={{ lg: "100px", xs: "20px" }}
    >
      <Typography
        variant="h4"
        mb="20px"
        fontFamily="Josefin Sans"
        textTransform="capitalize"
      >
        Watch{" "}
        <span
          style={{
            color: "#ff2625",
            textTransform: "capitalize",
          }}
        >
          {name}
        </span>{" "}
        videos
      </Typography>

      <Stack
        justifyContent="flex-start"
        flexWrap="wrap"
        alignItems="center"
        sx={{
          flexDirection: { lg: "row", xs: "column" },
          gap: { lg: "20px", xs: "60px" },
          justifyContent: { lg: "space-between", xs: "center" },
        }}
      >
        {exerciseVideos?.slice(0, 3).map((item, index) => (
          <a
            href={`https://www.youtube.com/watch?v=${item.video.videoId}`}
            target="_blank"
            rel="noreferrer"
            key={index}
            className="exercise-video"
          >
            <img
              src={item.video.thumbnails[0].url}
              alt={item.video.title}
              style={{ borderRadius: "10px" }}
            />
            <Box>
              <Typography
                fontFamily="Josefin Sans"
                variant="subtitle1"
                mt="5px"
                color="#000"
              >
                {item.video.channelName.slice(0, 40) + "..."}
              </Typography>
              <Typography
                variant="h6"
                mt="5px"
                color="#000"
                fontFamily="Josefin Sans"
              >
                {item.video.title.slice(0, 40) + "..."}
              </Typography>
            </Box>
          </a>
        ))}
      </Stack>
    </Box>
  );
};

export default ExerciseVideos;
