import PropTypes from 'prop-types';
import style from './Statistics.module.css';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <div>
      <ul className={style.statisticsList}>
        <li className={style.statisticsElement}>Good: {good}</li>
        <li className={style.statisticsElement}>Neutral: {neutral}</li>
        <li className={style.statisticsElement}>Bad: {bad}</li>
        <li className={style.statisticsElement}>Total: {total}</li>
        <li className={style.statisticsElement}>
          Positive feedback: {positivePercentage} %
        </li>
      </ul>
    </div>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};

export default Statistics;
