import React, { useContext, useState } from "react";
import InputControl from "./InputControl";
import { ChevronRight, Plus } from "lucide-react";
import { useForm } from "react-hook-form";
import { ResumeData } from "../../contexts/ResumeData";

const Experience = () => {
  const [experienceCount, setExperienceCount] = useState(1);
  const { updateExperience, resume } = useContext(ResumeData);
  const { register, handleSubmit } = useForm();

  const ExperienceSubmit = (data) => {
    updateExperience(data);
    console.log(data);
  };
  return (
    <form
      className="mt-2 mx-3"
      noValidate
      autoComplete="off"
      onSubmit={handleSubmit(ExperienceSubmit)}
    >
      {Array.from({
        length: experienceCount,
      }).map((j, i) => {
        return (
          <>
            {experienceCount > 1 ? (
              <h1 className="font-semibold text-xl text-primary mt-2 md:mx-0 mx-auto">
                Experience {i + 1}
              </h1>
            ) : (
              ""
            )}
            <div className="flex md:gap-24 gap-1  md:flex-row flex-col">
              <InputControl
                label="Designation"
                placeholder="Enter title eg. Frontend developer"
                register={register("designation")}
                defaultValue={resume.experience.designation}
              />
              <InputControl
                label="Company Name"
                placeholder="Enter company name eg. amazon"
                register={register("company")}
                defaultValue={resume.experience.company}
              />
            </div>
            <div className="flex md:gap-24 mt-1 gap-1  md:flex-row flex-col">
              <InputControl
                label="Certificate Link"
                placeholder="Enter certificate link"
                register={register("certificatelink")}
                defaultValue={resume.experience.certificatelink}
              />
              <InputControl
                label="Location"
                placeholder="Enter location eg. Remote"
                register={register("location")}
                defaultValue={resume.experience.location}
              />
            </div>
            <div className="flex md:gap-24 mt-1 gap-1  md:flex-row flex-col">
              <InputControl
                label="Start Date"
                placeholder="Enter start date of work"
                register={register("startDate")}
                defaultValue={resume.experience.startDate}
              />
              <InputControl
                label="End Date"
                placeholder="Enter end date of work"
                register={register("endDate")}
                defaultValue={resume.experience.endDate}
              />
            </div>
            <div className="font-semibold text-base mt-4">
              Enter work description
            </div>
            <div className="flex mb-8">
              <div className="flex flex-col gap-2">
                <InputControl
                  placeholder="What your responsibilities were ( prefer pointwise )"
                  detail={true}
                  register={register("details")}
                  defaultValue={resume.experience.details}
                />
              </div>
            </div>
          </>
        );
      })}
      <button
        className="flex mt-8 gap-2"
        onClick={() =>
          experienceCount < 3 ? setExperienceCount((_) => _ + 1) : null
        }
      >
        <Plus className="bg-primary text-[white] rounded-lg p-1 md:w-7 md:h-7 w-5 h-5" />
        <span className="text-primary font-semibold text-sm text-center md:p-1">
          Add one more experience
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

export default Experience;
