import { rgba } from "polished";
import styled from "styled-components";

type ButtonProps = {
  color?: "secondary" | "danger" | "success" | "info";
};

export const IconButton = styled.button<ButtonProps>`
  outline: none;
  cursor: pointer;
  color: ${(props) =>
    props.color
      ? props.theme.palette[props.color].main
      : "hsla(0, 0%, 100%, 0.08)"};
  background-color: transparent;
  font-size: 17px;
  border-radius: 6px;
  border: solid 1px
    ${(props) =>
      props.color
        ? props.theme.palette[props.color].main
        : "hsla(0, 0%, 100%, 0.08)"};
  height: 45px;
  width: 45px;

  :hover {
    background: ${(props) =>
      rgba(
        props.color
          ? props.theme.palette[props.color].main
          : "hsla(0, 0%, 100%, 0.08)",
        0.15
      )};
  }
`;
