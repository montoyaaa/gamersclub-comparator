import { faSearch } from "@fortawesome/free-solid-svg-icons";
import Input from "../../components/Input";
import ListItem from "../../components/ListItem";
import { useFetchUsers } from "../../hooks/useUsers";

import * as S from "./styles";

const UsersComparator = () => {
  const { isLoading, error, ...usersFetched } = useFetchUsers();

  if (isLoading) return <h3>Loading...</h3>;
  if (error) return <h3>Error...</h3>;

  return (
    <S.Container>
      <S.Section>
        <Input
          label="Buscar"
          suffixIcon={faSearch}
          placeholder="Procure pelo GC ID"
          type="text"
        />
      </S.Section>

      <S.Section divider={["top"]}>
        <S.Wrapper>
          {usersFetched.data?.map((user, i) => {
            if (i + 1 !== usersFetched.data.length) {
              return (
                <>
                  <ListItem key={user.id} text={user.name} />
                  <span>+</span>
                </>
              );
            }
            return <ListItem key={user.id} text={user.name} />;
          })}
        </S.Wrapper>
      </S.Section>
    </S.Container>
  );
};
export default UsersComparator;
