import React from 'react';
import { Link } from 'react-router-dom';

const DeleteSingleModal = (props) => {
  // console.log(props);
  return(
    <div style={{marginTop: "6em"}}>
      <div className="ui raised very padded text container segment">

        <div style={{marginBottom: "3em"}}>
          <h2 className="ui header">{`Deleting ${props.location.state.contact.name} from Contacts!!`}</h2>
          <p>{`Do you really want to delete ${props.location.state.contact.name} from contacts?`}</p>
        </div>

        <div className="ui column centered grid">
          <Link to="/contact-manager-app">
            <button className="ui button red">No, Cancel</button>
          </Link>
          <Link to="/contact-manager-app">
            <button 
              className="ui button green" 
              style={{float: "right"}}
              onClick={props.location.functions.handleDeleteContact}
            >
              Yes, Delete
            </button>
          </Link>
          
        </div>
      
      </div>
    </div>
  );
}
// props.location.functions.handleDeleteContact
export default DeleteSingleModal;