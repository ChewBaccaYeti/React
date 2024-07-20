import styled from 'styled-components';

export const BtnContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Button = styled.button`
  &:hover {
    background-color: #${() => Math.floor(Math.random() * 16777215).toString(16)};
    border: #${() => Math.floor(Math.random() * 16777215).toString(16)};
  }
`;

export default Button;
