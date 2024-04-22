import React, { createContext, useEffect, useState } from "react";

export const ResumeData = createContext();
const ResumeContextProvider = (props) => {
  const [resume, setResume] = useState(
    JSON.parse(localStorage.getItem("resumeLocal")) || {
      personal: [],
      education: [],
      experience: [],
      skills: [],
      project: [],
      acheivement: {},
    }
  );

  function updatePersonal(data) {
    setResume({ ...resume, personal: data });
  }

  function updateEducation(data) {
    setResume({ ...resume, education: data });
  }

  function updateSkills(data) {
    setResume({ ...resume, skills: data });
  }

  function updateExperience(data) {
    setResume({ ...resume, experience: data });
  }

  function updateProject(data) {
    setResume({ ...resume, project: data });
  }

  function updateAcheivement(data) {
    setResume({ ...resume, acheivement: data });
  }

  useEffect(() => {
    localStorage.setItem("resumeLocal", JSON.stringify(resume));
  }, [resume]);

  const value = {
    resume,
    updatePersonal,
    updateEducation,
    updateSkills,
    updateExperience,
    updateProject,
    updateAcheivement,
  };

  return (
    <ResumeData.Provider value={value}> {props.children}</ResumeData.Provider>
  );
};

export default ResumeContextProvider;
