import React, { Component } from 'react';
import StatisticsContainer from './Statistics.styled';

class Statistics extends Component {
  render() {
    const { good, neutral, bad } = this.props;
    const total = good + neutral + bad;
    const positivePercentage = total > 0 ? Math.round((good / total) * 100) : 0;

    return (
      <StatisticsContainer>
        <strong>
          <p>Statistics</p>
        </strong>
        <p>Good: {good}</p>
        <p>Neutral: {neutral}</p>
        <p>Bad: {bad}</p>
        <p>Total Feedback: {total}</p>
        <p>Positive Feedback Percentage: {positivePercentage}%</p>
      </StatisticsContainer>
    );
  }
}

export default Statistics;
