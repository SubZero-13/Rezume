import React, { createContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";

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
  const { unregister } = useForm();

  const [experienceCount, setExperienceCount] = useState(1);
  const [projectCount, setProjectCount] = useState(1);
  const [educationCount, setEducationCount] = useState(1);

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

  const deleteExpItem = (i) => {
    delete resume.experience[`designation${i}`];
    delete resume.experience[`company${i}`];
    delete resume.experience[`duration${i}`];
    delete resume.experience[`location${i}`];
    delete resume.experience[`Ex${i}details1`];
    delete resume.experience[`Ex${i}details2`];
    delete resume.experience[`Ex${i}details3`];
    unregister(resume.experience[`designation${i}`]);
    // delete resume.experience[`designation${i}`];
    // delete resume.experience[`company${i}`];
    // delete resume.experience[`duration${i}`];
    // delete resume.experience[`location${i}`];
    // delete resume.experience[`Ex${i}details1`];
    // delete resume.experience[`Ex${i}details2`];
    updateExperience(resume.experience);
    setResume({ ...resume, experience: resume.experience });
    console.log(resume.experience);
    setExperienceCount(experienceCount - 1);
    // console.log("deleted");
  };

  const deleteProjectItem = (i) => {
    delete resume.project[`title${i}`];
    delete resume.project[`techStacks${i}`];
    delete resume.project[`deployedLink${i}`];
    delete resume.project[`githubLink${i}`];
    delete resume.project[`P${i}details1`];
    delete resume.project[`P${i}details2`];
    delete resume.project[`P${i}details3`];
    updateExperience(resume.project);
    setResume({ ...resume, project: resume.project });
    console.log(resume.project);
    setProjectCount(projectCount - 1);
  };

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
    experienceCount,
    setExperienceCount,
    projectCount,
    setProjectCount,
    educationCount,
    setEducationCount,
    deleteExpItem,
    deleteProjectItem,
  };

  return (
    <ResumeData.Provider value={value}> {props.children}</ResumeData.Provider>
  );
};

export default ResumeContextProvider;
