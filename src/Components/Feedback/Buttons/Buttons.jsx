import React, { Component } from 'react';
import { BtnContainer, Button } from './Buttons.styled';
import Statistics from '../Statistics';
import Notifications from '../Notifications';

class FeedbackButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      good: 0,
      neutral: 0,
      bad: 0,
      showStatistics: false,
    };
  }

  handleButtonClick = feedbackType => {
    this.setState(prevState => ({
      [feedbackType]: prevState[feedbackType] + 1,
      showStatistics: true,
    }));
  };

  render() {
    const { showStatistics } = this.state;
    return (
      <BtnContainer>
        <Button onClick={() => this.handleButtonClick('good')}>Good</Button>
        <Button onClick={() => this.handleButtonClick('neutral')}>
          Neutral
        </Button>
        <Button onClick={() => this.handleButtonClick('bad')}>Bad</Button>

        {showStatistics ? (
          <Statistics
            good={this.state.good}
            neutral={this.state.neutral}
            bad={this.state.bad}
          />
        ) : (
          <Notifications message="There is no feedback" />
        )}
      </BtnContainer>
    );
  }
}

export default FeedbackButton;
