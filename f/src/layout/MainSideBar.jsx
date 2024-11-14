import { UserGroupIcon } from "@heroicons/react/24/solid";
import Icon from "../reusable/components/componentsLvl1/Icon";
import SideBarOption from "../reusable/components/componentsLvl2/SideBarOption";
import H1mdAndUp from "../reusable/components/basicComponents/H1mdAndUp";
import H1smOnly from "../reusable/components/basicComponents/H1smOnly";
import H1small from "../reusable/components/basicComponents/H1small";
import Btn from "../reusable/components/componentsLvl1/Btn";
export default function MainSideBar() {
  return (
    <div className="scrollbar over hidden h-[calc(100vh-3.1rem)] flex-col gap-2 border-r border-gray-300/20 p-5 px-2 hover:overflow-y-scroll sm:flex sm:w-44 md:w-52">
      <H1small>Staff</H1small>
      <SideBarOption>
        <Icon>
          <UserGroupIcon></UserGroupIcon>
          <H1mdAndUp>Manage Staff</H1mdAndUp>
          <H1smOnly>Man. Staff</H1smOnly>
        </Icon>
        <Btn to="/" ghost={true}>
          <H1mdAndUp>Attendance and Benefits</H1mdAndUp>
          <H1smOnly>Att. & Ben.</H1smOnly>
        </Btn>
        <Btn to="/" ghost={true}>
          <H1mdAndUp>Registry User List</H1mdAndUp>
          <H1smOnly>Reg. User</H1smOnly>
        </Btn>
        <Btn to="/" ghost={true}>
          <H1mdAndUp>Confirmed User List</H1mdAndUp>
          <H1smOnly>Conf. User </H1smOnly>
        </Btn>
      </SideBarOption>
      <SideBarOption>
        <Icon>
          <UserGroupIcon></UserGroupIcon>
          <H1mdAndUp>Utilities</H1mdAndUp>
          <H1smOnly>Utils.</H1smOnly>
        </Icon>
        <Btn to="/" ghost={true}>
          <H1mdAndUp>Spectacle Power Conversion</H1mdAndUp>
          <H1smOnly>Spec. Con.</H1smOnly>
        </Btn>
        <Btn to="/" ghost={true}>
          <H1mdAndUp>Frame Pricing Guide</H1mdAndUp>
          <H1smOnly>Frame Pri.</H1smOnly>
        </Btn>
      </SideBarOption>
    </div>
  );
}
