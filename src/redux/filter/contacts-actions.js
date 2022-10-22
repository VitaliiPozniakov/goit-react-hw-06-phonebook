import { createAction } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';

export const filterContacts = createAction('contacts/changeFilter');

export const deleteContact = createAction('contacts/delete ');

export const addContact = createAction('contacts/add', (name, number) => ({
  payload: {
    id: nanoid(10),
    name,
    number,
  },
}));
