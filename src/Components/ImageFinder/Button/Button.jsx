import React from 'react';
import PropTypes from 'prop-types';
import { Button } from './Button.styled';

export function LoadMore({ onLoadMore }) {
  return (
    <Button type="button" onClick={onLoadMore}>
      Load more
    </Button>
  );
}

LoadMore.propTypes = {
  onLoadMore: PropTypes.func.isRequired,
};

export default LoadMore;
