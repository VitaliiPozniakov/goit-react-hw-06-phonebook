import { createAction } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';

const changeFilter = createAction('contacts/changeFilter');

const deleteContact = createAction('contacts/delete ');

const addContact = createAction('contacts/add', (name, number) => ({
  payload: {
    id: nanoid(10),
    name,
    number,
  },
}));

// console.log(addContact('dgg', 145))

export default { changeFilter, deleteContact, addContact };
