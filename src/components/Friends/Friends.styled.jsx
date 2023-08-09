import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 200px;
  padding: 10px;
  margin: 10px;
  gap: 5px;

  border: 5px solid black;
  border-radius: 8px;
  background-color: ${props => (props.isOnline ? 'gold' : 'grey')};
`;

export const Avatar = styled.img`
  height: 150px;
  width: 150px;
`;

export const TextBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-itmes: center;
  justify-content: center;
`;

export const Name = styled.span`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  color: black;
  border: 1px solid black;
  border-radius: 4px;
`;

export const OnlineStatus = styled.p`
  width: 50px;
  color: ${props => (props.isOnline ? 'gold' : 'grey')};  }};
`;

export const OnlineGateKeeper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 50px;
  border-radius: 4px;
  background-color: ${props => (props.isOnline ? 'green' : 'red')};  }};
`;
