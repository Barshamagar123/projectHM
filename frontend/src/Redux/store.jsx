import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { combineReducers } from 'redux';
import AuthSlice from "./AuthSlice.jsx"

const rootReducer = combineReducers({
  auth: AuthSlice,
});

const persistConfig = {
  key: 'root',
  storage,
  // Add any reducers you want to persist (or blacklist ones you don't)
  whitelist: ['auth'], // example: only persist auth reducer
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        // Ignore these action types
        ignoredActions: ['persist/PERSIST', 'persist/REHYDRATE'],
        // Or ignore these paths in the state
        ignoredPaths: ['register', 'rehydrate'],
      },
    }),
});

export const persistor = persistStore(store);