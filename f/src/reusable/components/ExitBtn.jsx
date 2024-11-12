import { XMarkIcon } from "@heroicons/react/24/solid";
import Btn from "./Btn";
import { useNavigate } from "react-router-dom";

export default function ExitBtn() {
  const navigate = useNavigate();

  return (
    <div className="absolute right-0 z-20">
      <Btn
        color="red"
        text="exit"
        type="button"
        icon={<XMarkIcon></XMarkIcon>}
        onClick={() => navigate(-1)}
      ></Btn>
    </div>
  );
}
