import { Box, Typography } from "@mui/material";
import React, { useContext } from "react";
import BodyPart from "./BodyPart";
import { ScrollMenu, VisibilityContext } from "react-horizontal-scrolling-menu";
import RightArrowIcon from "../assets/icons/right-arrow.png";
import LeftArrowIcon from "../assets/icons/left-arrow.png";

const LeftArrowComp = () => {
  const { scrollPrev } = useContext(VisibilityContext);

  return (
    <Typography onClick={() => scrollPrev()} className="right-arrow">
      <img src={LeftArrowIcon} alt="left-arrow" />
    </Typography>
  );
};

const RightArrowComp = () => {
  const { scrollNext } = useContext(VisibilityContext);

  return (
    <Typography onClick={() => scrollNext()} className="left-arrow">
      <img src={RightArrowIcon} alt="right-arrow" />
    </Typography>
  );
};

const HorizontalScrollbar = ({ data, bodyPart, setBodyPart }) => {
  return (
    <ScrollMenu
      Arrows={() => (
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            width: "100%",
            height: "100%",
          }}
        >
          <LeftArrowComp />
          <RightArrowComp />
        </Box>
      )}
    >
      {data.map((item) => (
        <Box
          key={item.id || item}
          itemId={item.id || item}
          title={item.id || item}
        >
          <BodyPart bodyPart={bodyPart} setBodyPart={setBodyPart} item={item} />
        </Box>
      ))}
    </ScrollMenu>
  );
};

export default HorizontalScrollbar;
