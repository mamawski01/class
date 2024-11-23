import { DocumentPlusIcon } from "@heroicons/react/24/solid";

import Icon from "../componentsLvl1/Icon";
import Btn from "../componentsLvl1/Btn";
import { HoverColor } from "../../../lib/utils0";

export default function SaveBtn() {
  return (
    <Btn type="submit" hoverColor={HoverColor.save()}>
      <Icon>
        <DocumentPlusIcon></DocumentPlusIcon>
      </Icon>
      Save
    </Btn>
  );
}
