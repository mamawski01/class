import PropTypes from "prop-types";

export default function Main({ children }) {
  return (
    <main className="">
      {children}
      main main
    </main>
  );
}

Main.propTypes = {
  children: PropTypes.any,
};
