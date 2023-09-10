import PropTypes from 'prop-types';
import { Gallery } from './ImageGallery.styled';
import ImageGalleryItem from './ImageGalleryItem/ImageGalleryItem';

export const ImageGallery = ({ images, getItemClick }) => {
  return (
    <Gallery>
      {images.map(image => (
        <ImageGalleryItem
          key={image.id}
          image={image}
          getItemClick={getItemClick}
        />
      ))}
    </Gallery>
  );
};

ImageGallery.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      largeImageURL: PropTypes.string.isRequired,
    })
  ).isRequired,
  getItemClick: PropTypes.func.isRequired,
};

export default ImageGallery;
