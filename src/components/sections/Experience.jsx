import React, { useContext } from "react";
import InputControl from "./InputControl";
import { ChevronLeft, ChevronRight, Plus, Trash } from "lucide-react";
import { useForm } from "react-hook-form";
import { ResumeData } from "../../contexts/ResumeData";

const Experience = ({ activeIndex, setactiveIndex }) => {
  const {
    experienceCount,
    setExperienceCount,
    deleteExpItem,
    updateExperience,
    resume,
  } = useContext(ResumeData);
  const { register, handleSubmit } = useForm();

  const ExperienceSubmit = (data) => {
    updateExperience(data);
    console.log(resume.experience);
    // activeIndex === 5 ? setactiveIndex(0) : setactiveIndex(activeIndex + 1);
  };

  // const deleteItem = (i) => {
  //   delete resume.experience[`designation${i}`];
  //   delete resume.experience[`company${i}`];
  //   delete resume.experience[`duration${i}`];
  //   delete resume.experience[`location${i}`];
  //   delete resume.experience[`Ex${i}details1`];
  //   delete resume.experience[`Ex${i}details2`];
  //   delete resume.experience[`Ex${i}details3`];
  //   setExperienceCount(experienceCount - 1);
  //   localStorage.setItem(
  //     "resume.experience",
  //     JSON.stringify(resume.experience)
  //   );
  //   updateExperience(resume.experience);

  //   console.log(resume.experience);
  // };
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
              <div className="flex justify-between">
                <h1 className="font-semibold text-xl text-primary mt-2 md:mx-0 mx-auto">
                  Experience {i + 1}
                </h1>
                <span
                  className="text-primary cursor-pointer"
                  onClick={() => deleteExpItem(i)}
                >
                  <Trash />
                </span>
              </div>
            ) : (
              ""
            )}
            <div className="flex md:gap-24 gap-1  md:flex-row flex-col">
              <InputControl
                label="Designation"
                placeholder="Enter title eg. Frontend developer"
                register={register(`designation${i}`)}
                defaultValue={resume.experience[`designation${i}`]}
              />
              <InputControl
                label="Company Name"
                placeholder="Enter company name eg. amazon"
                register={register(`company${i}`)}
                defaultValue={resume.experience[`company${i}`]}
              />
            </div>
            <div className="flex md:gap-24 mt-1 gap-1  md:flex-row flex-col">
              <InputControl
                label="Duration"
                placeholder="2020-2023"
                register={register(`duration${i}`)}
                defaultValue={resume.experience[`duration${i}`]}
              />
              <InputControl
                label="Location"
                placeholder="Enter location eg. Remote"
                register={register(`location${i}`)}
                defaultValue={resume.experience[`location${i}`]}
              />
            </div>

            <div className="font-semibold text-base mt-4">
              Enter work description
            </div>
            <div className="flex mb-8 flex-col">
              <div className="flex flex-col gap-2">
                <InputControl
                  placeholder="What your responsibilities were"
                  detail={true}
                  register={register(`Ex${i}details1`)}
                  defaultValue={resume.experience[`Ex${i}details1`]}
                />
              </div>
              <div className="flex flex-col gap-2">
                <InputControl
                  placeholder="What your responsibilities were"
                  detail={true}
                  register={register(`Ex${i}details2`)}
                  defaultValue={resume.experience[`Ex${i}details2`]}
                />
              </div>
              <div className="flex flex-col gap-2">
                <InputControl
                  placeholder="What your responsibilities were"
                  register={register(`Ex${i}details3`)}
                  detail={true}
                  defaultValue={resume.experience[`Ex${i}details3`]}
                />
              </div>
            </div>
          </>
        );
      })}
      {experienceCount < 2 && (
        <div
          className="flex mt-8 gap-2 cursor-pointer"
          onClick={() =>
            experienceCount < 2 ? setExperienceCount((_) => _ + 1) : null
          }
        >
          <Plus className="bg-primary text-[white] rounded-lg p-1 md:w-7 md:h-7 w-5 h-5" />
          <span className="text-primary font-semibold text-sm text-center md:p-1">
            Add one more experience
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

export default Experience;
