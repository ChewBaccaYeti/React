// 2nd-react-home-work
import React, { Component } from 'react';
import { ToastContainer } from 'react-toastify';
import Feedback from 'Components/Feedback/Feedback';
import Phonebook from 'Components/Phonebook/Phonebook';
import ImageFinder from 'Components/ImageFinder/ImageFinder';
import Container from 'Container/Container.styled';
import { GlobalStyle } from 'utils/GlobalStyle';

class App extends Component {
  render() {
    return (
      <>
        {' '}
        <Container>
          <Feedback />
          <Phonebook />
          <GlobalStyle />
        </Container>
        <ImageFinder />
        <ToastContainer />
      </>
    );
  }
}

export default App;
