import React from 'react';
import ContactCard from './contactCard';

const ContactList = ({ onShow, onDelete, contacts }) => {
  return (
    <React.Fragment>
      <h4
        style={{
          textTransform: 'uppercase',
          letterSpacing: 2,
          marginBottom: 40
        }}
      >
        Contact List
      </h4>
      {contacts.map((contact, i) => (
        <ContactCard
          key={i}
          contact={contact}
          onShow={onShow}
          onDelete={onDelete}
        />
      ))}
    </React.Fragment>
  );
};

export default ContactList;
