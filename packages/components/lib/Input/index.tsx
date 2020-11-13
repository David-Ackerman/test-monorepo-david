import React, { ChangeEvent } from 'react';
import { InputStyled } from './styles';

type Props = {
  borderPosition: 'top'|'bottom'|'left'|'right';
  borderColor?: string;
  colorHover?: string;
  borderWidth?: number;
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
}

const Input = ({borderColor = '#00000020', borderPosition, borderWidth = 2, onChange, placeholder = 'Name', value, colorHover}: Props) => (
  <InputStyled hoverColor={colorHover}bdColor={borderColor} bdPosition={borderPosition} bdWidth={borderWidth} value={value} onChange={onChange} placeholder={placeholder} />
);

export default Input;