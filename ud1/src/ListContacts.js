import React from 'react';

const ListContacts=(props)=> {
const contacts = props.contacts;
    return (
        <ol className='contact-list'>
          {contacts.map((contact) => (
            <li key={contact.id} className='contact-list-item'>
              <div className='contact-avatar' style={{
                backgroundImage: `url(${contact.avatarURL})`
              }}/>
              <div className='contact-details'>
                <p>{contact.name}</p>
                <p>{contact.email}</p>
              </div>
              <button className='contact-remove' onClick={()=>props.onDeleteContact(contact)}>
                Remove
              </button>
            </li>
          ))}
        </ol>
    )
  }

export default ListContacts;