import React, { useEffect, useState } from "react";
import PersonalInfo from "./sections/PersonalInfo";
import Experience from "./sections/Experience";
import Projects from "./sections/Projects";
import Skills from "./sections/Skills";
import Education from "./sections/Education";
import Acheivement from "./sections/Acheivements";

const Editor = ({ sections, activeIndex, setactiveIndex }) => {
  const renderContent = React.useCallback(() => {
    switch (activeIndex) {
      case 0:
        return (
          <PersonalInfo
            activeIndex={activeIndex}
            setactiveIndex={setactiveIndex}
          />
        );

      case 1:
        return (
          <Experience
            activeIndex={activeIndex}
            setactiveIndex={setactiveIndex}
          />
        );

      case 2:
        return (
          <Projects activeIndex={activeIndex} setactiveIndex={setactiveIndex} />
        );

      case 3:
        return (
          <Skills activeIndex={activeIndex} setactiveIndex={setactiveIndex} />
        );

      case 4:
        return (
          <Education
            activeIndex={activeIndex}
            setactiveIndex={setactiveIndex}
          />
        );

      case 5:
        return (
          <Acheivement
            activeIndex={activeIndex}
            setactiveIndex={setactiveIndex}
          />
        );
      default:
        return null;
    }
  }, [activeIndex]);
  return (
    <div className="flex mt-6 flex-col  md:mt-20 md:max-w-[900px] md:mx-auto mx-20 md:px-20">
      <h1 className="font-semibold text-3xl text-[#676765] md:mx-0 mx-auto">
        {sections[activeIndex].title}
      </h1>

      {renderContent()}
    </div>
  );
};

export default Editor;
