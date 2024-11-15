import PropTypes from "prop-types";
import { GlobalContext } from "./GlobalContext";
import { usePreFetch } from "../reusable/hooks/useHook1";

export default function GlobalProvider({ children }) {
  usePreFetch(
    "/registryUserBEGetAll",
    "registryUserFEGetAll",
    "registryUserBEGetAll",
  );
  return <GlobalContext.Provider value={{}}>{children}</GlobalContext.Provider>;
}

GlobalProvider.propTypes = {
  children: PropTypes.any,
};
