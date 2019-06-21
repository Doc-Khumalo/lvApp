import React  from 'react';
import PropTypes from 'prop-types';
import config from '../../config';

const QuestionsDisplay = props => {
  const {
    data,
    numberCount,
    myChange,
  } = props;

  function handleChange(item) {
    myChange(item);
  }

  return (
    <div className='response-wrapper'>
      {config.questions[numberCount].answers.map(item => {
        return (
          <div className="button-option btn-group btn-group-toggle" key={item.label}>
            <label className="option btn btn-primary">
              <input
                onChange={() => handleChange({questionId: data.questions[numberCount].id, ...item})}
                value={item.label}
                type="checkbox" name="options" autoComplete="off"/> {item.label}
            </label>
          </div>
        )
      })}
    </div>
  )
};

export default QuestionsDisplay;

QuestionsDisplay.propTypes = {
  data: PropTypes.instanceOf(Object).isRequired,
  numberCount: PropTypes.number.isRequired,
  myChange: PropTypes.func.isRequired
};