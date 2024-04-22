import React, { useContext } from "react";
import InputControl from "./InputControl";
import { ChevronRight } from "lucide-react";
import { useForm } from "react-hook-form";
import { ResumeData } from "../../contexts/ResumeData";

const Skills = () => {
  const { updateSkills, resume } = useContext(ResumeData);
  const { register, handleSubmit } = useForm();

  const skillSubmit = (data) => {
    updateSkills(data);
    console.log(data);
  };
  return (
    <form
      className="mt-2 mx-3"
      noValidate
      autoComplete="off"
      onSubmit={handleSubmit(skillSubmit)}
    >
      <div className="flex md:gap-24 gap-1  md:flex-row flex-col">
        <InputControl
          label="Languages"
          placeholder="Programming Languages eg: Python"
          register={register("languages")}
          defaultValue={resume.skills.languages}
        />

        <InputControl
          label="Frameworks"
          placeholder="Familiar Frameworks eg. Node.JS"
          register={register("frameworks")}
          defaultValue={resume.skills.frameworks}
        />
      </div>
      <div className="flex md:gap-24 mt-1 gap-1  md:flex-row flex-col">
        <InputControl
          label="Developer Tools"
          placeholder="Familiar Tools eg. Git"
          register={register("tools")}
          defaultValue={resume.skills.tools}
        />
        <InputControl
          label="Database"
          placeholder=" eg. MongoDB"
          register={register("database")}
          defaultValue={resume.skills.database}
        />
      </div>

      {/* next button starts*/}
      <div className="fixed bottom-20 right-40">
        <div className="sm:flex sm:gap-4 ">
          <button
            className="rounded-lg bg-primary px-6 py-3 text-base font-semibold flex gap-2 text-center text-[white] shadow"
            // onClick={() => {
            //   activeIndex === 5
            //     ? setactiveIndex(0)
            //     : setactiveIndex(activeIndex + 1);
            // }}
            type="submit"
          >
            Next
            <ChevronRight width={28} height={28} />
          </button>
        </div>
      </div>
      {/* next button ends */}
    </form>
  );
};

export default Skills;
