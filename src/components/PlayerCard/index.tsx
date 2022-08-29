import { User } from "../../utils/types/user.type";
import * as S from "./styles";

const PlayerCard = ({ player }: { player?: User }) => {
  return (
    <S.Card>
      <S.Column>
        <S.PlayerBackground image={player?.background!} />

        <S.BackgroundShadow>
          <S.Section>
            <S.PlayerSection>
              <S.PlayerAvatar frame={!!player?.frame}>
                {!!player?.frame && (
                  <img className="frame" src={player?.frame} alt="#" />
                )}

                <img className="avatar" src={player?.avatar} alt="#" />
              </S.PlayerAvatar>
              <S.Column>
                <S.Row>{player?.name}</S.Row>
                <S.Label>ID: {player?.id}</S.Label>
              </S.Column>
              <S.SkillLevel>{player?.skill_level}</S.SkillLevel>
            </S.PlayerSection>
          </S.Section>

          <S.Section divider={["top"]} style={{ gap: 16 }}>
            <S.Row>
              <S.Column>
                <S.Section
                  style={{ minWidth: 150 }}
                  background="solid"
                  divider={["top", "left", "right", "bottom"]}
                  center
                >
                  <S.Medal>
                    <img
                      title={player?.medal.title}
                      src={player?.medal.url}
                      alt={player?.medal.title}
                    />
                  </S.Medal>
                  <S.Row>{player?.medal.title}</S.Row>
                  <S.Row
                    style={{
                      flexWrap: "nowrap",
                    }}
                  >
                    <S.MedalRarity>{player?.medal.type}</S.MedalRarity>
                    Apenas {player?.medal.common}% conquistaram essa medalha
                  </S.Row>
                </S.Section>
              </S.Column>
            </S.Row>

            <S.Row gap={16}>
              <S.Column>
                <S.Section
                  style={{ minWidth: 150 }}
                  background="solid"
                  divider={["top", "left", "right", "bottom"]}
                >
                  <S.Title>Estatísticas do mês</S.Title>
                  <S.Row style={{ justifyContent: "space-between" }}>
                    <S.Label>Kdr: </S.Label>
                    {player?.stats.kdr}
                  </S.Row>
                  <S.Row style={{ justifyContent: "space-between" }}>
                    <S.Label>Matou: </S.Label>
                    {player?.stats.kill}
                  </S.Row>
                  <S.Row style={{ justifyContent: "space-between" }}>
                    <S.Label>Morreu: </S.Label>
                    {player?.stats.death}
                  </S.Row>
                  <S.Row style={{ justifyContent: "space-between" }}>
                    <S.Label>Vitória: </S.Label>
                    {player?.stats.won}
                  </S.Row>
                  <S.Row style={{ justifyContent: "space-between" }}>
                    <S.Label>Derrota: </S.Label>
                    {player?.stats.lost}
                  </S.Row>
                </S.Section>
              </S.Column>

              <S.Column>
                <S.Section
                  style={{ minWidth: 150 }}
                  full
                  background="solid"
                  divider={["top", "left", "right", "bottom"]}
                >
                  <S.Title>Última partida</S.Title>
                  <S.Section center>
                    <S.Row>
                      {new Date(
                        player?.stats.last_match.date ?? ""
                      ).toLocaleString("pt-BR")}
                    </S.Row>
                    <S.Row>
                      <S.Label>Resultado: </S.Label>
                      <S.Row>{player?.stats.last_match.result}</S.Row>
                    </S.Row>
                  </S.Section>
                </S.Section>
              </S.Column>
            </S.Row>
          </S.Section>
        </S.BackgroundShadow>
      </S.Column>
    </S.Card>
  );
};
export default PlayerCard;
