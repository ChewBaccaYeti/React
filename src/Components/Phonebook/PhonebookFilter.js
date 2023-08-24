import React from 'react';

const PhonebookFilter = ({ filterName, handleFilterChange, contacts }) => {
  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filterName.toLowerCase())
  );

  return (
    <div>
      <input
        type="text"
        name="filterName"
        value={filterName}
        onChange={handleFilterChange}
        placeholder="Filter by Name"
      />
      <ul>
        {filteredContacts.map((contact, index) => (
          <li key={index}>
            {contact.name} - {contact.phoneNumber}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PhonebookFilter;
