import React, { Component } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import PropTypes from 'prop-types';
import {
  SearchBar,
  SearchForm,
  SearchButton,
  SearchLabel,
  SearchInput,
} from './Searchbar.styled';
import API from 'services/API/images-api';

export class Searchbar extends Component {
  state = {
    query: '',
  };

  // Обработчик изменения значения ввода
  handleChangeQuery = event => {
    const query = event.currentTarget.value.toLowerCase();
    this.setState({ query });
  };

  // Обработчик отправки формы
  handleSubmit = async event => {
    event.preventDefault();

    if (this.state.query === '') {
      // Проверка на пустое поле строки поиска
      toast.warn('Input is empty! Please put a word.');
      return;
    }

    try {
      const images = await API.fetchImages(this.state.query);
      this.props.updateImages(images);
      this.setState({ query: '' });
    } catch (error) {
      console.error(error);
      // Используем react-toastify для отображения ошибки
      toast.error('Something get wrong with images.');
    }
  };

  render() {
    return (
      <SearchBar>
        <SearchForm onSubmit={this.handleSubmit}>
          <SearchButton type="submit" updateImages={this.updateImages}>
            <SearchLabel>Search</SearchLabel>
          </SearchButton>

          <SearchInput
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            value={this.state.query}
            onChange={this.handleChangeQuery}
          />
        </SearchForm>
      </SearchBar>
    );
  }
}

Searchbar.propTypes = {
  updateImages: PropTypes.func.isRequired,
};

export default SearchBar;
