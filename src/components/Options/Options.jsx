import PropTypes from 'prop-types';
import { OptionBtn } from './Options.styled';
import { OptionContainer } from './Options.styled';
import shortid from 'shortid';
export const FeedbackOptions = ({ options, setValue }) => {
  return (
    <OptionContainer>
      {options.map(option => (
        <OptionBtn
          type="button"
          key={shortid.generate()}
          name={option}
          onClick={() => setValue(option)}
        >
          {option}
        </OptionBtn>
      ))}
    </OptionContainer>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.array.isRequired,
  setValue: PropTypes.func.isRequired,
};
