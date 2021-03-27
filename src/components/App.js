import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import ResaultsTable from './ResaultsTable/ResaultsTable';
import { onRace } from '../store/operation/raceOperation';
import { setFilter } from '../store/actions/filterActions';

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setFilter('general'));
    dispatch(onRace());
  }, [dispatch]);
  return <ResaultsTable />;
}
