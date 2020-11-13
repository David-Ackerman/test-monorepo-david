import styled from 'styled-components';

type Props = {
  bdColor: string;
  bdPosition: 'top' | 'bottom' | 'left' | 'right';
  bdWidth: number;
  hoverColor: string | undefined;
}

export const InputStyled = styled.input<Props>`
  outline: none;
  background: transparent;
  border: none;
  display: flex;
  height: 40px;
  width: 300px;
  align-items: center;
  padding: 0 15px;
  font-size: 20px;
  transition: .4s;
  ${({bdColor, bdPosition, bdWidth}) => `border-${bdPosition}: ${bdWidth}px solid ${bdColor}`};
  &:focus,:hover{
    outline: none;
    border-color: ${({hoverColor}) => hoverColor};
  }
`;