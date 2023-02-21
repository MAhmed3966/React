import HorizontalNonLinearStepper from "./Components/MaterialUI/stepper";
import { AppContext } from "./context";
import * as React from 'react';
export default function App() {
  const [activeStep, setActiveStep] = React.useState(0);
  // const [formValidated, setFormValidated] = React.useState(false);
  const submitRef = React.useRef();
  const [formValidated, setFormValidated] = React.useState(false);
  function setState(value){
    setActiveStep(value)
  }
  return (
    <div>
      <AppContext.Provider value = {{value1:[activeStep,setState], value2:[formValidated, setFormValidated],submitRef:[submitRef]}}>
        <HorizontalNonLinearStepper />
      </AppContext.Provider>
    </div>
  );
}
