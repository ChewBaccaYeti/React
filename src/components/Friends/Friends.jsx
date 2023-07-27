import { Wrapper } from './Friends.styled';
import { theme } from 'index';

export const Friends = ({ friend: { avatar, name, isOnline } }) => {
  return (
    <Wrapper theme={theme}>
      <div>
        <img src={avatar} alt={name}></img>
        <span>{name}</span>
        <p>{isOnline ? 'Online' : 'Offline'}</p>
      </div>
    </Wrapper>
  );
};
