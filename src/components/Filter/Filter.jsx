import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';
import { FilterWrap, Label, Input } from "./Filter.styled.jsx";

const Filter = ({ value, onChange }) => {
  const nameInputValue = nanoid();
  
  return (
    <FilterWrap>
      <Label  htmlFor={nameInputValue}>
        Find contacts by name
      </Label>
      <Input
        
        id={nameInputValue}
        type="text"
        value={value}
        onChange={onChange}
      />
    </FilterWrap>
  );
}

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,  
};

export {Filter}