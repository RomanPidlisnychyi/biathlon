import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from '../../../store/actions/filterActions';
import { getFilter } from '../../../store/selectors/filterSelectors';
import styles from './TableHeadItem.module.css';

export default function TableHeadItem({ title }) {
  const dispatch = useDispatch();
  const filter = useSelector(getFilter);
  let newTitle;

  if (title === 'lie' || title === 'stand' || title === 'general') {
    newTitle = `${title} %`;
  }

  if (title === 'speed') {
    newTitle = `${title} s.`;
  }

  const handleBtn = () => {
    if (filter === title) {
      return;
    }
    dispatch(setFilter(title));
  };

  return (
    <th>
      <button
        className={
          title === filter ? `${styles.button} ${styles.active}` : styles.button
        }
        type="button"
        onClick={handleBtn}
      >
        {newTitle ? newTitle : title}
      </button>
    </th>
  );
}
