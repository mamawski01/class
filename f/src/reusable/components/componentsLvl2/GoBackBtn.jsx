import { useNavigate } from "react-router-dom";
import { ChevronDoubleLeftIcon } from "@heroicons/react/24/solid";

import { HoverColor } from "../../../lib/utils0";
import Btn from "../componentsLvl1/Btn";
import Icon from "../componentsLvl1/Icon";

export default function GoBackBtn() {
  const navigate = useNavigate();

  return (
    <Btn hoverColor={HoverColor.alert()} onClick={() => navigate(-1)}>
      <Icon>
        <ChevronDoubleLeftIcon></ChevronDoubleLeftIcon>
      </Icon>
      Go Back
    </Btn>
  );
}
