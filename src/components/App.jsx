import { Component } from 'react';
import shortid from 'shortid';

import Form from './Form/Form';
import ConatctList from './ContactList/ContactList';
import Filter from './Filter/Filter';

class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };
  // Добавление нового контакта
  addContact = contact => {
    const newContact = {
      id: shortid.generate(),
      name: contact.name,
      number: contact.number,
    };

    this.setState(prevState => ({
      contacts: [newContact, ...prevState.contacts],
    }));
  };
  // Удаление контакта
  handleDelete = e => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== e),
    }));
  };
  // Фильтрация по имени
  changeFilter = evt => {
    this.setState({ filter: evt.currentTarget.value });
  };

  render() {
    const { filter, contacts } = this.state;

    const toLowerCaseContact = this.state.filter.toLowerCase();

    const visibleContact = this.state.contacts.filter(contact =>
      contact.name.toLocaleLowerCase().includes(toLowerCaseContact)
    );
    return (
      <>
        <h1>Phonebook</h1>
        <Form contacts={contacts} onSubmit={this.addContact} />

        <h2>Contacts</h2>
        <Filter
          value={filter}
          onChange={this.changeFilter}
          contacts={this.state.contacts}
        />
        <ConatctList
          contactsArray={visibleContact}
          handleDelete={this.handleDelete}
        />
      </>
    );
  }
}
export default App;
