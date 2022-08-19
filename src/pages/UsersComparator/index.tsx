import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { AxiosError } from "axios";
import { useRef } from "react";
import { Id, toast } from "react-toastify";
import Input from "../../components/Input";
import ListItem from "../../components/ListItem";
import { useFetchUsers } from "../../hooks/useUsers";

import * as S from "./styles";

const UsersComparator = () => {
  const toastId = useRef<Id | null>(null);
  const { isLoading, error, ...usersFetched } = useFetchUsers();

  if (usersFetched.data) toast.dismiss();

  if (isLoading) {
    toast.dismiss();
    toastId.current = toast.info("Buscando", {
      isLoading: true,
    });
  }

  if (error) {
    const { message } = error as AxiosError;
    if (toastId.current) {
      toast.update(toastId.current, {
        render: message,
        type: toast.TYPE.ERROR,
        isLoading: false,
        autoClose: 5000,
      });
    }
  }

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
