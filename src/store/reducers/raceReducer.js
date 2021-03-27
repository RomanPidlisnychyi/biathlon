import { createReducer } from '@reduxjs/toolkit';
import { createRaceResult } from '../actions/raceActions';

export const races = createReducer([], {
  [createRaceResult]: (_, { payload }) => payload,
});
