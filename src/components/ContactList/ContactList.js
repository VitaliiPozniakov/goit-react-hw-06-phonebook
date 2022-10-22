import React from 'react';
import { List, Span, Item, Btn } from './ContactList.styled';
// import { deleteContact } from '../../redux/contacts-actions';
import { deleteContact } from '../../redux/contacts/contacts-slice';
import { useSelector, useDispatch } from 'react-redux';
// import { getVisibleContacts } from '../../redux/selectors';
import { getVisibleContacts } from '../../redux/contacts/contacts-selectors';

const ContactList = () => {
  const visibleContacts = useSelector(getVisibleContacts);
  const dispatch = useDispatch();

  return (
    <List>
      {visibleContacts.map(({ id, number, name }) => (
        <Item key={id}>
          <Span></Span>
          {name}: {number}
          <Btn onClick={() => dispatch(deleteContact(id))}>Delete</Btn>
        </Item>
      ))}
    </List>
  );
};

export default ContactList;
