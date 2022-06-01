import PropTypes from 'prop-types';
import './style.scss';

function Counter({ nbTasks }) {
  const tache = { nbTasks } > 1 ? 'tâches' : 'tâche';
  return (
    <p className="counter">{nbTasks} {tache} en cours</p>
  );
}

Counter.propTypes = {
  nbTasks: PropTypes.number.isRequired,
};

export default Counter;
