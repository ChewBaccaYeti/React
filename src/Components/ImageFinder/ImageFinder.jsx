import React, { Component } from 'react';
import { Container } from './ImageFinder.styled';
import { Searchbar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Loader } from './Loader/Loader';
import { LoadMore } from './Button/Button';
import { ModalWindow } from './Modal/Modal';

import api from 'services/API/images-api';
import ErrorBoundary from 'utils/ErrorBoundary';
import scrollOnLoad from 'utils/ScrollOnLoad';

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
      const response = await api(searchQuery, page);

      if (Array.isArray(response.hits)) {
        const { hits } = response;

        this.setState(({ images, page }) => ({
          images: [...images, ...hits],
          page: page + 1,
          error: null,
        }));

        if (page !== 1) {
          scrollOnLoad();
        }
      } else {
        // Обработка случая, когда данные не соответствуют ожиданиям
        console.error('Invalid data format:', response);
        this.setState({ error: 'Oops! Something went wrong, fella! :)' });
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
    const { images, largeImage, isModalOpen, isLoading, error } = this.state;
    const lengthImages = images.length >= 12;
    const isLoadMoreDisabled = !lengthImages || isLoading;

    return (
      <ErrorBoundary fallback={<div>Something went wrong</div>}>
        <Container>
          <Searchbar onSubmit={this.handleSubmitSearchQuery} />
          {error}
          <ImageGallery items={images} getItemClick={this.getLargeImage} />
          {isLoading && <Loader />}
          {lengthImages && (
            <LoadMore
              onLoadMore={this.getDataImages}
              disabled={isLoadMoreDisabled}
            />
          )}
          {isModalOpen && (
            <ModalWindow
              largeImageURL={largeImage}
              onClick={this.toggleShowModal}
            />
          )}
        </Container>
      </ErrorBoundary>
    );
  }
}

export default ImageFinder;
