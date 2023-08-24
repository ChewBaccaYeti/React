import React, { Component } from 'react';
import { Container } from './Options.styled';
import FeedbackButton from 'Components/Feedback/Buttons/Buttons';

class Options extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  render() {
    return (
      <Container>
        <strong>
          <p>Please leave your feedback</p>
        </strong>
        <FeedbackButton />
      </Container>
    );
  }
}

export default Options;
