import css from './ContactList.module.css';
import PropTypes from 'prop-types';

const ConatctList = ({ contactsArray, handleDelete }) => {
  return (
    <ul>
      {contactsArray.map(contact => (
        <li key={contact.id}>
          {contact.name}: {contact.number}
          <button
            type="button"
            className={css.button__remove}
            onClick={() => {
              handleDelete(contact.id);
            }}
          >
            remove
          </button>
        </li>
      ))}
    </ul>
  );
};

export default ConatctList;

ConatctList.propTypes = {
  contactsArray: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.number.isRequired,
    })
  ).isRequired,
  handleDelete: PropTypes.func.isRequired,
};
