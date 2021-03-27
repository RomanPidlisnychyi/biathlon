import { createRaceResult } from '../actions/raceActions';
import { getRace } from '../../utils/apiUtils';

export const onRace = () => dispatch => {
  const race = getRace();
  dispatch(createRaceResult(race));
};
