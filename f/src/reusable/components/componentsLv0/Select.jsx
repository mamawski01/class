import PropTypes from "prop-types";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

import Icon from "../componentsLvl1/Icon";
import { ChevronRightIcon } from "@heroicons/react/24/solid";

export default function Select({
  id = "Input",
  reg = () => {},
  options = ["cat", "dog", "Mouse", "Cow"],
  isRequired = "",
  errors = "",
  hookValue,
}) {
  const [collapse, collapseSet] = useState(false);
  const optionRef = useRef();
  const optionRef2 = useRef();

  useEffect(() => {
    function callBack(e) {
      if (!optionRef.current?.contains(e.target)) {
        collapseSet(false);
      }
      if (optionRef2.current?.contains(e.target)) {
        collapseSet(false);
      }
    }

    document.addEventListener("click", callBack);
    //cleaning
    return () => {
      document.removeEventListener("click", callBack);
    };
  }, [collapse, collapseSet]);

  const [inputVal, inputValSet] = useState(options[0]);
  const [searchInput, searchInputSet] = useState(options[0]);
  const searchResult = options.filter((option) =>
    option.toLowerCase().includes(searchInput.toLowerCase()),
  );
  const isOptionChosen = searchResult[0] === searchInput;

  return (
    <motion.div
      className="flex w-48 flex-col"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="relative w-full md:w-48" ref={optionRef}>
        <input
          id={id}
          title={id}
          type="text"
          {...reg(id, isRequired)}
          className="absolute -z-50 opacity-0"
          onChange={hookValue(id, "")}
        />
        <input
          value={searchInput}
          onChange={(e) => searchInputSet(e.target.value)}
          className="w-full cursor-pointer rounded border border-gray-300/20 bg-black bg-inherit p-1 px-3 text-sm transition-all duration-500 placeholder:text-zinc-500 md:w-48"
          onClick={() => {
            collapseSet(!collapse);
            searchInputSet("");
            inputValSet("");
            hookValue(id, inputVal);
          }}
          onKeyDown={hookValue(id, inputVal)}
        ></input>
        <div
          className={`${collapse && "rotate-90"} absolute right-0 top-2 transition-all duration-500`}
        >
          <Icon iconWith="w-0">
            <ChevronRightIcon width={"1rem"}></ChevronRightIcon>
          </Icon>
        </div>
      </div>
      <div
        ref={optionRef2}
        className={`px-3 transition-all duration-500 ${collapse && searchResult.length > 0 ? "max-h-screen border-gray-300/20 p-3" : "max-h-0 border-none"} no-scrollbar absolute z-10 mt-12 w-max overflow-hidden overflow-y-auto rounded border bg-black/60 text-sm backdrop-blur-sm`}
      >
        <div className={`flex flex-col gap-2 transition-all duration-500`}>
          {searchResult.slice().map((option, i) => (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              onClick={() => {
                searchInputSet(option);
                inputValSet(option);
              }}
              className="rounded p-1 transition-all duration-500 hover:bg-zinc-900"
              key={i}
            >
              {option}
            </motion.div>
          ))}
        </div>
      </div>
      <div
        className={`${errors?.[id]?.message || !isOptionChosen ? `animate-pulse text-red-500` : `text-black`} transition-all duration-500`}
      >
        {errors?.[id]?.message} {!isOptionChosen && `Click one.`}
      </div>
    </motion.div>
  );
}

Select.propTypes = {
  errors: PropTypes.object,
  hookValue: PropTypes.func,
  id: PropTypes.string,
  isRequired: PropTypes.object,
  options: PropTypes.array,
  reg: PropTypes.func,
};
