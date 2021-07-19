import { Component } from 'react';

import Section from './Components/Section';
import FeedbackOptions from './Components/FeedbackOptions';
import Statistics from './Components/Statistics';
import Notification from './Components/Notification';

class App extends Component {
  static defaultProps = {
    initialValue: 0,
  };

  state = {
    good: this.props.initialValue,
    neutral: this.props.initialValue,
    bad: this.props.initialValue,
  };

  leaveFeedback = feedback => {
    if (feedback === 'good') {
      this.setState(prevState => ({
        good: prevState.good + 1,
      }));
    }

    if (feedback === 'neutral') {
      this.setState(prevState => ({
        neutral: prevState.neutral + 1,
      }));
    }

    if (feedback === 'bad') {
      this.setState(prevState => ({
        bad: prevState.bad + 1,
      }));
    }
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    let totalFeedback = good + neutral + bad;
    return totalFeedback;
  };

  countPositiveFeedbackPercentage = () => {
    const { good } = this.state;
    let total = this.countTotalFeedback();
    let positiveFeedbackPercentage = 0;

    if (good) {
      positiveFeedbackPercentage = (good * 100) / total;
    }

    return Math.round(positiveFeedbackPercentage);
  };

  render() {
    const { good, neutral, bad } = this.state;
    let totalFeedback = this.countTotalFeedback();
    let positiveFeedbackPercentage = this.countPositiveFeedbackPercentage();

    return (
      <>
        <Section title={'Please leave feedback'}>
          <FeedbackOptions
            options={['good', 'neutral', 'bad']}
            onLeaveFeedback={this.leaveFeedback}
          />
        </Section>

        <Section title={'Statistics'}>
          {!totalFeedback ? (
            <Notification message={'No feedback given'} />
          ) : (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={totalFeedback}
              positivePercentage={positiveFeedbackPercentage}
            />
          )}
        </Section>
      </>
    );
  }
}

export default App;
