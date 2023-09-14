import React from 'react';
import PropTypes from 'prop-types';
import { List } from './ImageGallery.styled';
import { ImageGalleryItem } from './ImageGalleryItem/ImageGalleryItem';

export const ImageGallery = ({ items, getItemClick }) => {
  return (
    <List>
      {items &&
        items.length > 0 &&
        items.map(item => (
          <ImageGalleryItem
            key={item.id}
            item={item}
            getItemClick={getItemClick}
          />
        ))}
    </List>
  );
};

ImageGallery.propTypes = {
  items: PropTypes.array,
  getItemClick: PropTypes.func,
};

export default ImageGallery;
