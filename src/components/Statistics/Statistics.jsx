import PropTypes from 'prop-types';
import {
  Stats,
  UploadStats,
  StatsList,
  ListItem,
  Item,
} from './Statistics.styled';
import { generateRandomColor } from 'utils/randomColor';

export const Statistics = ({ data: { id, label, percentage } }) => {
  return (
    <Stats>
      <UploadStats></UploadStats>
      <StatsList>
        <ListItem key={id} style={{ backgroundColor: generateRandomColor() }}>
          <Item>
            {label}
            {percentage}
          </Item>
        </ListItem>
        <ListItem key={id} style={{ backgroundColor: generateRandomColor() }}>
          <Item>
            {label}
            {percentage}
          </Item>
        </ListItem>
        <ListItem key={id} style={{ backgroundColor: generateRandomColor() }}>
          <Item>
            {label}
            {percentage}
          </Item>
        </ListItem>
        <ListItem key={id} style={{ backgroundColor: generateRandomColor() }}>
          <Item>
            {label}
            {percentage}
          </Item>
        </ListItem>
        <ListItem key={id} style={{ backgroundColor: generateRandomColor() }}>
          <Item>
            {label}
            {percentage}
          </Item>
        </ListItem>
      </StatsList>
    </Stats>
  );
};

Statistics.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired,
};
