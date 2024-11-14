import PropTypes from "prop-types";

export default function MainSection({ children }) {
  return (
    <section className="mx-auto flex w-full xl:w-11/12">{children}</section>
  );
}

MainSection.propTypes = {
  children: PropTypes.any,
};
