// 2nd-react-home-work
import React, { Component } from 'react';
import { ToastContainer } from 'react-toastify';
import { ErrorBoundary } from 'react-error-boundary';
import Feedback from 'Components/Feedback/Feedback';
import Phonebook from 'Components/Phonebook/Phonebook';
import ImageFinder from 'Components/ImageFinder/ImageFinder';
import Container from 'Layout/Container/Container.styled';
import { GlobalStyle } from 'utils/GlobalStyle';

class App extends Component {
  render() {
    return (
      <>
        {' '}
        <ErrorBoundary>
          {' '}
          <Container>
            <Feedback />
            <Phonebook />
            <GlobalStyle />
          </Container>
          <ImageFinder />
          <ToastContainer />
        </ErrorBoundary>
      </>
    );
  }
}

export default App;
