// 2nd-react-home-work
import React, { Component } from 'react';
import Feedback from 'Components/Feedback/Feedback';
import Phonebook from 'Components/Phonebook/Phonebook';
import Container from 'Components/Layout/Container/Container.styled';
import { GlobalStyle } from 'utils/GlobalStyle';

class App extends Component {
  render() {
    return (
      <Container>
        <Feedback />
        <Phonebook />
        <GlobalStyle />
      </Container>
    );
  }
}

export default App;
