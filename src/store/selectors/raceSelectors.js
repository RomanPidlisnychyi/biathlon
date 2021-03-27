import { createSelector } from '@reduxjs/toolkit';
import { getFilter } from './filterSelectors';

export const getRaces = state =>
  state.races.map(race => ({
    ...race,
    general: +parseFloat((race.lie + race.stand) / 2).toFixed(2),
  }));

export const getFilteredRaces = createSelector(
  getRaces,
  getFilter,
  (races, filter) => {
    const filteredRaces = [...races];
    if (filter === 'name') {
      return filteredRaces.sort(function (a, b) {
        const nameA = a.name.toUpperCase();
        const nameB = b.name.toUpperCase();
        if (nameA < nameB) {
          return -1;
        }
        if (nameA > nameB) {
          return 1;
        }

        return 0;
      });
    }
    if (filter === 'country') {
      return filteredRaces.sort(function (a, b) {
        const countryA = a.country.toUpperCase();
        const countryB = b.country.toUpperCase();
        if (countryA < countryB) {
          return -1;
        }
        if (countryA > countryB) {
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
