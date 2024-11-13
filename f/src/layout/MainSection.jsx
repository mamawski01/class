import PropTypes from "prop-types";

export default function MainSection({ children }) {
  return <section className="">{children}</section>;
}

MainSection.propTypes = {
  children: PropTypes.any,
};
