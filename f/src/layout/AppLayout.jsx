import { Outlet, ScrollRestoration } from "react-router-dom";
import Main from "./Main";
import MainHeader from "./MainHeader";
import MainSection from "./MainSection";
import MainSideBar from "./MainSideBar";
import BackgroundBeamsWithCollision from "../reusable/components/basicComponents/BackgroundBeamsWithCollision";

export default function AppLayout() {
  return (
    <BackgroundBeamsWithCollision>
      <div className="scrollbar relative mx-auto h-screen w-full overflow-y-scroll border border-b-0 border-gray-300/20 2xl:w-5/6">
        <MainHeader></MainHeader>
        <MainSection>
          <MainSideBar></MainSideBar>
          <Main>
            <Outlet></Outlet>
            <ScrollRestoration />
          </Main>
        </MainSection>
      </div>
    </BackgroundBeamsWithCollision>
  );
}
