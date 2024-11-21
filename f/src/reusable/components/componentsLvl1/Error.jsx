import { ExclamationTriangleIcon } from "@heroicons/react/24/solid";
import { useRouteError } from "react-router-dom";
import Btn from "./Btn";
import { useRefresh } from "../../hooks/useHook0";
import ContentBox0 from "../componentsLvl2/ContentBox0";

export default function Error() {
  const error = useRouteError();
  useRefresh();

  return (
    <ContentBox0>
      <div className="flex h-screen w-full items-center justify-center">
        <div className="flex w-fit">
          <Btn to="/" ghost={true} flexCol={true}>
            <div className="flex w-96 animate-pulse justify-center">
              <ExclamationTriangleIcon></ExclamationTriangleIcon>
            </div>
            <p>Click Here to go to Homepage.</p>
            <div>{error.data || error.message}</div>
          </Btn>
        </div>
      </div>
    </ContentBox0>
  );
}

{
  /* <div className="flex w-full animate-spin justify-center">
        <ArrowPathIcon></ArrowPathIcon>
      </div> */
}
{
  /* <div className="flex w-full animate-pulse justify-center">
        <ExclamationTriangleIcon></ExclamationTriangleIcon>
      </div> */
}
{
  /* <div className="relative flex w-10">
  <ExclamationCircleIcon></ExclamationCircleIcon>
  <div className="absolute inset-0 animate-ping">
    <ExclamationCircleIcon></ExclamationCircleIcon>
  </div>
</div>; */
}
