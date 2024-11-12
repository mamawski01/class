import PropTypes from "prop-types";
import { XMarkIcon } from "@heroicons/react/24/solid";
import Btn from "./Btn";
import { useNavigate } from "react-router-dom";
import TittleH1 from "./TittleH1";
import Linker from "./Linker";

export default function CreateSomethingFirst({
  to,
  linkerIcon = <XMarkIcon></XMarkIcon>,
  linkerText = "add linker text",
  text = "add text",
}) {
  const navigate = useNavigate();

  return (
    <>
      <div className="flex justify-end">
        <Btn
          color="red"
          text="exit"
          type="button"
          icon={<XMarkIcon></XMarkIcon>}
          onClick={() => navigate(-1)}
        ></Btn>
      </div>
      <TittleH1>
        <div>
          <p>{text}</p>
          <Linker text={linkerText} icon={linkerIcon} to={to}></Linker>
        </div>
      </TittleH1>
    </>
  );
}

CreateSomethingFirst.propTypes = {
  linkerIcon: PropTypes.any,
  to: PropTypes.any,
  text: PropTypes.any,
  linkerText: PropTypes.any,
};
