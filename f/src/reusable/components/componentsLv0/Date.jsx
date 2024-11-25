import PropTypes from "prop-types";
import Datepicker from "react-tailwindcss-datepicker";
import { useState } from "react";
import dayjs from "dayjs";

export default function Date({
  id = "Input",
  reg = () => {},
  isRequired,
  errors = "",
  hookValue,
}) {
  const [inputVal, inputValSet] = useState("");
  const [value, setValue] = useState({
    startDate: null,
    endDate: null,
  });

  return (
    <div className="relative w-48">
      <input
        id={id}
        title={id}
        type="date"
        {...reg(id, isRequired)}
        className="absolute -z-50 opacity-0"
        onKeyDown={(e) => e.key === "Enter" && e.preventDefault()}
      />

      <Datepicker
        useRange={false}
        asSingle={true}
        value={value}
        inputClassName={
          "w-full rounded border border-gray-300/20 bg-inherit p-1 px-3 text-sm transition-all duration-500 placeholder:text-zinc-500  text-zinc-300"
        }
        toggleClassName="absolute  rounded-r text-white right-0 h-full px-3 text-gray-400 focus:outline-none disabled:opacity-40 disabled:cursor-not-allowed bg-zinc-800 hover:bg-zinc-700 transition-all duration-500"
        onChange={(newValue) => {
          setValue(newValue);
          inputValSet(
            newValue.startDate
              ? dayjs(newValue.startDate).format("YYYY-MM-DD")
              : "",
          );
        }}
        onClick={hookValue(id, inputVal)}
        onKeyDown={hookValue(id, inputVal)}
      />
      <div
        className={`${errors?.[id]?.message ? `animate-pulse text-red-500` : `text-black`} transition-all duration-500`}
      >
        {errors?.[id]?.message}
      </div>
    </div>
  );
}

Date.propTypes = {
  id: PropTypes.string,
  reg: PropTypes.func,
  isRequired: PropTypes.object,
  errors: PropTypes.object,
  hookValue: PropTypes.func,
};
