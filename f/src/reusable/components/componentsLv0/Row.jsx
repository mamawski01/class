import PropTypes from "prop-types";
export default function Row({ children = "Row" }) {
  return (
    <div className="flex w-full flex-wrap">
      <div className="grid w-full grid-cols-2 gap-3 text-start lg:flex">
        {children}
      </div>
    </div>
  );
}

Row.propTypes = {
  children: PropTypes.node,
};
