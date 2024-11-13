import { useFetch } from "../../reusable/hooks/useFetch";

export default function Homepage() {
  const { data } = useFetch(
    "/registryUserBEGetAll",
    "registryUserFEGetAll",
    "registryUserBEGetAll"
  );
  console.log(data);
  return <div>lol</div>;
}
