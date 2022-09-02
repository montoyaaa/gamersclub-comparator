import {
  faAdd,
  faDownload,
  faTrashCan,
  faX,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { AxiosError } from "axios";
import { useEffect, useRef, useState } from "react";
import { Id, toast } from "react-toastify";
import { IconButton } from "../../components/IconButton/styles";
import ListItem from "../../components/ListItem";
import PlayerCard from "../../components/PlayerCard";
import { useFetchUsers } from "../../hooks/useUsers";
import { User } from "../../utils/types/user.type";

import * as S from "./styles";

const UsersComparator = () => {
  const toastId = useRef<Id | null>(null);
  const { isLoading, error, ...usersFetched } = useFetchUsers();
  const [playersToCompare, setPlayersToCompare] = useState<User[]>([]);

  useEffect(() => {
    setPlayersToCompare(usersFetched.data ?? []);
  }, [usersFetched.data]);

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
      {/* <S.Section>
        <Input
          label="Buscar"
          suffixIcon={faSearch}
          placeholder="Procure pelo GC ID"
          type="text"
        />
      </S.Section> */}

      <S.Section divider={["top"]}>
        <S.Wrapper>
          {playersToCompare?.map((user, i) => {
            if (i + 1 !== playersToCompare.length) {
              return (
                <>
                  <ListItem
                    key={i}
                    text={user.name}
                    actions={[
                      <IconButton color="info">
                        <FontAwesomeIcon icon={faDownload} />
                      </IconButton>,
                      <IconButton
                        color="danger"
                        onClick={() => {
                          setPlayersToCompare(
                            playersToCompare.filter((player) => player !== user)
                          );
                        }}
                      >
                        <FontAwesomeIcon icon={faTrashCan} />
                      </IconButton>,
                    ]}
                  />
                  <FontAwesomeIcon icon={faAdd} />
                </>
              );
            }
            return (
              <ListItem
                key={i}
                text={user.name}
                actions={[
                  <IconButton color="info">
                    <FontAwesomeIcon icon={faDownload} />
                  </IconButton>,
                  <IconButton
                    color="danger"
                    onClick={() => {
                      setPlayersToCompare(
                        playersToCompare.filter((player) => player !== user)
                      );
                    }}
                  >
                    <FontAwesomeIcon icon={faTrashCan} />
                  </IconButton>,
                ]}
              />
            );
          })}
        </S.Wrapper>
      </S.Section>

      <S.Section divider={["top"]}>
        <S.Wrapper>
          {playersToCompare?.map((user, i) => {
            if (i + 1 !== playersToCompare.length) {
              return (
                <>
                  <PlayerCard key={user.id} player={user} />
                  <FontAwesomeIcon icon={faX} />
                </>
              );
            }

            return <PlayerCard key={user.id} player={user} />;
          })}
        </S.Wrapper>
      </S.Section>
    </S.Container>
  );
};
export default UsersComparator;
