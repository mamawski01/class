import PropTypes from "prop-types";
import { motion } from "framer-motion";
import { useState } from "react";

export default function File({
  id = "Input",
  reg = () => {},
  isRequired,
  errors = "",
  specifyFile = "",
}) {
  const [filePrev, filePrevSet] = useState();
  function getFilePreview(e) {
    if (e.target.files[0]) {
      return filePrevSet(URL.createObjectURL(e.target.files[0]));
    } else return filePrevSet("/Asset2.png");
  }
  return (
    <div className="w-48 cursor-pointer">
      <input
        id={id}
        title={id}
        type="file"
        {...reg(id, isRequired)}
        onChange={(e) => getFilePreview(e)}
        accept={specifyFile}
        className="inputBtn-color w-full cursor-pointer rounded border border-gray-300/20 bg-inherit text-sm transition-all duration-500 placeholder:text-zinc-500"
      />
      <div
        className={`${errors?.[id]?.message ? `animate-pulse text-red-500` : `text-black`} transition-all duration-500`}
      >
        {errors?.[id]?.message}
      </div>
      <motion.img
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
        src={filePrev || "/TiberioEyecare.svg"}
        alt=""
        className="mt-2 h-auto w-2/6"
      />
    </div>
  );
}

File.propTypes = {
  errors: PropTypes.object,
  id: PropTypes.string,
  isRequired: PropTypes.object,
  reg: PropTypes.func,
  specifyFile: PropTypes.string,
};
