import React, { Component } from 'react';
import { ToastContainer } from 'react-toastify';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Searchbar } from './Searchbar/Searchbar';

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

  // Метод для получения изображений (можете использовать componentDidMount, например)
  // Этот метод будет заполнять массив images данными из API или другим способом
  // Например, можно использовать Axios или fetch для выполнения запроса к API
  // и обновления состояния images при получении данных
  fetchImages = async () => {
    const { searchQuery, page, images } = this.state;

    this.setState({ isLoading: true });

    try {
      const response = await fetchImages(searchQuery, page);
      const { hits } = response.data;

      this.setState(prevState => ({
        images: [...prevState.images, ...hits],
        page: prevState.page + 1,
      }));

      if (page !== 1) {
        // scrollonLoad(); // Прокрутка для модального окна
      }
    } catch (error) {
      this.setState({ error: 'Looks like you get an error..:)' });
    } finally {
      this.setState({ isLoading: false });
    }
  };

  // Метод для обработки клика на изображении
  handleImageClick = searchQuery => {
    this.setState({ images: [], searchQuery, page: 1 });
  };

  // Вызов метода для получения изображений после монтирования компонента
  componentDidMount(_, prevState) {
    if (prevState.searchQuery !== this.state.searchQuery) {
      this.fetchImages();
    }
  }

  render() {
    return (
      <div>
        <Searchbar />
        <ImageGallery
          images={this.state.images}
          getItemClick={this.handleImageClick}
        />
        <ToastContainer />
      </div>
    );
  }
}

export default ImageFinder;
