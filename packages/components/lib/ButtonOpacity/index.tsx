import React from 'react';
import {ButtonStyled} from './styles';

type Props = {
  text: string;
  bgColor: string;
}

const ButtonOpacity = ({text, bgColor}: Props) => {
  return (
    <ButtonStyled bgColor={bgColor}>
      {text}
    </ButtonStyled>
  )
}
export default ButtonOpacity;