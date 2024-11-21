import PropTypes from "prop-types";
export default function Input({ id = "Input", type = "text", reg = () => {} }) {
  return (
    <input
      id={id}
      type={type}
      title={id}
      autoComplete="off"
      placeholder={id}
      {...reg(id)}
      className="w-full rounded border border-gray-300/20 bg-inherit p-1 px-3 text-sm placeholder:text-zinc-500 md:w-52"
    ></input>
  );
}

Input.propTypes = {
  children: PropTypes.node,
  id: PropTypes.string,
  reg: PropTypes.func,
  type: PropTypes.string,
};
