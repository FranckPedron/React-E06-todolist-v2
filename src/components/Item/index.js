import PropTypes from 'prop-types';
import './style.scss';

function Item({ label }) {
  return (
    <label className="list-item">
      <input type="checkbox" />
      {label}
    </label>
  );
}

Item.propTypes = {
  label: PropTypes.string.isRequired,

};

export default Item;
