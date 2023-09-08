import React, { Component } from 'react';
import PhonebookField from './Phonebook.styled';
import PhonebookFilter from './PhonebookFilter';
import PopUp from './PopUp/PopUp';

export class Phonebook extends Component {
  state = {
    contacts: [],
    name: '',
    phoneNumber: '',
    filterName: '',
    isDuplicateAlertVisible: false,
  };

  handleNameChange = event => {
    this.setState({ name: event.target.value });
  };

  handlePhoneChange = event => {
    this.setState({ phoneNumber: event.target.value });
  };

  handleFilterChange = event => {
    this.setState({ filterName: event.target.value });
  };

  addContact = () => {
    const { name, phoneNumber, contacts } = this.state;
    const contactExists = contacts.some(
      contact =>
        contact.name.toLowerCase() === name.toLowerCase() ||
        contact.phoneNumber === phoneNumber
    );

    // if (!contactExists && name && phoneNumber) {
    //   const newContact = { name, phoneNumber };
    //   this.setState({
    //     contacts: [...contacts, newContact],
    //     name: '',
    //     phoneNumber: '',
    //     isDuplicateAlertVisible: false,
    //   });
    // }
    // Мені подобається цей метод фільтрацій існуючих контактів, тож я не буду видаляти його. Дуже практично якщо не потрібно повідомлення.

    // if (contactExists) {
    //   this.setState({ isDuplicateAlertVisible: true });
    // } else if (name && phoneNumber) {
    //   const newContact = { name, phoneNumber };
    //   this.setState({
    //     contacts: [...contacts, newContact],
    //     name: '',
    //     phoneNumber: '',
    //     isDuplicateAlertVisible: false,
    //   });
    // }
    // А цей метод виводить повідомлення з попередженням що контакт вже існує

    if (contactExists) {
      window.alert('This contact already exists!');
    } else if (name && phoneNumber) {
      const newContact = { name, phoneNumber };
      this.setState({
        contacts: [...contacts, newContact],
        name: '',
        phoneNumber: '',
      });
    }
    // Це виклик стандартного повідомлення браузера. Скучно.

    if (contactExists) {
      this.setState({ isDuplicateAlertVisible: true });
    } else if (name && phoneNumber) {
      const newContact = { name, phoneNumber };
      const updatedContacts = [...contacts, newContact];
      this.setState({
        contacts: updatedContacts,
        name: '',
        phoneNumber: '',
        isDuplicateAlertVisible: false,
      });
      localStorage.setItem('contacts', JSON.stringify(updatedContacts));
    }
    // Це метод, вдосконаленний, для зберігання даних у localStorage
  };

  closeDuplicateAlert = () => {
    this.setState({ isDuplicateAlertVisible: false });
  };

  removeContact = index => {
    const { contacts } = this.state;
    const updatedContacts = contacts.filter((_, i) => i !== index);
    this.setState({ contacts: updatedContacts });
  };

  componentDidMount() {
    const savedData = localStorage.getItem('contacts');
    if (savedData) {
      const parsedData = JSON.parse(savedData);
      this.setState({ contacts: parsedData });
    }
  }

  // componentDidUpdate(prevProps, prevState) {}

  render() {
    const { contacts, name, phoneNumber, filterName, isDuplicateAlertVisible } =
      this.state;

    return (
      <div>
        <PhonebookField>
          <input
            type="text"
            name="name"
            value={name}
            onChange={this.handleNameChange}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            placeholder="Name"
          />
          <input
            type="tel"
            name="phoneNumber"
            value={phoneNumber}
            onChange={this.handlePhoneChange}
            pattern="[0-9]{10}"
            title="Phone number must be 10 digits"
            required
            placeholder="Phone Number"
          />
          <button onClick={this.addContact}>Add Contact</button>
        </PhonebookField>
        <ul>
          {contacts.map((contact, index) => (
            <li key={index}>
              {contact.name} - {contact.phoneNumber}
              <button onClick={() => this.removeContact(index)}>Remove</button>
            </li>
          ))}
        </ul>
        <PhonebookFilter
          filterName={filterName}
          handleFilterChange={this.handleFilterChange}
          contacts={contacts}
        />
        {isDuplicateAlertVisible && (
          <PopUp
            message="This contact is already exist, you just saw standard aler message from browser. Lebovski was here."
            onClose={this.closeDuplicateAlert}
          />
        )}
      </div>
    );
  }
}

export default Phonebook;
