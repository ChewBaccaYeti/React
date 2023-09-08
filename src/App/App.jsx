import React, { Component } from 'react';
import Feedback from 'Components/Feedback/Feedback';
import Phonebook from 'Components/Phonebook/Phonebook';
import ImageFinder from 'Components/ImageFinder/ImageFinder';
import Container from 'Layout/Container/Container.styled';
import { GlobalStyle } from 'utils/GlobalStyle';

class App extends Component {
  render() {
    return (
      <Container>
        <Feedback />
        <Phonebook />
        <ImageFinder />
        <GlobalStyle />
      </Container>
    );
  }
}

export default App;
