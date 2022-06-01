import './style.scss';
import PropTypes from 'prop-types';

function Form({ task, setTask }) {
  return (
    <form className="form">
      <input type="text" className="form-item" placeholder="Ajouter une tâche" value={task} onChange={(e) => setTask(e.target.value)} />
    </form>
  );
}

Form.propTypes = {
  task: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    label: PropTypes.string.isRequired,
    done: PropTypes.bool.isRequired,
  })).isRequired,
  setTask: PropTypes.func.isRequired,
};

export default Form;
