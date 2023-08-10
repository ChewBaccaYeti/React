import styled from 'styled-components';

export const Stats = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  background-color: white;
  border: 1px solid black;
`;

export const Title = styled.h2`
  padding: 15px 0 15px 0;
`;

export const StatsList = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 500px;
`;

export const Item = styled.li`
  width: 100px;
  padding: 15px 0 15px 0;

  background-color: ${props => props.color};
  border: 1px solid black;
`;

export const Label = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Percentage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
