import * as S from "./styles";

const ListItem = ({
  text,
  actions,
}: {
  text: String;
  actions?: JSX.Element[];
}) => {
  return (
    <S.Wrapper>
      {text}
      <S.Actions>{actions}</S.Actions>
    </S.Wrapper>
  );
};

export default ListItem;
