import { Component } from "react";
import { nanoid } from 'nanoid';
import { Section } from "../Container/Container";
import  { Form } from "../ContactForm/ContactForm";
import { Filter } from "../Filter/Filter";
import  { ContactList }  from "../ContactList/ContactList";

export class App extends Component  {
  state = {
    contacts: [
      {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
      {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
      {id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter:'',
  }



  componentDidMount() {
    const parsedContacts = JSON.parse(localStorage.getItem('contacts'));
    if (parsedContacts) {
      this.setState({ contacts: parsedContacts });
    } 
  }

  componentDidUpdate(_, prevState) {
    const { contacts } = this.state;
    if (contacts !== prevState.contacts) {
      localStorage.setItem('contacts', JSON.stringify(contacts));
    }
    
  }

  addContact = (values, { resetForm }) => {
    const { contacts } = this.state;

    const newContact = {
      id: nanoid(),
      name: values.name,
      number: values.number,
    };

    
    contacts.find(contact => contact.name.toUpperCase() === newContact.name.toUpperCase())
      ? window.alert(`${newContact.name} is already in contacts`)
      : this.setState(prevState => ({
        contacts: [newContact, ...prevState.contacts],
        }));
    
    resetForm();
  };

  deleteContact = id => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id),
    }));
  };
  
  changeFilter = e => {
    this.setState({ filter: e.currentTarget.value });
  };

  render() {
    const { contacts, filter } = this.state;
    const normalizedFilter = filter.toUpperCase();
    const visibleContacts = contacts.filter(({ name }) =>
      name.toUpperCase().includes(normalizedFilter)
    );
    
    return (
      <>
      <Section title="Phonebook"> 
        <Form onSubmit={this.addContact} /> 
      </Section>
      <Section title="Contacts"> 
        <Filter value={filter} onChange={this.changeFilter} />
        <ContactList
          contacts={visibleContacts}
          onDelete={this.deleteContact}
        />
      </Section>
      </> 
    )
  };
    
    
};
