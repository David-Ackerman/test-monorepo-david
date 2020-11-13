import styled from 'styled-components';

type Props = {
  color: string;
  size: string;
  font: string;
}

export const TypographyStyled = styled.p<Props>`
  color: ${({color}) => color};
  font-size: ${({size}) => size};
  font-family: ${({font}) => font};
`;
