import React, { Component } from 'react';
import Options from 'Components/Feedback/Options/Options';
import Container from 'Components/Layout/Container/Container.styled';
import { GlobalStyle } from 'utils/GlobalStyle';

class App extends Component {
  render() {
    return (
      <Container>
        <Options />
        <GlobalStyle />
      </Container>
    );
  }
}

export default App;
