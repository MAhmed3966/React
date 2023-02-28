import * as React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import FormDemo from "../Forms/form.jsx";
import { AppContext } from "../../context";
import { useContext } from "react";
const steps = ["Introduction", "Education", "Skills", "Experience"];

export default function HorizontalLabelPositionBelowStepper() {
  const { value1 } = useContext(AppContext);
  const [activeStep, setState] = value1;
  return (
    <Box sx={{ width: "100%" }}>
    {activeStep <= 3 && 
      <Stepper activeStep={activeStep} alternativeLabel>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>}
      <FormDemo />
    </Box>
  );
}
