import styled from "styled-components";

export const Input = styled.input`
  color: ${(props) => props.theme.palette.primary.contrastText};
  width: 100%;
  border: none;
  padding: 8px;
  outline: none;
  font-size: 12px;
  background: none;
  font-family: sans-serif;
  border-radius: 5px;
  letter-spacing: 0.5px;
`;
export const InputArea = styled.div`
  display: flex;
  flex: 1;
  background-color: ${(props) => props.theme.palette.primary.main};
  border-radius: 5px;
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
`;
export const Icon = styled.div`
  display: flex;
  padding-left: 8px;
  cursor: pointer;
`;

export const Label = styled.span`
  padding-right: 8px;
  letter-spacing: 1px;
  text-transform: uppercase;
`;
