import styled from 'styled-components';

export const BtnContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Button = styled.button`
  width: 100px;
  height: 50px;
  margin: 5px 0 5px 0;
  border: 2px solid black;
  border-radius: 4px;

  &:hover {
    background-color: #${() => Math.floor(Math.random() * 16777215).toString(16)};
  }
`;

export default Button;
