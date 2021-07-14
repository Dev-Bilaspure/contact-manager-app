import React from "react";
import ContactCard from "./ContactCard";
import { Link } from "react-router-dom";

const ContactList = (props) => {
    
    return(
        <div>
            
            {props.contacts.length === 0 && <h2>
                No Contacts 
                <Link to="/add">
                    <button className="ui button blue" style={{float: "right"}}>Add Contact</button>
                </Link>
                
            </h2>}
            {props.contacts.length >0 && <h2>
                Contact List:
                <Link to="/add">
                    <button className="ui button blue" style={{float: "right"}}>Add Contact</button>
                </Link>
            </h2>}

            <div className="ui celled list">
                {
                    props.contacts.map((contact) => (
                    <ContactCard
                        contact={contact}
                        key={contact.id}
                        handleDeleteContact={props.handleDeleteContact}
                    />
                    ))
                }
            </div>
            <div className="ui middle aligned divided list">
                <div className="item">
                    <div className="content">
                        <Link to="/delete_all_contacts">
                            <button 
                                className="ui red button" 
                                style={{float: "right"}}
                                disabled={props.contacts.length===0}
                            >
                                Remove All
                            </button>
                        </Link>
                        
                    </div>
                </div>
            </div>
        </div>
            
        
    );
}

export default ContactList;