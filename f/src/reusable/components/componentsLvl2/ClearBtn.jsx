import { SparklesIcon } from "@heroicons/react/24/solid";
import { useForm } from "react-hook-form";

import { HoverColor } from "../../../lib/utils0";
import Btn from "../componentsLvl1/Btn";
import Icon from "../componentsLvl1/Icon";

export default function ClearBtn() {
  const { reset } = useForm();
  return (
    <Btn
      type="reset"
      hoverColor={HoverColor.warn()}
      onClick={() => {
        reset();
      }}
    >
      <Icon>
        <SparklesIcon></SparklesIcon>
      </Icon>
      Clear
    </Btn>
  );
}
