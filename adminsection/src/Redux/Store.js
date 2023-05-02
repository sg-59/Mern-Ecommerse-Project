import { configureStore,combineReducers } from "@reduxjs/toolkit";
import AlluserReducer from './AlluserRedux'
import AllorderReducer from './AllorderRedux'
import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
  } from 'redux-persist'
  import storage from 'redux-persist/lib/storage'

  const persistConfig = {  
    key: 'root',
    version: 1,
    storage,
  }
  const rootreducer=combineReducers({users:AlluserReducer,orders:AllorderReducer})
  const persistedReducer = persistReducer(persistConfig,rootreducer);
export const store = configureStore ({
    reducer:persistedReducer,
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export let persistor = persistStore(store)