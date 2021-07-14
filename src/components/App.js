import React, {useState, useEffect} from "react";
import Header from "./Header";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import AddContact from "./AddContact";
import ContactList from "./ContactList";
import { v4 as uuidv4 } from 'uuid';
import ContactDetail from "./ContactDetail";
import DeleteAllModal from "./DeleteAllModal";
import DeleteSingleModal from "./DeleteSingleModal";

const App = (props) => {

  const [contacts, setContacts] = useState([]);

  const LOCAL_STORAGE_KEY = "contacts";

  const handleAddContact = (personName,personEmail) => {
    let contact = {
      id: uuidv4(),
      name: personName,
      email: personEmail
    }
    setContacts(contacts.concat(contact));
  };

  useEffect(() => {
    const retriveContacts = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if(retriveContacts)
      setContacts(retriveContacts);

  },[]);    

  useEffect(() =>{
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
  },[contacts]);



  const handleDeleteAllContacts = () => {
    setContacts([]);
  }

  const handleDeleteContact = (contactID) => {
    console.log("HelloMello");
    setContacts(contacts.filter((contact) => contactID !== contact.id))
  };

    

  return(
    <div className="ui container">
      
      <BrowserRouter>
        <Header />
        <Switch>

          <Route 
            exact 
            path="/add" 
            render={(props) => (<AddContact
              {...props}
              handleAddContact={handleAddContact}
              contacts={contacts}
            />)}
          />
          
          <Route 
            exact path="/contact-manager-app" 
            render={(props) => (<ContactList 
              {...props}
              contacts={contacts}
              handleDeleteContact={handleDeleteContact}
              handleDeleteAllContacts={handleDeleteAllContacts}
            />)}
          />

          <Route path="/contact/:id" component={ContactDetail} />
          
          <Route 
            exact path="/delete_all_contacts" 
            render={(props) => (<DeleteAllModal
              {...props}
              handleDeleteAllContacts={handleDeleteAllContacts}
            />)}
          />

          <Route path="/delete_contact/:id" component={DeleteSingleModal} />

        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;


// component={() => <AddContact 
//   handleAddContact={handleAddContact}
//   contacts={contacts}
// />} 