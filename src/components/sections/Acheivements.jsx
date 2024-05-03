import React, { useContext } from "react";
import InputControl from "./InputControl";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { ResumeData } from "../../contexts/ResumeData";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

const Acheivements = ({ activeIndex, setactiveIndex }) => {
  const { updateAcheivement, resume } = useContext(ResumeData);
  const { register, handleSubmit } = useForm();
  let navigate = useNavigate();

  const AcheivementSubmit = (data) => {
    updateAcheivement(data);
    navigate("/resume/download");
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

export default Acheivements;
