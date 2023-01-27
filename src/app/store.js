import { configureStore } from '@reduxjs/toolkit';
import { camsitesReducer } from '../features/campsites/campsitesSlice';

export const store = configureStore({
  reducer: {
    campsites: camsitesReducer,
  },
});
