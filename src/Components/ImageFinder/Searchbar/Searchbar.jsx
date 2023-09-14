import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { GiSpaceShuttle } from 'react-icons/gi';
import {
  SearchBar,
  SearchForm,
  SearchButton,
  SearchLabel,
  SearchInput,
} from './Searchbar.styled';

export class Searchbar extends Component {
  state = {
    query: '',
  };

  handleChangeQuery = event => {
    const query = event.target.value.toLowerCase();
    this.setState({ query });
  };

  handleSubmit = event => {
    event.preventDefault();

    const { query } = this.state;
    const { onSubmit } = this.props;

    if (query.trim() === '') {
      return;
    }

    onSubmit(query);
    this.setState({ query: '' });
  };

  render() {
    const { query } = this.state;

    return (
      <SearchBar>
        <SearchForm onSubmit={this.handleSubmit}>
          <SearchInput
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            value={query}
            onChange={this.handleChangeQuery}
          />

          <SearchButton type="submit">
            <SearchLabel>
              <GiSpaceShuttle />
            </SearchLabel>
          </SearchButton>
        </SearchForm>
      </SearchBar>
    );
  }
}

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default SearchBar;
