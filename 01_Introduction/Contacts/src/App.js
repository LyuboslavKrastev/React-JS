import React from 'react';
import './Resources/style/app.css';
import './Resources/style/index.css';
import ContactList from './Resources/contacts.json';
import rerender from './index';

const createContactDetailsDiv = (contact) => (
    <div className="content">
                <div className="info">
                    <div className="col">
                        <span className="avatar">&#9787;</span>
                    </div>
                    <div className="col">
                        <span className="name">{contact.firstName}</span>
                        <span className="name">{contact.lastName}</span>
                    </div>
                </div>
                <div className="info">
                    <span className="info-line">&phone; {contact.phone}</span>
                    <span className="info-line">&#9993; {contact.email}}</span>
                </div>
            </div>
);

let contactIndex = 0;

const getContactDetails= (index) => {
    contactIndex = index;
    rerender(App(), document.getElementById('root'));
}

const createContactDiv = (data, currentIndex) => (
  <div className="contact" data-id="id" key={data.email} onClick={e => getContactDetails(currentIndex, e)}>
      <span className="avatar small">&#9787;</span>
      <span className="title">{data.firstName} {data.lastName}</span>
  </div>
);

const renderContacts = () => {
    const result = [];
    let index = 0;
    for (const contact of ContactList) {
      result.push(createContactDiv(contact, index++));
    }
    return result;
}

const App = () => (
      <div className="container">
    <header>&#9993; Contact Book</header>
    <div id="book">
        <div id="list">
            <h1>Contacts</h1>
            <div className="content">
            {/* renders all contacts, contained in the contacts.json*/}
                {renderContacts()}
            </div>
        </div>
        <div id="details">
            <h1>Details</h1>
            {/* on click shows the contact details for the passed contact index */}
            {createContactDetailsDiv(ContactList[contactIndex])};
        </div>
    </div>
    <footer>Contact Book SPA &copy; 2017</footer>
</div>
    );

export default App;
