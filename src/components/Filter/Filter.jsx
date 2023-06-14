import React from 'react';
import PropTypes from 'prop-types';
import { FilterInput, FilterLabel } from './Filter.styled';

const Filter = ({ value, onChange }) => {
  return (
    <FilterLabel htmlFor="filter">
      Find contacts by name
      <FilterInput
        name="filter"
        type="text"
        value={value}
        onChange={onChange}
      />
    </FilterLabel>
  );
};

export default Filter;

Filter.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
};
