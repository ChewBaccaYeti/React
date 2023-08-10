import styled from 'styled-components';

export const Table = styled.table`
  width: 100%;
`;

export const Thead = styled.thead`
  background-color: #2236f0;
  color: #ffffff;
`;

export const Tbody = styled.tbody`
  background-color: #1e5f8b;
  color: #ffffff;
`;

export const Tr = styled.tr`
  text-align: center;

  :nth-child(even) {
    background-color: gold;
    color: black;
  }
`;

export const Th = styled.th`
  padding: 10px;

  color: white;
  background-color: skyblue;
`;

export const Td = styled.td``;
