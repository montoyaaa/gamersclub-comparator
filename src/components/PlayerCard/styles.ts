import styled from "styled-components";

type SectionProps = {
  divider?: String[];
};

export const Card = styled.div`
  position: relative;
  flex: 1;
  display: flex;
  border: 1px solid hsla(0, 0%, 100%, 0.08);
  border-radius: 10px;
`;
export const Column = styled.div`
  flex: 1;
  display: flex;
  flex-direction: Column;
`;
export const Row = styled.div`
  display: flex;
`;
export const ShadowEffect = styled.div`
  position: relative;
  top: -8px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  background: linear-gradient(0deg, rgb(33 35 53) 30%, rgba(121, 9, 9, 1) 200%);
`;

export const Section = styled.div<SectionProps>`
  border-top: ${(props) =>
    props.divider?.includes("top") && "1px solid hsla(0, 0%, 100%, 0.08)"};
  border-bottom: ${(props) =>
    props.divider?.includes("bottom") && "1px solid hsla(0, 0%, 100%, 0.08)"};
  border-left: ${(props) =>
    props.divider?.includes("left") && "1px solid hsla(0, 0%, 100%, 0.08)"};
  border-right: ${(props) =>
    props.divider?.includes("right") && "1px solid hsla(0, 0%, 100%, 0.08)"};

  padding: 16px;
`;

export const PlayerSection = styled.div`
  display: flex;
  gap: 8px;
  font-size: 18px;
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

  /* font-family: Poppins; */
  /* font-size: 16px; */

  @keyframes levelShadowAnimation {
    0% {
      box-shadow: 0px 0px 5px 0px #ff0000;
    }
    50% {
      box-shadow: 0px 0px 5px 1px #ff0000;
    }
    100% {
      box-shadow: 0px 0px 5px 0px #ff0000;
    }
  }
`;

export const Label = styled.span`
  font-family: Poppins;
  font-size: 10px;
  color: #7e7a86;
  align-self: flex-start;
`;

export const PlayerBackground = styled.img`
  /* TODO: Validar imagem menor de capa do card */
  height: 100px;
  max-width: 100%;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
`;

export const PlayerAvatar = styled.img`
  width: 47px;
  height: 47px;
  border-radius: 50%;
  border: 3px solid ${(props) => props.theme.palette.success.main};
`;
