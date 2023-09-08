import React, { Component } from 'react';
import { ImageItem, Image } from './ImageGalleryItem.styled';

export class ImageGalleryItem extends Component {
  render() {
    const { image } = this.props;

    return (
      <ImageItem>
        <Image src={image.largeImageURL} alt={image.id} />
      </ImageItem>
    );
  }
}

export default ImageGalleryItem;
