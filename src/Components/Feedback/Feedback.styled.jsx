import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 100%;
  margin: 16px;
  padding: 14px;
  border: 5px solid black;
  border-radius: 20px;

  &:hover {
    background-color: #${() => Math.floor(Math.random() * 16777215).toString(16)};
    border: 6px solid #${() => Math.floor(Math.random() * 16777215).toString(16)};
  }
`;

export default Container;
