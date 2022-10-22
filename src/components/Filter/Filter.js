import React from 'react';
import { Input, Label, LabelText } from './Filter.styled';
import { filterContacts } from '../../redux/filter/filter-slice'
import { useSelector, useDispatch } from 'react-redux';
import { getFilter } from '../../redux/filter/filter-selectors';

const Filter = () => {
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();

  return (
    <Label>
      <LabelText>Find contacts by name</LabelText>
      <Input
        type="text"
        value={filter}
        onChange={e => dispatch(filterContacts(e.target.value))}
      />
    </Label>
  );
};


export default Filter;
