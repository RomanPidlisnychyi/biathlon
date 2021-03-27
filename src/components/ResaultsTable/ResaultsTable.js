import { useSelector } from 'react-redux';
import TableHeadItem from './TableHeadItem/TableHeadItem';
import TableBodyItem from './TableBodyItem/TableBodyItem';
import { getFilteredRaces } from '../../store/selectors/raceSelectors';
import { prepearHeadTable } from '../../utils/prepearHeadTable';
import styles from './ResaultsTable.module.css';

export default function ResaultsTable() {
  const races = useSelector(getFilteredRaces);
  const titles = prepearHeadTable(races);
  return (
    races &&
    races.length && (
      <table className={styles.table}>
        <thead>
          <tr>
            <th>#</th>
            {titles.map(title => (
              <TableHeadItem key={title} title={title} />
            ))}
          </tr>
        </thead>
        <tbody>
          {races.map((race, index) => (
            <TableBodyItem key={race.name} race={race} index={index} />
          ))}
        </tbody>
      </table>
    )
  );
}
