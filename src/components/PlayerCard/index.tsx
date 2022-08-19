import { User } from "../../utils/types/user.type";
import * as S from "./styles";

const PlayerCard = ({ player }: { player?: User }) => {
  return (
    <S.Card>
      <S.Column>
        <S.PlayerBackground src={player?.background} />

        <S.ShadowEffect>
          <S.Section>
            <S.PlayerSection>
              <S.PlayerAvatar src={player?.avatar} />
              <S.Column>
                <S.Row>{player?.name}</S.Row>
                <S.Label>ID: {player?.id}</S.Label>
              </S.Column>
              <S.SkillLevel>{player?.skill_level}</S.SkillLevel>
            </S.PlayerSection>
          </S.Section>

          <S.Section divider={["top"]}>
            <S.Row>{player?.name}</S.Row>
            <S.Row>{player?.name}</S.Row>
          </S.Section>
        </S.ShadowEffect>
      </S.Column>
    </S.Card>
  );
};
export default PlayerCard;
