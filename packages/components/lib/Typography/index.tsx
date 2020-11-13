import React from 'react';
import { TypographyStyled } from './styles';

type Props = {
  color: string;
  font: string;
  size?: string;
  children: React.ReactNode;
}

const Typography = ({color, size = '20px', font, children}: Props) => (
  <TypographyStyled color={color} size={size} font={font} >
    {children}
  </TypographyStyled>
);

export default Typography;