import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;

  height: 200px;
  width: 200px;
  padding: 10px;
  margin-bottom: 10px;

  border: 5px solid black;
  border-radius: 8px;
  background-color: ${props => (props.isOnline ? 'gold' : 'grey')};  }};
`;

export const TextBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-itmes: center;
  justify-content: center;
`;

export const Avatar = styled.img`
  height: 150px;
  width: 150px;
`;

export const Name = styled.span`
  color: black;
  border: 1px solid black;
  border-radius: 4px;
`;
export const OnlineStatus = styled.p`
    color: ${props => (props.isOnline ? 'green' : 'red')};  }};
`;

// ${p => p.theme.colors.black}