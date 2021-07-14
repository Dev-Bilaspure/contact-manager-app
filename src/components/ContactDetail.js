import React from 'react';
import user from '../images/daniel.jpg';
import { Link } from 'react-router-dom';

const ContactDetail = (props) => {
  console.log(props);
  const { name, email } = props.location.state.contact;
  return(
    <div className="main">
      <div className="ui card centered" style={{marginBottom: '3em'}}>
        <div className="image">
          <img src={user} alt="user" />
        </div>
        <div className="content">
          <div className="header">{name}</div>
          <div className="discription">{email}</div>
        </div>
      </div>
      
      <div class="ui column centered grid">
        <Link to="/contact-manager-app">
          <button className="ui button blue">Back to Contact List</button>
        </Link>
      </div>
      
    </div>
  );
}


export default ContactDetail;