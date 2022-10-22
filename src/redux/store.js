import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

// import contactsReducer from './contacts-reducer';
import contactsReducer from './rootReducer';

const middleware = [
  ...getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
];

const contactsPersistConfig = {
  key: 'contacts',
  storage,
  blacklist: ['filter'],
};

export const store = configureStore({
  reducer: {
    contacts: persistReducer(contactsPersistConfig, contactsReducer),
  },
  middleware,
  devTools: process.env.NODE_ENV === 'development',
});

export const persistor = persistStore(store);



























// import { configureStore, combineReducers  } from '@reduxjs/toolkit'
// // import { combineReducers } from 'redux'
// import {
//     persistStore,
//     persistReducer,
//     FLUSH,
//     REHYDRATE,
//     PAUSE,
//     PERSIST,
//     PURGE,
//     REGISTER,
//   } from 'redux-persist' 
// import storage from 'redux-persist/lib/storage' 
// // import {contactsReducer, filterReducer} from './contacts-reducer'
// import contactsReducer from './contacts-reducer'



// const contactsPersistConfig = {
//     key: 'contacts',
//     storage,
//     blacklist: ['filter']
//   }

// export const store = configureStore({ 
//     reducer: {
//         contacts: persistReducer(contactsPersistConfig, contactsReducer) ,
//     }  ,
//     devTools: process.env.NODE_ENV === 'development',

//     middleware: (getDefaultMiddleware) =>
//     getDefaultMiddleware({
//       serializableCheck: {
//         ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
//       },
//     }),
// })


// // const persistConfig = {
// //     key: 'contacts',
// //     storage,
// //   }


// //   const rootReducer = combineReducers ({
// //     contacts:  contactsReducer,
// //     // filter: filterReducer
// // })

// //   const persistedReducer = persistReducer(persistConfig, rootReducer)


// // const store = configureStore({ 
// //     reducer: persistedReducer  ,
// //     devTools: process.env.NODE_ENV === 'development',

// //     middleware: (getDefaultMiddleware) =>
// //     getDefaultMiddleware({
// //       serializableCheck: {
// //         ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
// //       },
// //     }),
// // })

// export const persistor = persistStore(store)

// // const storeToExport = {
// //     store, persistor
// // }

// // export default storeToExport


// // export default {store, persistor}

