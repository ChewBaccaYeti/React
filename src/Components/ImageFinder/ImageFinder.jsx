import { Component } from 'react';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Searchbar } from './Searchbar/Searchbar';

export class ImageFinder extends Component {
  render() {
    return (
      <div>
        <Searchbar />
        <ImageGallery />
      </div>
    );
  }
}

export default ImageFinder;
