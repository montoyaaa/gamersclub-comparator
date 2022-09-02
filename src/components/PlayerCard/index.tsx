import { User } from "../../utils/types/user.type";
import { IconButton } from "../IconButton/styles";
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
                  style={{ minWidth: 150, position: "relative" }}
                  background="solid"
                  divider={["top", "left", "right", "bottom"]}
                  center
                >
                  <S.Row
                    style={{
                      alignSelf: "flex-end",
                      position: "absolute",
                      top: 16,
                    }}
                  >
                    <IconButton>
                      <ChangeIcon />
                    </IconButton>
                  </S.Row>
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

const ChangeIcon = () => (
  <svg
    width="22"
    height="18"
    viewBox="0 0 22 18"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M5.25217 18L0 12.7826L5.25217 7.56512V11.7679H5.65405H13.3848H14.3848V12.449V12.7679V13.449H13.3848H5.65405H5.25217V18Z"
      fill="white"
    ></path>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M16.748 10.4349L22.0001 5.21746L16.748 0V4.20282H16.3462H8.61543H7.61543V4.88394V5.20282V5.88394H8.61543H16.3462H16.748V10.4349Z"
      fill="white"
    ></path>
  </svg>
);
