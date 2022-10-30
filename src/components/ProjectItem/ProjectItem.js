import React from "react";
import { GitHub, Launch } from "@mui/icons-material";
import { Box, Typography, Paper, Button, Chip, Stack } from "@mui/material";


import ReadMore from "../../components/ReadMore/ReadMore"

// let project = {
//   title: "Memories-1 Project",
//   description:
//     "This is a memory project This is a memory projectThis is a memory projectThis is a memory project",
//   tools: ["javascript", "react", "mongoDB"],
//   image: "http://imageurl.com",
//   sourceCode: "https://github.com/musekwa",
//   link: "https://externallink.com",
//   createdAt: "Jan 21, 2021",
// };



// ProjectItem component

const ProjectItem = ({ project }) => {
  const openNewWindowTab = (url) => {
    window.open(url);
  };

  return (
    <Paper square elevation={1}>
      <Box
        sx={{
          position: "relative",
          top: 0,
        }}
      >
        <img
          style={{
            width: "100%",
            height: "100px",
            objectFit: "cover",
            backgroundColor: "slategrey",
          }}
          src="engineering2.jpeg"
          alt={project.title}
          loading="lazy"
        />
        <Typography
          sx={{
            position: "absolute",
            bottom: 20,
            left: 30,
            fontSize: "25px",
            color: "ghostwhite",
            fontWeight: "bold",
            letterSpacing: "4px",
          }}
        >
          {project.title}
        </Typography>
        <Typography
          sx={{
            position: "absolute",
            top: 3,
            right: 5,
            fontStyle: "italic",
            fontSize: "12px",
            textAlign: "right",
            color: "ghostwhite",
          }}
          align="right"
        >
          {project.createdAt}
        </Typography>
      </Box>

      <Box
        sx={{
          m: 1,
        }}
      >
        <Box>
          <Box
            sx={{
              mt: 1,
              mb: 1,
            }}
          >
            <ReadMore>
              {/* <Typography variant="body2" color="textSecondary"> */}
              {project.description}
              {/* </Typography> */}
            </ReadMore>
          </Box>
        </Box>

        <Stack direction="row" sx={{ mt: 1, mb: 1 }} spacing={2}>
          <Box
            sx={{
              width: "70%",
              display: "flex",
              justifyContent: "left",
            }}
          >
            {project.tools.map((tool, index) => (
              <Chip
                key={index}
                size="small"
                label={`${tool}`}
                sx={{ color: "slategrey", m: "2px" }}
              />
            ))}
          </Box>
          <Box
            sx={{
              width: "30%",
              display: "flex",
              justifyContent: "right",
              alignItems: "end"
            }}
          >
            <Button
              variant="text"
              onClick={() => openNewWindowTab("https://github.com/musekwa")}
            >
              <GitHub fontSize="medium" sx={{ color: "#00AACC" }} />
            </Button>
            <Button
              variant="text"
              onClick={() => openNewWindowTab("https://github.com/musekwa")}
            >
              <Launch fontSize="medium" sx={{ color: "#00AACC" }} />
            </Button>
          </Box>
        </Stack>
      </Box>
    </Paper>
  );
};

export default ProjectItem;
