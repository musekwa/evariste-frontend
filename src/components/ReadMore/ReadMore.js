import { Box, Typography } from "@mui/material";
import React, { useState } from "react";


const ReadMore = ({ children }) => {
  const text = children;
  const [isReadMore, setIsReadMore] = useState(true);
  const toggleReadMore = () => {
    setIsReadMore(!isReadMore);
  };

  return (
    <Box>
      <Typography
        sx={{
          color: "slategrey",
          fontSize: "14px",
          textAlign: "justify",
        }}
      >
        {isReadMore ? text.slice(0, 150) : text}
        <span
          style={{
            display: "inline",
            color: "#00AACC",
            cursor: "pointer",
            fontSize: "18px",
          }}
          onClick={toggleReadMore}
        >
          {isReadMore ? "...read more" : " show less"}
        </span>
      </Typography>
    </Box>
  );
};

export default ReadMore;
