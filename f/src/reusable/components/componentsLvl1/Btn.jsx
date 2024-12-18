import PropTypes from "prop-types";
import { Link, NavLink } from "react-router-dom";
export default function Btn({
  children = <p>Btn</p>,
  hoverColor = "hover:bg-zinc-900",
  to = "",
  navLink = false,
  link = false,
  flexCol = false,
  onClick = () => {},
  type = "button",
}) {
  const style = `${hoverColor} ${flexCol && `flex-col`} flex w-full items-center justify-between rounded p-1 transition-all duration-300`;

  if (link) {
    return (
      <Link to={to} className={`${style}`}>
        {children}
      </Link>
    );
  }
  if (navLink) {
    return (
      <NavLink
        to={to}
        className={({ isActive }) =>
          isActive ? `font-bold text-zinc-200 underline ${style}` : style
        }
      >
        {children}
      </NavLink>
    );
  }
  return (
    <button onClick={onClick} className={`${style}`} type={type}>
      {children}
    </button>
  );
}

Btn.propTypes = {
  children: PropTypes.node,
  hoverColor: PropTypes.string,
  onClick: PropTypes.func,
  to: PropTypes.string,
  flexCol: PropTypes.bool,
  navLink: PropTypes.bool,
  link: PropTypes.bool,
  type: PropTypes.string,
};
