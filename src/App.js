import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Navbar from './Components/navbar';
import ContactList from './Components/contactList';
import ContactForm from './Components/contactForm';
import About from './Components/about';

class App extends Component {
  state = {
    contacts: []
  };

  componentDidMount = () => {
    const contacts = JSON.parse(localStorage.getItem('Contacts'));
    this.setState({ contacts });
  };

  handleShow = contact => {
    const contacts = [...this.state.contacts];
    const index = contacts.indexOf(contacts);
    contact.showForm = !contact.showForm;
    contacts[index] = { ...contact };
    this.setState({ contacts });
  };

  handleDelete = contact => {
    let contacts = [...this.state.contacts];
    contacts = contacts.filter(el => el !== contact);
    localStorage.setItem('Contacts', JSON.stringify(contacts));
    this.setState({ contacts });
  };

  handleAdd = contact => {
    let contacts = [...this.state.contacts];
    contacts.push(contact);
    localStorage.setItem('Contacts', JSON.stringify(contacts));
    this.setState({ contacts });
  };

  handleUpdate = contact => {
    let contacts = [...this.state.contacts];
    contacts.forEach((o, i) => {
      if (o.name === contact.name) {
        contacts[i] = contact;
      }
    });
    localStorage.setItem('Contacts', JSON.stringify(contacts));
    this.setState({ contacts });
  };

  render() {
    return (
      <div className="App">
        <Navbar />
        <div className="container">
          <Switch>
            <Route
              path="/add"
              component={props => (
                <ContactForm onAdd={this.handleAdd} {...props} />
              )}
            />
            <Route
              path="/update"
              component={props => (
                <ContactForm onUpdate={this.handleUpdate} {...props} />
              )}
            />
            <Route path="/about" component={About}></Route>
            <Route
              path="/"
              component={() => (
                <ContactList
                  onShow={this.handleShow}
                  onDelete={this.handleDelete}
                  contacts={this.state.contacts}
                />
              )}
            />
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
