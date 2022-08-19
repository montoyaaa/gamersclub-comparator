import { IconDefinition } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as S from "./styles";

type InputProps = {
  label?: string;
  suffixIcon?: IconDefinition;
} & React.InputHTMLAttributes<HTMLInputElement>;

const Input = ({ label, suffixIcon, ...propsDefault }: InputProps) => {
  return (
    <S.Wrapper>
      {label && <S.Label>{label}</S.Label>}
      <S.InputArea>
        <S.Input {...propsDefault} />
      </S.InputArea>
      <S.Icon>
        {suffixIcon && <FontAwesomeIcon icon={suffixIcon} color={"#247eb9"} />}
      </S.Icon>
    </S.Wrapper>
  );
};

export default Input;
