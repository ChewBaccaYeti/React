import styled from 'styled-components';

export const ProfileBlock = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 300px;

  padding: 10px;
  margin: 10px;

  border: 1px solid black;
  border-radius: 10px;
`;

export const Avatar = styled.img`
  height: 150px;
  width: 150px;
`;

export const Username = styled.h2`
  margin-bottom: 5px;
`;

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  color: grey;
`;

export const Stats = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  gap: 5px;
`;
