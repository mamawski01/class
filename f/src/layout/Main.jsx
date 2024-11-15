import PropTypes from "prop-types";

export default function Main({ children }) {
  return <main className="w-full p-5">{children}</main>;
}

Main.propTypes = {
  children: PropTypes.any,
};
