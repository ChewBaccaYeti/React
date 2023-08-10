import React from 'react';
import PropTypes from 'prop-types';
import {
  Stats,
  Title,
  StatsList,
  Item,
  Label,
  Percentage,
} from './Statistics.styled';
import { generateRandomColor } from 'utils/randomColor';

export const Statistics = ({ data }) => {
  return (
    <Stats>
      <Title>Upload stats</Title>
      <StatsList>
        {data.map(({ id, label, percentage }) => (
          <Item key={id} color={generateRandomColor()}>
            <Label>{label}</Label>
            <Percentage>{percentage}%</Percentage>
          </Item>
        ))}
      </StatsList>
    </Stats>
  );
};

Statistics.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ).isRequired,
};
