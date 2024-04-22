import React from "react";

const InputControl = ({ label, detail, ...props }) => {
  return (
    <div className="flex flex-col mt-4 w-64">
      {label && (
        <label className="font-semibold text-base mb-2 ">{label}</label>
      )}
      <input
        type="text"
        {...props}
        // {...register}
        {...props.register}
        className={`${
          detail && "md:min-w-[40rem] h-20 p-2"
        } h-12 max-w-[80%] md:min-w-72 w-[20rem] p-4 rounded-lg border-[1px] border-[#dedede]`}
      />
    </div>
  );
};

export default InputControl;
