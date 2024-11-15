import PropTypes from "prop-types";

export default function MainSection({ children }) {
  return <section className="mx-auto flex w-full">{children}</section>;
}

MainSection.propTypes = {
  children: PropTypes.any,
};
