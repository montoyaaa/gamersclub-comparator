import styled from "styled-components";

type SectionProps = {
  divider?: String[];
};

export const Container = styled.div`
  flex-direction: column;
  margin: 10%;
  background-color: ${(props) => props.theme.palette.card.main};
  border: 1px solid hsla(0, 0%, 100%, 0.08);
  color: ${(props) => props.theme.palette.card.contrastText};

  @media (max-width: 600px) {
    margin: 5%;
  }
`;

export const Wrapper = styled.div`
  gap: 8px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;

  @media (max-width: 600px) {
    align-items: inherit;
    flex-direction: column;
    text-align: center;
  }
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
