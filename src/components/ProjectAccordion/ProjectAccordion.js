import React, { useState } from "react";

import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
  Box,
} from "@mui/material";
import {
  ExpandMore,
} from "@mui/icons-material";
import ProjectItem from "../ProjectItem/ProjectItem";
import CustomMobileStepper from "../CustomMobileStepper/CustomMobileStepper";


const ProjectAccordion = ({ category, description, projects }) => {

  const [activeStep, setActiveStep] = useState(0);

  return (
    <Accordion
      elevation={1}
      sx={{
        minHeight: "20vh",
        backgroundColor: "#00AACC",
      }}
    >
      <AccordionSummary
        expandIcon={
          <ExpandMore
            fontSize="large"
            sx={{
              color: "white",
            }}
          />
        }
        aria-controls="panel1a-content"
        id="pane1a-header"
        sx={{
          backgroundColor: "#00AACC",
        }}
      >
        <Box>
          <Typography
            sx={{
              color: "ghostwhite",
            }}
          >
            {category} <span>{`(${projects?.length} Projects)`}</span>
          </Typography>
          <Typography
            sx={{
              fontSize: "12px",
              lineHeight: "16px",
              color: "ghostwhite",
              fontStyle: "italic",
              mt: 2,
            }}
          >
            {description}
          </Typography>
        </Box>
      </AccordionSummary>
      <AccordionDetails
        sx={{
          backgroundColor: "#00AACC",
        }}
      >
        <Box>
          <ProjectItem project={projects[activeStep]} />
          <CustomMobileStepper
            activeStep={activeStep}
            setActiveStep={setActiveStep}
            projects={projects}
          />
        </Box>
      </AccordionDetails>
    </Accordion>
  );
};

export default ProjectAccordion;
