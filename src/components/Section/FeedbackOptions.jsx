import React from 'react';
import PropTypes from 'prop-types';

import { List, Item, Button } from './FeedbackOptions.styled';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <List>
      {options.map(nameButton => {
        return (
          <Item key={nameButton}>
            <Button type="button" onClick={onLeaveFeedback}>
              {nameButton}
            </Button>
          </Item>
        );
      })}
    </List>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};

// export default FeedbackOptions;
