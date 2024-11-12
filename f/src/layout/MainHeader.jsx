import {
  EyeIcon,
  PresentationChartBarIcon,
  TagIcon,
  UserGroupIcon,
  WrenchScrewdriverIcon,
} from "@heroicons/react/24/solid";

import Logo from "../reusable/components/Logo";
import Options from "../reusable/components/Options";
import NavLinker from "../reusable/components/NavLinker";
import { CheckmarkIcon } from "react-hot-toast";

export default function MainHeader() {
  return (
    <header className="header">
      <div className="container mx-auto flex flex-nowrap items-center justify-between gap-2">
        <div className="flex gap-2">
          <Logo text="TEC"></Logo>
        </div>
        <div className="flex gap-4">
          <Options
            text="helpers"
            position="right-0"
            icon={<WrenchScrewdriverIcon />}
            options={[
              {
                option: (
                  <NavLinker
                    icon={<EyeIcon />}
                    text={"CLSpecConversion"}
                    to="homeP/cLSpecConversion"
                  ></NavLinker>
                ),
              },
              {
                option: (
                  <NavLinker
                    icon={<TagIcon />}
                    text={"framePricing"}
                    to="homeP/FramePricing"
                  ></NavLinker>
                ),
              },
            ]}
          ></Options>
          <Options
            text="manageStaff"
            position="right-0"
            icon={<UserGroupIcon />}
            options={[
              {
                option: (
                  <NavLinker
                    icon={<PresentationChartBarIcon />}
                    text={"attendanceAndBenefits"}
                    to="homeP/attAndBenP"
                  ></NavLinker>
                ),
              },
              {
                option: (
                  <NavLinker
                    icon={<UserGroupIcon></UserGroupIcon>}
                    text={"registryUserList"}
                    to="homeP/registryUserP"
                  ></NavLinker>
                ),
              },
              {
                option: (
                  <NavLinker
                    icon={<CheckmarkIcon></CheckmarkIcon>}
                    text={"confirmedUserList"}
                    to="homeP/confirmedUserP"
                  ></NavLinker>
                ),
              },
            ]}
          ></Options>
        </div>
      </div>
    </header>
  );
}
