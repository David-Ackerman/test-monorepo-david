import styled from 'styled-components';

export const ButtonStyled = styled.button<{bgColor: string}>`
  background: ${({bgColor})  => bgColor};
  transition: opacity .5s;
  width: 180px;
  height: 60px;
  border: none;
  outline: none;
  font-weight: bold;
  font-size: 20px;
  color: #EEE;
  border-radius: 10px;
  :focus {
    outline: none;
    opacity: 0.5;
  }
  :hover {
    opacity: 0.5;
  }

`;