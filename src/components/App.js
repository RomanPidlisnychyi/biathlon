import { result } from '../utils/result';
import { participants } from '../utils/participants';

export default function App() {
  console.log('with result', result(participants));
  return <div />;
}
