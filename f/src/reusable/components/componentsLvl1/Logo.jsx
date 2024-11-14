import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export default function Logo({ children = <p>Logo</p> }) {
  return (
    <Link className="flex items-center justify-center font-semibold tracking-wide text-zinc-100">
      {children}
    </Link>
  );
}

Logo.propTypes = {
  children: PropTypes.node,
};
