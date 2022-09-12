import styled from "styled-components";

type SectionProps = {
  divider?: String[];
};

export const Container = styled.div`
  flex-direction: column;
  margin: 10% 5%;
  background-color: ${(props) => props.theme.palette.card.main};
  border: 1px solid hsla(0, 0%, 100%, 0.08);
  color: ${(props) => props.theme.palette.card.contrastText};

  @media (min-width: 1800px) {
    margin: 10% 20%;
  }
  @media (max-width: 600px) {
    margin: 0;
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

export const Highlight = styled.span`
  display: flex;
  justify-content: center;
  padding-bottom: 5px;
  font-size: 24px;
  text-transform: uppercase;
  letter-spacing: 1px;
`;
