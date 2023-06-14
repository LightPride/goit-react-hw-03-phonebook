import React from 'react';
import PropTypes from 'prop-types';
import {
  ContactsList,
  ContactsItem,
  ContactsName,
  ContactsPhone,
  ContactsButton,
} from './ContactList.styled';

const ContactList = ({ contacts, onDeteleContact }) => {
  return (
    <ContactsList>
      {contacts.map(contact => {
        return (
          <ContactsItem key={contact.id}>
            <ContactsName>
              {contact.name}: <ContactsPhone>{contact.number}</ContactsPhone>
            </ContactsName>
            <ContactsButton
              type="button"
              onClick={() => onDeteleContact(contact.id)}
            >
              <span>Delete</span>
            </ContactsButton>
          </ContactsItem>
        );
      })}
    </ContactsList>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.array,
  onDeteleContact: PropTypes.func,
};

export default ContactList;
