import React, { useContext } from "react";
import InputControl from "./InputControl";
import { ResumeData } from "../../contexts/ResumeData";
import { ChevronRight } from "lucide-react";
import { useForm } from "react-hook-form";

const PersonalInfo = ({ activeIndex, setactiveIndex }) => {
  const { updatePersonal, resume } = useContext(ResumeData);
  const { register, handleSubmit } = useForm();

  const PersonalSubmit = (data) => {
    updatePersonal(data);
    console.log(data);
  };
  return (
    <form
      className="mt-2 md:mx-3 px-2"
      noValidate
      autoComplete="off"
      onSubmit={handleSubmit(PersonalSubmit)}
    >
      <div className="flex md:gap-24 gap-1  md:flex-row flex-col">
        <InputControl
          label="First Name"
          name="firstName"
          placeholder="Enter your first name"
          register={register("firstName")}
          // onChange={handleSubmit(PersonalSubmit)}
          defaultValue={resume.personal.firstName}
        />

        <InputControl
          label="Last Name"
          name="LastName"
          placeholder="Enter your last name"
          register={register("lastName")}
          defaultValue={resume.personal.lastName}
        />
      </div>
      <div className="flex md:gap-24 mt-1 gap-1 md:flex-row flex-col">
        <InputControl
          label="Linkedin Link"
          placeholder="Enter your linkedin profile link"
          register={register("linkedin")}
          defaultValue={resume.personal.linkedin}
        />
        <InputControl
          label="Github Link"
          placeholder="Enter your github profile link"
          register={register("github")}
          defaultValue={resume.personal.github}
        />
      </div>

      <div className="flex md:gap-24 mt-1 gap-1 md:flex-row flex-col">
        <InputControl
          label="Email"
          placeholder="Enter your email"
          register={register("email")}
          defaultValue={resume.personal.email}
        />
        <InputControl
          label="Enter phone"
          placeholder="Enter your phone number"
          register={register("phone")}
          defaultValue={resume.personal.phone}
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

export default PersonalInfo;
