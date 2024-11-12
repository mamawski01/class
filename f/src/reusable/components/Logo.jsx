import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export default function Logo({
  text = "Add text",
  link = "/",
  imgSrc = "/Asset2.png",
}) {
  return (
    <Link to={link}>
      <div className="flex items-center" title={text}>
        <img src={imgSrc} alt={text} className="w-10" />
        <h3 className="font-bold tracking-wider">{text}</h3>
      </div>
    </Link>
  );
}

Logo.propTypes = {
  imgSrc: PropTypes.string,
  link: PropTypes.string,
  text: PropTypes.string,
};
