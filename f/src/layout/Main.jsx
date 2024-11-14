import PropTypes from "prop-types";

export default function Main({ children }) {
  return <main className="p-5">{children}</main>;
}

Main.propTypes = {
  children: PropTypes.any,
};
