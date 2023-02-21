import React, { useState } from "react";
import Introduction from "./formIntroduction";
import Education from "./formEducation";
import Skills from "./formSkills";
import Experience from "./formExperience";
import { AppContext } from "../../context";
import { useContext } from "react";
export default function FormDemo(props) {
  // Constants
  const { step } = props;
  const { value1 } = useContext(AppContext);
  const [activeStep, setState] = value1;
//  Functionality 
  const GetForm = () => {
    switch (activeStep) {
      case 0:
        return (
          <div>
            <Introduction />
          </div>
        );
      case 1:
        return (
          <div>
            <Education />
          </div>
        );
      case 2:
        return (
          <div>
            <Experience />
          </div>
        );
      case 3:
        return (
          <div>
            <Skills />
          </div>
        );
      default:
        <div>Hello</div>;
    }
  };
  return (
    <div>
      <GetForm />
    </div>
  );
}
