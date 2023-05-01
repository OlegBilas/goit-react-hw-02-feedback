import React from 'react';
import PropTypes from 'prop-types';
import { StatTitle, Facts } from './Statistics.styled';

export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
  return (
    <>
      <StatTitle>Statistics</StatTitle>
      <Facts>Good: {good}</Facts>
      <Facts>Neutral: {neutral}</Facts>
      <Facts>Bad: {bad}</Facts>
      <Facts>Total: {total}</Facts>
      <Facts>Positive feedback: {positivePercentage}%</Facts>
    </>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};

// export default Statistics;
