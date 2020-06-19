import React, { Component } from 'react';

class ContactForm extends Component {
  state = {
    name: '',
    phone: '',
    email: '',
    showForm: true
  };

  componentDidMount = () => {
    let data = this.props.location.state;
    if (data) {
      this.setState({ ...data.contact });
    }
  };

  handleOnChange = (e, property) => {
    let contact = { ...this.state };
    contact[property] = e.target.value;
    this.setState({ ...contact });
  };

  render() {
    const { pathname } = this.props.location;
    const activeClass = pathname === '/add' ? '' : 'active';
    return (
      <React.Fragment>
        <h4 style={{ textTransform: 'uppercase', marginTop: 40 }}>
          Add a new contact
        </h4>
        <div className="row">
          <form className="col s12">
            <div className="row">
              <div className="input-field col s6">
                <i className="material-icons prefix">account_circle</i>
                <input
                  id="name"
                  type="text"
                  value={this.state.name}
                  onChange={e => {
                    this.handleOnChange(e, 'name');
                  }}
                  disabled={pathname === '/add' ? false : true}
                />
                <label htmlFor="name" className={activeClass}>
                  First Name
                </label>
              </div>
            </div>
            <div className="row">
              <div className="input-field col s6 ">
                <i className="material-icons prefix">email</i>
                <input
                  id="email"
                  type="email"
                  value={this.state.email}
                  onChange={e => {
                    this.handleOnChange(e, 'email');
                  }}
                />
                <label htmlFor="email" className={activeClass}>
                  Email
                </label>
              </div>
            </div>
            <div className="row">
              <div className="input-field col s6">
                <i className="material-icons prefix">phone_iphone</i>
                <input
                  id="phone"
                  type="tel"
                  value={this.state.phone}
                  onChange={e => {
                    this.handleOnChange(e, 'phone');
                  }}
                />
                <label htmlFor="phone" className={activeClass}>
                  Telephone
                </label>
              </div>
            </div>
            <div className="row">
              <div className="input-field col s6">
                <button
                  className="waves-effect waves-light btn"
                  style={{ marginLeft: 40, backgroundColor: '#ee6e73' }}
                  onClick={e => {
                    e.preventDefault();
                    if (pathname === '/add') {
                      this.props.onAdd(this.state);
                    } else {
                      this.props.onUpdate(this.state);
                    }
                    this.props.history.push('/');
                  }}
                >
                  {pathname === '/add' ? 'ADD' : 'UPDATE'}
                </button>
              </div>
            </div>
          </form>
        </div>
      </React.Fragment>
    );
  }
}

export default ContactForm;
