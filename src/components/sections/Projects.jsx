import React, { useContext, useState } from "react";
import InputControl from "./InputControl";
import { ChevronRight, Plus } from "lucide-react";
import { ResumeData } from "../../contexts/ResumeData";
import { useForm } from "react-hook-form";

const Projects = () => {
  const [projectCount, setProjectCount] = useState(1);
  const { updateProject, resume } = useContext(ResumeData);
  const { register, handleSubmit } = useForm();

  const projectSubmit = (data) => {
    updateProject(data);
    console.log(data);
  };
  return (
    <form
      className="mt-2 mx-3"
      noValidate
      autoComplete="off"
      onSubmit={handleSubmit(projectSubmit)}
    >
      {Array.from({
        length: projectCount,
      }).map((j, i) => {
        return (
          <>
            {projectCount > 1 ? (
              <h1 className="font-semibold text-xl text-primary mt-2 md:mx-0 mx-auto">
                Project {i + 1}
              </h1>
            ) : (
              ""
            )}
            <div className="flex md:gap-24  gap-1  md:flex-row flex-col">
              <InputControl
                label="Project Title"
                placeholder="Enter title eg. Chat app"
                register={register("title")}
                defaultValue={resume.project.title}
              />
              <InputControl
                label="Tech Stacks"
                placeholder="eg. ReactJS, Tailwind, Firebase"
                register={register("techStacks")}
                defaultValue={resume.project.techStacks}
              />
            </div>
            <div className="flex md:gap-24 mt-1 gap-1  md:flex-row flex-col">
              <InputControl
                label="Deployed Link"
                placeholder="Enter deployed link of project"
                register={register("deployedLink")}
                defaultValue={resume.project.deployedLink}
              />
              <InputControl
                label="Github Link"
                placeholder="Enter github link of project"
                register={register("githubLink")}
                defaultValue={resume.project.githubLink}
              />
            </div>
            <div className="font-semibold text-base mt-4 ">
              Enter project description
            </div>
            <div className="flex-col flex  gap-2 mb-8">
              <InputControl
                placeholder="Write your Project Description ( Prefer pointwise )"
                detail={true}
                register={register("description")}
                defaultValue={resume.project.description}
              />
            </div>
          </>
        );
      })}
      <button
        className="flex mt-8 gap-2 align-middle text-center"
        onClick={() =>
          projectCount < 4 ? setProjectCount((_) => _ + 1) : null
        }
      >
        <Plus className="bg-primary text-[white] rounded-lg p-1 md:w-7 md:h-7 w-5 h-5" />
        <span className="text-primary font-semibold text-sm text-center md:p-1">
          Add one more project
        </span>
      </button>

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

export default Projects;
