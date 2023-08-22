import styled from 'styled-components';

export const FeedbackContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 250px;
  margin: 10px;
  border: 5px solid black;
  border-radius: 5px;
`;

export const FeedbackButton = styled.button`
  width: 100px;
  margin: 5px 0 5px 0;
  border: 2px solid black;
  border-radius: 2px;

  &:hover {
    background-color: #${() => Math.floor(Math.random() * 16777215).toString(16)};
  }
`;
