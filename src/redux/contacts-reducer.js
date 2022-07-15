import { createReducer } from "@reduxjs/toolkit";
import { act } from "react-dom/test-utils";
import { combineReducers } from "redux";
import actions from './contacts-actions '

const contacts = createReducer([
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ], {
      [actions.addContact]: (state, {payload}) => {
          return [...state, payload]
      },
      [actions.deleteContact]: (state, {payload}) =>  state.filter(({id}) => id !== payload)
  })

const filter = createReducer('', {
     [actions.changeFilter]: (_, {payload}) => payload
})

export default combineReducers({
    contacts,
    filter 
}

)