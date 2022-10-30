import { KeyboardArrowLeft, KeyboardArrowRight } from "@mui/icons-material";
import { Button, MobileStepper, useTheme } from "@mui/material";
import React from "react";

const CustomMobileStepper = ({  projects, setActiveStep, activeStep }) => {
  const handleNext = () => {
    setActiveStep((previActiveStep) => previActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((previActiveStep) => previActiveStep - 1);
  };

  const theme = useTheme();

  return (
    <MobileStepper
      steps={projects?.length}
      position="static"
      variant="text"
      activeStep={activeStep}
      nextButton={
        <Button
          size="small"
          onClick={handleNext}
          disabled={activeStep === projects?.length - 1}
          sx={{
            textTransform: "none",
            color: "white",
          }}
        >
          {theme.direction === "rtl" ? (
            <KeyboardArrowLeft />
          ) : (
            <KeyboardArrowRight />
          )}
          Next
        </Button>
      }
      backButton={
        <Button
          size="small"
          onClick={handleBack}
          disabled={activeStep === 0}
          sx={{
            textTransform: "none",
            color: "white",
          }}
        >
          {theme.direction === "rtl" ? (
            <KeyboardArrowRight />
          ) : (
            <KeyboardArrowLeft />
          )}
          Back
        </Button>
      }
      sx={{
        backgroundColor: "#00AACC",
        color: "white"
      }}
    />
  );
};

export default CustomMobileStepper;
