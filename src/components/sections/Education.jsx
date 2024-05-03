import React, { useContext } from "react";
import InputControl from "./InputControl";
import { ChevronLeft, ChevronRight, Plus } from "lucide-react";
import { ResumeData } from "../../contexts/ResumeData";
import { useForm } from "react-hook-form";

const Education = ({ activeIndex, setactiveIndex }) => {
  const { educationCount, setEducationCount, updateEducation, resume } =
    useContext(ResumeData);
  const { register, handleSubmit } = useForm();

  const EducationSubmit = (data) => {
    updateEducation(data);
    activeIndex === 5 ? setactiveIndex(0) : setactiveIndex(activeIndex + 1);
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
                register={register(`title${i}`)}
                defaultValue={resume.education[`title${i}`]}
              />
              <InputControl
                label="College/School Name"
                placeholder="Enter name of your college/school"
                register={register(`college${i}`)}
                defaultValue={resume.education[`college${i}`]}
              />
            </div>
            <div className="flex md:gap-24 gap-3  md:flex-row flex-col mb-8">
              <InputControl
                label="Start Date"
                placeholder="Enter start date of this education"
                register={register(`startDate${i}`)}
                defaultValue={resume.education[`startDate${i}`]}
              />
              <InputControl
                label="End Date"
                placeholder="Enter end date of this education"
                register={register(`endDate${i}`)}
                defaultValue={resume.education[`endDate${i}`]}
              />
            </div>
          </>
        );
      })}

      <div
        className="flex mt-8 gap-2 cursor-pointer"
        onClick={() =>
          educationCount < 2 ? setEducationCount((_) => _ + 1) : null
        }
      >
        <Plus className="bg-primary text-[white] rounded-lg p-1 md:w-7 md:h-7 w-5 h-5" />
        <span className="text-primary font-semibold text-sm text-center md:p-1">
          Add one more education
        </span>
      </div>

      {/* prev button starts*/}
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

export default Education;
