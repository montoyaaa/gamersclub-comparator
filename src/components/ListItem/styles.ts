import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex: 1;
  color: ${(props) => props.theme.palette.primary.contrastText};
  border: 1px solid hsla(0, 0%, 100%, 0.08);
  padding: 8px 24px;
  overflow: hidden;
  min-width: 120px;
  font-size: 18px;
  white-space: nowrap;
  border-radius: 2px;
  text-overflow: ellipsis;
  letter-spacing: 0.5px;
  background-color: ${(props) => props.theme.palette.primary.main};
`;

export const Actions = styled.div`
  display: flex;
  gap: 5px;
`;
