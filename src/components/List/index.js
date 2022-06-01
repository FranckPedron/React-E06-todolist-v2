import PropTypes from 'prop-types';
import Item from '../Item';
import './style.scss';

function List({ taskList, setNbTask }) {
  setNbTask(taskList.length);
  return (
    <ul className="list">
      {
        taskList.map((task) => (
          <li key={task.id}>
            <Item label={task.label} />
          </li>
        ))
      }
    </ul>
  );
}

List.propTypes = {
  taskList: PropTypes.arrayOf(PropTypes.shape(
    {
      id: PropTypes.number.isRequired,
      label: PropTypes.string.isRequired,
      done: PropTypes.bool.isRequired,
    },
  )).isRequired,
  setNbTask: PropTypes.func.isRequired,
};
export default List;
