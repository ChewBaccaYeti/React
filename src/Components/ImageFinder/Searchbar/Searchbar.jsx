import React, { Component } from 'react';
import {
  SearchBar,
  SearchForm,
  SearchFormButton,
  SearchFormButtonLabel,
  SearchFormInput,
} from './Searchbar.styled';

export class Searchbar extends Component {
  state = {
    query: '', // стан для збереження значення інпута
  };

  // Обробка зміни значення інпута
  handleInputChange = event => {
    this.setState({ query: event.target.value });
  };

  // Обробка подачі форми
  handleSubmit = event => {
    event.preventDefault();
    this.props.onSubmit(this.state.query); // передача значення інпута батьківському компоненту
    this.setState({ query: '' }); // очищення інпута
  };

  render() {
    return (
      <SearchBar>
        <SearchForm onSubmit={this.handleSubmit}>
          <SearchFormButton type="submit">
            <SearchFormButtonLabel>Search</SearchFormButtonLabel>
          </SearchFormButton>

          <SearchFormInput
            className="input"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            value={this.state.query} // значення інпута зі стану
            onChange={this.handleInputChange} // обробка зміни значення інпута
          />
        </SearchForm>
      </SearchBar>
    );
  }
}

export default Searchbar;
