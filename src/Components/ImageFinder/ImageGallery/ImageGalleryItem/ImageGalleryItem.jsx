import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { ImageItem, Image } from './ImageGalleryItem.styled';

class ImageGalleryItem extends Component {
  render() {
    const { image } = this.props;

    return (
      <ImageItem>
        <Image src={image.largeImageURL} alt={image.id} />
      </ImageItem>
    );
  }
}

ImageGalleryItem.propTypes = {
  image: PropTypes.shape({
    largeImageURL: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
  }).isRequired,
};

export default ImageGalleryItem;
