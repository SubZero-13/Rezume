import React, { useContext } from "react";
import InputControl from "./InputControl";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useForm } from "react-hook-form";
import { ResumeData } from "../../contexts/ResumeData";

const Skills = ({ activeIndex, setactiveIndex }) => {
  const { updateSkills, resume } = useContext(ResumeData);
  const { register, handleSubmit } = useForm();

  const skillSubmit = (data) => {
    updateSkills(data);
    activeIndex === 5 ? setactiveIndex(0) : setactiveIndex(activeIndex + 1);
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
      <div className="flex justify-between my-10">
        <div className="sm:flex sm:gap-4">
          <button
            className="rounded-lg bg-primary md:px-6 md:py-3 px-3 py-1 text-base font-semibold flex md:gap-2 gap-1 text-center text-[white] shadow"
            onClick={() => {
              setactiveIndex(activeIndex - 1);
            }}
          >
            <ChevronLeft width={28} height={28} />
            Prev
          </button>
        </div>
        <div className="sm:flex sm:gap-4">
          <button
            className="rounded-lg bg-primary md:px-6 md:py-3 px-3 py-1 text-base font-semibold flex md:gap-2 gap-1 text-center text-[white] shadow"
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
