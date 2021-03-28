import { createSelector } from '@reduxjs/toolkit';
import { getFilter } from './filterSelectors';

export const getRaces = state => state.races;

export const getFilteredRaces = createSelector(
  getRaces,
  getFilter,
  (races, filter) => {
    const filteredRaces = [...races];
    if (filter === 'name' || filter === 'country') {
      return filteredRaces.sort(function (a, b) {
        const nameA = a[filter].toUpperCase();
        const nameB = b[filter].toUpperCase();
        if (nameA < nameB) {
          return -1;
        }
        if (nameA > nameB) {
          return 1;
        }

        return 0;
      });
    }
    if (filter === 'speed') {
      return filteredRaces.sort((a, b) => a[filter] - b[filter]);
    }
    return filteredRaces.sort((a, b) => b[filter] - a[filter]);
  }
);
