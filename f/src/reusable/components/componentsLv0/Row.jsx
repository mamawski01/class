import PropTypes from "prop-types";
export default function Row({ children = "Row" }) {
  return (
    <div className="grid auto-cols-auto grid-flow-row grid-cols-subgrid gap-4 text-start transition-all duration-500 sm:[grid-template-columns:repeat(auto-fit,minmax(13rem,1fr))]">
      {children}
    </div>
  );
}

Row.propTypes = {
  children: PropTypes.node,
};
