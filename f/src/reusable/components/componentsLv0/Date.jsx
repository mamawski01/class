import PropTypes from "prop-types";
import Datepicker from "react-tailwindcss-datepicker";
import { useState } from "react";

export default function Date({
  id = "",
  reg,
  isRequired,
  errors = "",
  type = "",
}) {
  const [value, setValue] = useState({
    startDate: null,
    endDate: null,
  });
  return (
    <div className="block w-48">
      <Datepicker
        useRange={false}
        asSingle={true}
        value={value}
        primaryColor={"fuchsia"}
        inputClassName={
          "w-full rounded border border-gray-300/20 bg-inherit p-1 px-3 text-sm transition-all duration-500 placeholder:text-zinc-500 "
        }
        onChange={(newValue) => setValue(newValue)}
      />
      {/* <input
        type="date"
        className="w-full rounded border border-gray-300/20 bg-inherit p-1 px-3 text-sm transition-all duration-500 placeholder:text-zinc-500"
      /> */}
    </div>
  );
}

Date.propTypes = {
  errors: PropTypes.object,
  id: PropTypes.string,
  isRequired: PropTypes.object,
  reg: PropTypes.func,
  type: PropTypes.string,
};
