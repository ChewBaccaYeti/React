import React, { Component } from 'react';
import ErrorBoundary from 'utils/ErrorBoundary';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Searchbar } from './Searchbar/Searchbar';
import { Container } from 'Layout/Container/Container.styled';
import scrollOnLoad from 'utils/ScrollOnLoad';
import api from 'services/API/images-api';

class ImageFinder extends Component {
  state = {
    images: [],
    largeImage: '',
    searchQuery: '',
    page: 1,
    isModalOpen: false,
    isLoading: false,
    error: null,
  };

  componentDidMount(_, prevState) {
    if (!prevState || prevState.searchQuery !== this.state.searchQuery) {
      this.getDataImages();
    }
  }

  handleSubmitSearchQuery = searchQuery => {
    this.setState({ images: [], searchQuery, page: 1 }, () => {
      this.getDataImages(); // Викликаємо функцію після оновлення стану
    });
  };

  getDataImages = async () => {
    const { searchQuery, page } = this.state;

    this.setState({ isLoading: true });

    try {
      const { images: hits } = await api(searchQuery, page);

      this.setState(({ images, page }) => ({
        images: [...images, ...hits],
        page: page + 1,
        error: null, // Очищаємо помилку, якщо запит був успішним
      }));

      if (page !== 1) {
        scrollOnLoad();
      }
    } catch (error) {
      this.setState({ error: 'Oops! Something get wrong, fella! :)' });
      console.error(error);
    } finally {
      this.setState({ isLoading: false });
    }
  };

  getLargeImage = largeImage => {
    this.setState({ largeImage, isModalOpen: true });
  };

  toggleShowModal = () => {
    this.setState(({ isModalOpen }) => ({ isModalOpen: !isModalOpen }));
  };

  render() {
    const { images, isLoading, error } = this.state;

    return (
      <ErrorBoundary fallback={<div>Something went wrong</div>}>
        <Container>
          <Searchbar onSubmit={this.handleSubmitSearchQuery} />
          <ImageGallery items={images} getItemClick={this.getLargeImage} />
          {isLoading && <p>Loading...</p>}
          {error && <p>{error}</p>}
        </Container>
      </ErrorBoundary>
    );
  }
}

export default ImageFinder;
