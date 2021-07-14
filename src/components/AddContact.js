import React from "react";
import { Link } from "react-router-dom";

const AddContact = (props) => {

    const handleAddContact = (e) => {
        e.preventDefault();
        const name = e.target.elements.name.value.trim();
        const email =e.target.elements.email.value.trim();
        if(name==='' && email==='')
            alert("No data entered");
        else if(name==='') 
            alert("Name is missing")
        else if(email==='')
            alert("Email is missing");
        else {
            //to check if the name already exist.
            for(let i=0;i<props.contacts.length;i++) {
                if(name===props.contacts[i].name) {
                    alert("This contact name already exist");
                    e.target.elements.name.value='';
                    return;
                }
                if(email===props.contacts[i].email) {
                    alert("This contact email already exist");
                    e.target.elements.email.value='';
                    return;
                }
            }

            props.handleAddContact(name,email);
            e.target.elements.name.value='';
            e.target.elements.email.value='';

            props.history.push("/contact-manager-app");
        }
    };

    return(
        <div className="ui main" style={{marginBottom: "5em"}}>

            <h2>
                Add Contact
                <Link to="/contact-manager-app">
                    <button className="ui button blue" style={{float: "right"}}>Contact List</button>
                </Link>
            </h2>

            <form className="ui form" onSubmit={handleAddContact}>

                <div className="field">
                    <label>Name</label>
                    <input type="text" name="name" placeholder="Full Name"/>
                </div>

                <div className="field">
                    <label>E-mail Address</label>
                    <input type="email" name="email" placeholder="example@gmail.com"/>
                </div>

                <button className="ui primary button" type="submit">Add</button>
            
            </form>

        </div>
    );
}
export default AddContact;