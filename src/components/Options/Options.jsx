import PropTypes from 'prop-types';
import { OptionBtn } from './Options.styled';
import { OptionContainer } from './Options.styled';
import shortid from 'shortid';
export const FeedbackOptions = ({ options, clickFeedback }) => {
  return (
    <OptionContainer>
      {options.map(option => (
        <OptionBtn
          type="button"
          key={shortid.generate()}
          name={option}
          onClick={clickFeedback}
        >
          {option}
        </OptionBtn>
      ))}
    </OptionContainer>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.array.isRequired,
  clickFeedback: PropTypes.func.isRequired,
};
