import React, { Component, useState } from 'react';
import { FeedbackContainer, FeedbackButton } from './FeedbackOptions.styled';

class FeedbackOptions extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleButtonClick = feedbackType => {
    this.setState(prevState => ({
      [feedbackType]: prevState[feedbackType] + 1,
    }));
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  countPositiveFeedbackPercentage = () => {
    const { good } = this.state;
    const totalFeedback = this.countTotalFeedback();
    return totalFeedback > 0 ? Math.round((good / totalFeedback) * 100) : 0;
  };

  render() {
    const totalFeedback = this.countTotalFeedback();
    const positiveFeedbackPercentage = this.positiveFeedbackPercentage();

    return (
      <FeedbackContainer>
        <strong>
          <p>Please leave your feedback</p>
        </strong>
        <FeedbackButton onClick={() => this.handleButtonClick('good')}>
          Good
        </FeedbackButton>
        <FeedbackButton onClick={() => this.handleButtonClick('neutral')}>
          Neutral
        </FeedbackButton>
        <FeedbackButton onClick={() => this.handleButtonClick('bad')}>
          Bad
        </FeedbackButton>
        <strong>
          <p>Statistics</p>
        </strong>
        <p>Good: {this.state.good}</p>
        <p>Neutral: {this.state.neutral}</p>
        <p>Bad: {this.state.bad}</p>
        <p>Total Feedback: {totalFeedback}</p>
        <p>Positive Feedback Percentage: {positiveFeedbackPercentage}%</p>
      </FeedbackContainer>
    );
  }
}

export default FeedbackOptions;
