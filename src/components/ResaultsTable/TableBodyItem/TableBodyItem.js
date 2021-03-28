import styles from './TableBodyItem.module.css';

export default function TableBodyItem({ race, index }) {
  const { country, name, lie, stand, general, speed } = race;
  return (
    <tr>
      <td>{index + 1}</td>
      <td className={styles[country]} />
      <td>{name}</td>
      <td>{lie}</td>
      <td>{stand}</td>
      <td>{general}</td>
      <td>{speed}</td>
    </tr>
  );
}
