import PropTypes from "prop-types";
export default function H1small({ children = "H1small" }) {
  return <h1 className="text-xs text-zinc-400">{children}</h1>;
}

H1small.propTypes = {
  children: PropTypes.string,
};
