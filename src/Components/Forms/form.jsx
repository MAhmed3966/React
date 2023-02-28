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
  const { value1, value3 } = useContext(AppContext);
  const [activeStep, setState] = value1;
  const [formData, setFormData] = value3;
  let data = formData;
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
        return (
          <div>
            {/* {console.log(formData)} */}
            {formData &&
              formData.map((item, index) => (
                <div key={index}>
                  {Object.keys(item).map((key) => (
                    <p key={key}>
                      {key}:{item[key]}
                    </p>
                  ))}
                </div>
              ))}
          </div>
        );
    }
  };
  return (
    <div>
      <GetForm />
    </div>
  );
}
