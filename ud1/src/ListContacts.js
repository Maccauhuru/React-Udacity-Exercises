import React , { Component } from 'react';
import PropTypes from 'prop-types';
import EscapeRegEx from 'escape-string-regexp';
import SortBy from 'sort-by';

class ListContacts extends Component{
  static propTypes = {
    contacts: PropTypes.array.isRequired,
    onDeleteContact: PropTypes.func.isRequired
  }
state = {
  query : '',
}

updateQuery=(query)=>{
this.setState({
  query : query.trim()
});
};

render(){
  const { contacts , onDeleteContact } = this.props;
  let showingContacts;
  if(this.state.query){
  const match = new RegExp(EscapeRegEx(this.state.query),'i');
  showingContacts = contacts.filter((contact)=>match.test(contact.name));
  }else {
    showingContacts = contacts;
  }
showingContacts.sort(SortBy('name'));
return ( < div className = "list-contacts"> 
        <ol className='contact-list'>
          {showingContacts.map((contact) => (
            <li key={contact.id} className='contact-list-item'>
              <div className='contact-avatar' style={{
                backgroundImage: `url(${contact.avatarURL})`
              }}/>
              <div className='contact-details'>
              <div className='list-contacts-top'>
              <input
              className="search-contacts"
              type="text"
              placeholder="search contacts"
              value={this.state.query}
              onChange={(e)=>this.updateQuery(e.target.value)}
              />
              </div>
                <p>{contact.name}</p>
                <p>{contact.email}</p>
              </div>
              <button className='contact-remove' onClick={()=>onDeleteContact(contact)}>
                Remove
              </button>
            </li>
          ))}
        </ol>
    </div>)
  }
}



    



export default ListContacts;