import React from 'react';
import PropTypes from 'prop-types';
import { ListItem, Image } from './ImageGalleryItem.styled';

export const ImageGalleryItem = ({
  item: { webformatURL, largeImageURL, tags },
  getItemClick,
}) => {
  const onClickImage = () => {
    getItemClick(largeImageURL);
  };

  return (
    <ListItem>
      <Image src={webformatURL} alt={tags} onClick={onClickImage} />
    </ListItem>
  );
};

ImageGalleryItem.propTypes = {
  item: PropTypes.shape({
    webformatURL: PropTypes.string.isRequired,
    largeImageURL: PropTypes.string.isRequired,
    tags: PropTypes.string.isRequired,
  }),
  getItemClick: PropTypes.func.isRequired,
};

export default ImageGalleryItem;
