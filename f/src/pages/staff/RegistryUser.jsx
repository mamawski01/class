import {
  ArrowPathIcon,
  ExclamationCircleIcon,
  ExclamationTriangleIcon,
} from "@heroicons/react/24/solid";
import { useDocumentTitle, useFetch } from "../../reusable/hooks/useHook1";
import Loading from "../../reusable/components/basicComponents/Loading";

export default function RegistryUser() {
  useDocumentTitle();

  const { data } = useFetch(
    "/registryUserBEGetAll",
    "registryUserFEGetAll",
    "registryUserBEGetAll",
  );

  if (!data) return <Loading></Loading>;
  return <div>RegistryUser</div>;
}
