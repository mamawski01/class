import { useFetch } from "../../reusable/hooks/useHook1";
import Loading from "../../reusable/components/componentsLvl1/Loading";
import H1MainTitle from "../../reusable/components/componentsLv0/H1MainTitle";
import CreateSomething from "../../reusable/components/componentsLvl1/CreateSomething";
import Btn from "../../reusable/components/componentsLvl1/Btn";
import ContentBox0 from "../../reusable/components/componentsLvl2/ContentBox0";

export default function RegistryUserList() {
  const { data } = useFetch(
    "/registryUserBEGetAll",
    "registryUserFEGetAll",
    "registryUserBEGetAll",
  );

  if (!data) return <Loading></Loading>;
  if (data) {
    const registerUsers = data.data;
    return (
      <ContentBox0>
        <H1MainTitle>Registry User List</H1MainTitle>
        {registerUsers.length === 0 && (
          <CreateSomething>
            <p>List is empty, create something...</p>
            <div>
              <Btn ghost={true} link={true} to="registryUserForm">
                Add User
              </Btn>
            </div>
          </CreateSomething>
        )}
      </ContentBox0>
    );
  }
}
