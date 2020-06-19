import React from 'react';
import { Link } from 'react-router-dom';

const ContactCard = ({ contact, onShow, onDelete }) => {
  return (
    <div className="col s12 m7" style={{ marginBottom: 40 }}>
      <div className="card horizontal">
        <div className="card-stacked">
          <div className="card-content row" style={{ marginBottom: -10 }}>
            <h6 className="col s10">
              {contact.name}
              <i
                className="material-icons prefix"
                style={{ marginLeft: 10, cursor: 'pointer' }}
                onClick={() => {
                  onShow(contact);
                }}
              >
                arrow_drop_down
              </i>
            </h6>
            <span className="col s2">
              <Link
                to={{
                  pathname: '/update',
                  state: { contact }
                }}
              >
                <i
                  className="material-icons prefix"
                  style={{
                    marginRight: 20,
                    fontSize: 20,
                    color: '#ee6e73',
                    cursor: 'pointer',
                    marginTop: 10
                  }}
                >
                  edit
                </i>
              </Link>
              <i
                className="material-icons prefix"
                style={{
                  marginRight: 20,
                  fontSize: 20,
                  color: '#ee6e73',
                  cursor: 'pointer',
                  marginTop: 10
                }}
                onClick={() => {
                  onDelete(contact);
                }}
              >
                delete
              </i>
            </span>
          </div>
          <div className="card-action" style={{ borderTop: 0 }}>
            {contact.showForm ? (
              <ul className="collection">
                <li className="collection-item">{contact.email}</li>
                <li className="collection-item">{contact.phone}</li>
              </ul>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactCard;
