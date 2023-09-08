import React, { Component } from 'react';
import { Gallery } from './ImageGallery.styled';
import { ImageGalleryItem } from './ImageGalleryItem/ImageGalleryItem';
import API from 'services/api';

export class ImageGallery extends Component {
  state = {
    images: [], // Стан для збереження завантажених зображень
  };

  componentDidMount() {
    API.fetchImages('')
      .then(images => {
        this.setState({ images });
      })
      .catch(error => {
        console.error('Error fetching images:', error);
      });
  }

  render() {
    const { images } = this.state;

    return (
      <Gallery>
        {images.map(image => (
          <ImageGalleryItem key={image.id} image={image} />
        ))}
      </Gallery>
    );
  }
}

export default ImageGallery;
