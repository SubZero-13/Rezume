import React, { useContext, useState } from "react";
import InputControl from "./InputControl";
import { ChevronRight, Plus } from "lucide-react";
import { ResumeData } from "../../contexts/ResumeData";
import { useForm } from "react-hook-form";

const Acheivements = () => {
  const [experienceCount, setExperienceCount] = useState(1);
  const { updateAcheivement, resume } = useContext(ResumeData);
  const { register, handleSubmit } = useForm();

  const AcheivementSubmit = (data) => {
    updateAcheivement(data);
    console.log(data);
  };
  return (
    <form
      className="mt-2 mx-3"
      noValidate
      autoComplete="off"
      onSubmit={handleSubmit(AcheivementSubmit)}
    >
      <div className="flex md:gap-24 gap-1  md:flex-row flex-col">
        <InputControl
          label="Acheivement 1"
          placeholder=" Any Hackathon wins or participation"
          register={register("acheivement1")}
          defaultValue={resume.acheivement.acheivement1}
        />
        <InputControl
          label="Acheivement 2"
          placeholder="Any Coding Contest Acheivements "
          register={register("acheivement2")}
          defaultValue={resume.acheivement.acheivement2}
        />
      </div>
      {console.log(resume)}

      <div className="flex md:gap-24 gap-1  md:flex-row flex-col">
        <InputControl
          label="Acheivement 3"
          placeholder=" Any Hackathon wins or participation"
          register={register("acheivement3")}
          defaultValue={resume.acheivement.acheivement3}
        />
        <InputControl
          label="Acheivement 4"
          placeholder="Any Coding Contest Acheivements "
          register={register("acheivement4")}
          defaultValue={resume.acheivement.acheivement4}
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

export default Acheivements;
