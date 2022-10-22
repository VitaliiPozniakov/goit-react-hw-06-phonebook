import { combineReducers } from "@reduxjs/toolkit";

import contacts from "../redux/contacts/contacts-slice";
import filter from "../redux/filter/filter-slice";

const rootReducer = combineReducers({
    contacts,
    filter,
})

export default rootReducer;