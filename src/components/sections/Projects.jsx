import React, { useContext, useState } from "react";
import InputControl from "./InputControl";
import { ChevronLeft, ChevronRight, Plus } from "lucide-react";
import { ResumeData } from "../../contexts/ResumeData";
import { useForm } from "react-hook-form";

const Projects = ({ activeIndex, setactiveIndex }) => {
  const { projectCount, setProjectCount, updateProject, resume } =
    useContext(ResumeData);
  const { register, handleSubmit } = useForm();

  const projectSubmit = (data) => {
    updateProject(data);
    setactiveIndex(activeIndex + 1);
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
          <div>
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
                register={register(`title${i}`)}
                defaultValue={resume.project[`title${i}`]}
              />
              <InputControl
                label="Tech Stacks"
                placeholder="eg. ReactJS, Tailwind, Firebase"
                register={register(`techStacks${i}`)}
                defaultValue={resume.project[`techStacks${i}`]}
              />
            </div>
            <div className="flex md:gap-24 mt-1 gap-1  md:flex-row flex-col">
              <InputControl
                label="Deployed Link"
                placeholder="Enter deployed link of project"
                register={register(`deployedLink${i}`)}
                defaultValue={resume.project[`deployedLink${i}`]}
              />
              <InputControl
                label="Github Link"
                placeholder="Enter github link of project"
                register={register(`githubLink${i}`)}
                defaultValue={resume.project[`githubLink${i}`]}
              />
            </div>
            {/* <div className="flex mb-8 flex-col">
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
            </div> */}
            <div className="font-semibold text-base mt-4">
              Enter Project description
            </div>
            <div className="flex mb-8 flex-col">
              <div className="flex flex-col gap-2">
                <InputControl
                  placeholder="What your responsibilities were"
                  detail={true}
                  register={register(`P${i + 1}details1`)}
                  defaultValue={resume.experience[`P${i + 1}details1`]}
                />
              </div>
              <div className="flex flex-col gap-2">
                <InputControl
                  placeholder="What your responsibilities were"
                  detail={true}
                  register={register(`P${i + 1}details2`)}
                  defaultValue={resume.experience[`P${i + 1}details2`]}
                />
              </div>
              <div className="flex flex-col gap-2">
                <InputControl
                  placeholder="What your responsibilities were"
                  register={register(`P${i + 1}details3`)}
                  detail={true}
                  defaultValue={resume.experience[`P${i + 1}details3`]}
                />
              </div>
            </div>
          </div>
        );
      })}
      {projectCount < 3 && (
        <div
          className="flex mt-8 gap-2 align-middle text-center cursor-pointer"
          onClick={() =>
            projectCount < 4 ? setProjectCount((_) => _ + 1) : null
          }
        >
          <Plus className="bg-primary text-[white] rounded-lg p-1 md:w-7 md:h-7 w-5 h-5" />
          <span className="text-primary font-semibold text-sm text-center md:p-1">
            Add one more project
          </span>
        </div>
      )}

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

export default Projects;
