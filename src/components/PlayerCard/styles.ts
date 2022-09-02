import styled from "styled-components";

type SectionProps = {
  divider?: String[];
  center?: boolean;
  full?: boolean;
  background?: String;
};

type AvatarFrameProps = {
  frame?: String;
};

type RowProps = {
  gap?: number;
};

type PlayerBackgroundProps = {
  image: String;
};

export const Card = styled.div`
  position: relative;
  flex: 1;
  display: flex;
  border: 1px solid hsla(0, 0%, 100%, 0.08);
  border-radius: 5px;
`;
export const Column = styled.div`
  flex: 1;
  display: flex;
  flex-direction: Column;
`;
export const Row = styled.div<RowProps>`
  display: flex;
  flex-wrap: wrap;
  gap: ${(props) => props.gap + "px" ?? 0};
`;

export const BackgroundShadow = styled.div`
  background: linear-gradient(0deg, rgb(33 35 53) 30%, rgba(121, 9, 9, 1) 200%);
`;

export const Section = styled.div<SectionProps>`
  display: flex;
  flex-direction: column;
  padding: 16px;

  height: ${(props) => (props.full ? "100%" : "inherit")};

  ${(props) =>
    props.background === "solid" ? `background-color: #282a3e;` : null}

  ${(props) =>
    props.center
      ? "justify-content: center; align-items: center; height: 100%;"
      : null}

  border-top: ${(props) =>
    props.divider?.includes("top") && "1px solid hsla(0, 0%, 100%, 0.08)"};
  border-bottom: ${(props) =>
    props.divider?.includes("bottom") && "1px solid hsla(0, 0%, 100%, 0.08)"};
  border-left: ${(props) =>
    props.divider?.includes("left") && "1px solid hsla(0, 0%, 100%, 0.08)"};
  border-right: ${(props) =>
    props.divider?.includes("right") && "1px solid hsla(0, 0%, 100%, 0.08)"};
`;

export const PlayerSection = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;
`;

export const SkillLevel = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-color: ${(props) => props.theme.palette.danger.main};
  text-shadow: 1px 1px 1px rgb(0 0 0 / 40%);
  animation: levelShadowAnimation 2s infinite;

  @keyframes levelShadowAnimation {
    0% {
      box-shadow: 0px 0px 5px 0px ${({ theme }) => theme.palette.danger.main};
    }
    50% {
      box-shadow: 0px 0px 5px 1px ${({ theme }) => theme.palette.danger.main};
    }
    100% {
      box-shadow: 0px 0px 5px 0px ${({ theme }) => theme.palette.danger.main};
    }
  }
`;

export const Label = styled.span`
  font-family: Poppins;
  font-size: 14px;
  color: #7e7a86;
  align-self: flex-start;
  text-transform: uppercase;
  white-space: pre-wrap;
`;

export const PlayerBackground = styled.div<PlayerBackgroundProps>`
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  height: 105px;
  background-position: center;
  background-size: cover;
  background-image: ${(props) => `url(${props.image})`};
`;

export const PlayerAvatar = styled.div<{ frame?: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  ${(props) => props.frame && `padding: 2px;`}

  img.frame {
    width: 60px;
    height: 60px;
    position: absolute;
  }
  img.avatar {
    ${(props) =>
      !props.frame && `border: 2px solid ${props.theme.palette.success.main};`}
    width: 47px;
    height: 47px;
    border-radius: 50%;
  }
`;

export const Title = styled.span`
  letter-spacing: 1px;
  line-height: 20px;
  font-size: 18px;
  text-transform: uppercase;
`;
export const Medal = styled.div`
  background-color: ${(props) => props.theme.palette.secondary.main};
  padding: 16px;
  border-radius: 50%;
  /* Fazer o background de acordo com a raridade */
  background: linear-gradient(
    180deg,
    rgb(33 35 53) 65%,
    rgba(121, 9, 9, 1) 200%
  );
`;
export const MedalRarity = styled.span`
  margin: 0 8px;
  text-transform: uppercase;
  letter-spacing: 2px;
  color: ${({ theme }) => theme.palette.danger.main};
`;
export const AvatarFrame = styled.div<AvatarFrameProps>`
  background-image: ${(props) => `url(${props.frame ?? ""})`};
  background-position: center;
  background-size: cover;
  /* padding: 5px; */
  /* z-index: 10; */
  position: relative;
`;
