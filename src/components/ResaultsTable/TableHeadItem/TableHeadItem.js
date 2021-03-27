import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from '../../../store/actions/filterActions';
import { getFilter } from '../../../store/selectors/filterSelectors';
// import {} from 'module';

export default function TableHeadItem({ title }) {
  const dispatch = useDispatch();
  const filter = useSelector(getFilter);

  const handleBtn = () => {
    if (filter === title) {
      return;
    }
    dispatch(setFilter(title));
  };

  return (
    <th>
      <button type="button" onClick={handleBtn}>
        {title}
      </button>
    </th>
  );
}
