import * as S from "./styles";

const ListItem = ({ text = "Default" }: { text?: String }) => {
  return <S.Wrapper>{text}</S.Wrapper>;
};

export default ListItem;
