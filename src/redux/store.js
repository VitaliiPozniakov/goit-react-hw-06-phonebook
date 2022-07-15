import { configureStore } from '@reduxjs/toolkit'
// import { combineReducers } from 'redux'
import {contactsReducer, filterReducer} from './contacts-reducer'

// const rootReducer = combineReducers ({
//     contacts: contactsReducer,
//     filter: filterReducer
// })

const store = configureStore({ 
    reducer: {
        contacts: contactsReducer,
        filter: filterReducer 
    },
    devTools: process.env.NODE_ENV === 'development',
})