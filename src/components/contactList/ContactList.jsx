import PropTypes from 'prop-types';
import ContactListItem from '../contactListItem/ContactIListItem';
import { ContactListUi } from './ContactListStyles';

const ContactList = ({ contacts, onDeleteContact }) => {
  return (
    <ContactListUi>
      {contacts.map(contact => {
        return (
          <ContactListItem
            key={contact.id}
            name={contact.name}
            tel={contact.number}
            id={contact.id}
            onDeleteContact={onDeleteContact}
          />
        );
      })}
    </ContactListUi>
  );
};

export default ContactList;

ContactList.propTypes = {
  contacts: PropTypes.array.isRequired,
};
