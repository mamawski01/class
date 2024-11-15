import PropTypes from "prop-types";
import { Link } from "react-router-dom";
export default function Btn({
  children = <p>Btn</p>,
  ghost = false,
  to = "",
  flexCol = false,
  onClick = () => {},
}) {
  const style = `${ghost && `hover:bg-zinc-900`} ${flexCol && `flex-col`} flex w-full items-center justify-between rounded p-1 transition-all duration-300 `;

  if (to)
    return (
      <Link to={to} className={`${style}`}>
        {children}
      </Link>
    );
  return (
    <button onClick={onClick} className={`${style} `}>
      {children}
    </button>
  );
}

Btn.propTypes = {
  children: PropTypes.node,
  ghost: PropTypes.bool,
  onClick: PropTypes.func,
  to: PropTypes.string,
  flexCol: PropTypes.bool,
};
