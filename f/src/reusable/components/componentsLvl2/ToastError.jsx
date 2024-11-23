import PropTypes from "prop-types";
import { ErrorIcon } from "react-hot-toast";
import Toast from "../componentsLvl1/Toast";
import Icon from "../componentsLvl1/Icon";

export default function ToastError({ children = "ToastError" }) {
  return (
    <Toast>
      <Icon>
        <ErrorIcon></ErrorIcon>
        <p>{children}</p>
      </Icon>
    </Toast>
  );
}

ToastError.propTypes = {
  children: PropTypes.node,
};
