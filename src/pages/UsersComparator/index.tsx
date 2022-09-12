import {
  faDownload,
  faPlus,
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
  const [winner, setWinner] = useState<User>();

  useEffect(() => {
    setPlayersToCompare(usersFetched.data ?? []);
  }, [usersFetched.data]);

  useEffect(() => {
    setWinner(playersToCompare[0]);
  }, [playersToCompare]);

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

  function renderPlayersNameInput(i: number): JSX.Element {
    return (
      <ListItem
        key={i}
        text={playersToCompare[i]?.name}
        actions={[
          <IconButton color="info">
            <FontAwesomeIcon icon={faDownload} />
          </IconButton>,
          <IconButton
            color="danger"
            onClick={() => {
              setPlayersToCompare(
                playersToCompare.filter(
                  (player) => player !== playersToCompare[i]
                )
              );
            }}
          >
            <FontAwesomeIcon icon={faTrashCan} />
          </IconButton>,
        ]}
      />
    );
  }

  function renderPlayersCard(i: number): JSX.Element {
    return (
      <PlayerCard key={playersToCompare[i]?.id} player={playersToCompare[i]} />
    );
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
          {renderPlayersNameInput(0)}
          <FontAwesomeIcon icon={faPlus} />
          {renderPlayersNameInput(1)}
        </S.Wrapper>
      </S.Section>

      <S.Section divider={["top"]}>
        <S.Wrapper>
          {renderPlayersCard(0)}
          <FontAwesomeIcon icon={faX} />
          {renderPlayersCard(1)}
        </S.Wrapper>
      </S.Section>
      <S.Section divider={["top"]}>
        <S.Highlight>🎆Vencedor🎆</S.Highlight>
        <PlayerCard key={winner?.id} player={winner} />
      </S.Section>
    </S.Container>
  );
};
export default UsersComparator;
