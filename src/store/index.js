import { configureStore } from '@reduxjs/toolkit';
import { races } from './reducers/raceReducer';
import { filter } from './reducers/filterReducer';

const store = configureStore({
  reducer: { races, filter },
});

export default store;
