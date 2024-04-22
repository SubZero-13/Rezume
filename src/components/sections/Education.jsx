import React, { useContext, useState } from "react";
import InputControl from "./InputControl";
import { ChevronRight, Plus } from "lucide-react";
import { ResumeData } from "../../contexts/ResumeData";
import { useForm } from "react-hook-form";

const Education = () => {
  const [educationCount, setEducationCount] = useState(1);
  const { updateEducation, resume } = useContext(ResumeData);
  const { register, handleSubmit } = useForm();

  const EducationSubmit = (data) => {
    updateEducation(data);
    console.log(data);
  };
  return (
    <form
      className="mt-2 mx-3"
      noValidate
      autoComplete="off"
      onSubmit={handleSubmit(EducationSubmit)}
    >
      {Array.from({
        length: educationCount,
      }).map((j, i) => {
        return (
          <>
            {educationCount > 1 ? (
              <h1 className="font-semibold text-xl text-primary mt-2 md:mx-0 mx-auto">
                Education {i + 1}
              </h1>
            ) : (
              ""
            )}
            <div className="flex md:gap-24 gap-3  md:flex-row flex-col">
              <InputControl
                label="Title"
                placeholder="eg. Bachelors of Technology in Computer Science"
                register={register("title")}
                defaultValue={resume.education.title}
              />
              <InputControl
                label="College/School Name"
                placeholder="Enter name of your college/school"
                register={register("college")}
                defaultValue={resume.education.college}
              />
            </div>
            <div className="flex md:gap-24 gap-3  md:flex-row flex-col mb-8">
              <InputControl
                label="Start Date"
                type="date"
                placeholder="Enter start date of this education"
                register={register("startDate")}
                defaultValue={resume.education.startDate}
              />
              <InputControl
                label="End Date"
                type="date"
                placeholder="Enter end date of this education"
                register={register("endDate")}
                defaultValue={resume.education.endDate}
              />
            </div>
          </>
        );
      })}

      <button
        className="flex mt-8 gap-2 "
        onClick={() =>
          educationCount < 2 ? setEducationCount((_) => _ + 1) : null
        }
      >
        <Plus className="bg-primary text-[white] rounded-lg p-1 md:w-7 md:h-7 w-5 h-5" />
        <span className="text-primary font-semibold text-sm text-center md:p-1">
          Add one more education
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

export default Education;
