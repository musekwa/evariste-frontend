
import {
  Box,

  Typography,

  Stack,
} from "@mui/material";
import React from "react";

import ProjectAccordion from "../../components/ProjectAccordion/ProjectAccordion"


const projectCategories = [
  {
    category: "Full-Stack Web Applications",
    description: `Short description Short description Short description 
                  Shortdescription Short description Short description Short
                    description Short description Short description Short description Short description 
                  Shortdescription Short description Short description Short
                    description Short description
                    Short description Short description Short description 
                  Shortdescription Short description Short description Short
                    description Short description`,
    projects: [
      {
        title: "Memories-1 Project",
        type: "full-stack",
        description: `This is a memory project This is a memory projectThis is a memory projectThis 
              This is a memory project This is a memory projectThis is a memory projectThis is a memory project
              This is a memory project This is a memory projectThis is a memory projectThis is a memory project
              This is a memory project This is a memory projectThis is a memory projectThis is a memory project
              This is a memory project This is a memory projectThis is a memory projectThis is a memory project a memory project
          This is a memory project This is a memory projectThis is a memory projectThis is a memory project
          This is a memory project This is a memory projectThis is a memory projectThis is a memory project`,
        tools: ["javascript", "react", "mongoDB"],
        image: "http://imageurl.com",
        sourceCode: "https://github.com/musekwa",
        link: "https://externallink.com",
        createdAt: "Jan 21, 2021",
      },
      {
        title: "social network project",
        type: "full-stack",
        description:
          "This is a memory project This is a memory projectThis is a memory projectThis is a memory project",
        tools: ["javascript", "react", "mongoDB"],
        image: "http://imageurl.com",
        sourceCode: "https://github.com/musekwa",
        link: "https://externallink.com",
        createdAt: "Jan 21, 2021",
      },
      {
        title: "e-commerce project",
        type: "full-stack",
        description:
          "This is a memory project This is a memory projectThis is a memory projectThis is a memory project",
        tools: ["javascript", "react", "mongoDB"],
        image: "http://imageurl.com",
        sourceCode: "https://github.com/musekwa",
        link: "https://externallink.com",
        createdAt: "Jan 21, 2021",
      },
    ],
  },

  {
    category: "React Front-End Application",
    description: `Short description Short description Short description 
                  Shortdescription Short description Short description Short
                    description Short description Short description Short description Short description 
                  Shortdescription Short description Short description Short
                    description Short description
                    Short description Short description Short description 
                  Shortdescription Short description Short description Short
                    description Short description`,
    projects: [
      {
        title: "memories-2 project",
        type: "full-stack",
        description:
          "This is a memory project This is a memory projectThis is a memory projectThis is a memory project",
        tools: ["javascript", "react", "mongoDB"],
        image: "http://imageurl.com",
        sourceCode: "https://github.com/musekwa",
        link: "https://externallink.com",
        createdAt: "Jan 21, 2021",
      },
      {
        title: "social network project",
        type: "full-stack",
        description:
          "This is a memory project This is a memory projectThis is a memory projectThis is a memory project",
        tools: ["javascript", "react", "mongoDB"],
        image: "http://imageurl.com",
        sourceCode: "https://github.com/musekwa",
        link: "https://externallink.com",
        createdAt: "Jan 21, 2021",
      },
      {
        title: "e-commerce project",
        type: "full-stack",
        description:
          "This is a memory project This is a memory projectThis is a memory projectThis is a memory project",
        tools: ["javascript", "react", "mongoDB"],
        image: "http://imageurl.com",
        sourceCode: "https://github.com/musekwa",
        link: "https://externallink.com",
        createdAt: "Jan 21, 2021",
      },
    ],
  },
  {
    category: "Mobile Applications",
    description: `Short description Short description Short description 
                  Shortdescription Short description Short description Short
                    description Short description Short description Short description Short description 
                  Shortdescription Short description Short description Short
                    description Short description
                    Short description Short description Short description 
                  Shortdescription Short description Short description Short
                    description Short description`,
    projects: [
      {
        title: "memories-3 project",
        type: "full-stack",
        description:
          "This is a memory project This is a memory projectThis is a memory projectThis is a memory project",
        tools: ["javascript", "react", "mongoDB"],
        image: "http://imageurl.com",
        sourceCode: "https://github.com/musekwa",
        link: "https://externallink.com",
        createdAt: "Jan 21, 2021",
      },
      {
        title: "social network project",
        type: "full-stack",
        description:
          "This is a memory project This is a memory projectThis is a memory projectThis is a memory project",
        tools: ["javascript", "react", "mongoDB"],
        image: "http://imageurl.com",
        sourceCode: "https://github.com/musekwa",
        link: "https://externallink.com",
        createdAt: "Jan 21, 2021",
      },
      {
        title: "e-commerce project",
        type: "full-stack",
        description:
          "This is a memory project This is a memory projectThis is a memory projectThis is a memory project",
        tools: ["javascript", "react", "mongoDB"],
        image: "http://imageurl.com",
        sourceCode: "https://github.com/musekwa",
        link: "https://externallink.com",
        createdAt: "Jan 21, 2021",
      },
    ],
  },
];


const Portfolio = () => {


  return (
    <Box
      sx={{
        minHeight: "100vh",
      }}
    >
      <Typography sx={{ textAlign: "center", mb: 2 }} variant="body1">
        Portfolio
      </Typography>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Stack
          direction="column"
          spacing={5}
          sx={{
            width: {
              xs: "100%",
              md: "60%",
            },
          }}
        >
          {
            projectCategories ? (
              projectCategories?.map((item, index)=>(
                <ProjectAccordion
                key={index}
            category={item?.category}
            description={item?.description}
            projects={item?.projects}
          />
              ))
            )
            :
            <Typography>No Projects to be shown</Typography>
            
        }
        </Stack>
      </Box>
    </Box>
  );
};

export default Portfolio;
