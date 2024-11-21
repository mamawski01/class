import PropTypes from "prop-types";
export default function Avatar({ src = "/TiberioEyecare.svg" }) {
  return <img src={src} className="w-10" alt={src} title={src}></img>;
}

Avatar.propTypes = {
  src: PropTypes.string,
};
