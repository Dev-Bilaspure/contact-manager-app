import React from "react";
import { Link } from "react-router-dom";
import user from '../images/daniel.jpg';

const trashButtonStyle = {
    float: "right",
    marginTop: "0.35em", 
    width: "1em", 
    marginRight: "0px", 
    paddingRight: "1.7em", 
    paddingLeft: "1em"
}
const ContactCard = (props) => {

    let resizeEmail = (email) => {
        let resizedEmail="";
        if(email.length<=18)
            resizedEmail=email;
        else {
            let flag=0;
            for(let i=0;i<email.length-1;i++) {
                if(i<8 || flag===1)
                    resizedEmail+=email[i];
                if(i===8)
                    resizedEmail+="...";
                if(email[i+1]==='@')
                    flag=1;
            }
        }
        resizedEmail+=email[email.length-1];
        return(resizedEmail);
    }
    console.log("Hellojcj", props);
    return(
        <div className="item">
            <img className="ui avatar image" src={user} alt="user" style={{marginTop: "0.35em", float: "left", height: "2.55rem", width: "2.5rem"}}/>
            <div className="content" style={{float: "left", marginTop: "0.3em", marginBottom: "0.3em"}}>
                <Link to={{pathname: `/contact/${props.contact.id}`, state: {contact: props.contact}}}>
                    <div className="header"><h3>{props.contact.name}</h3></div>
                    <div>
                        {resizeEmail(props.contact.email)}
                    </div>
                </Link>
            </div>
            <Link to={{pathname: `/delete_contact/${props.contact.id}`, state: {contact: props.contact}, functions: {handleDeleteContact: props.handleDeleteContact}}}>
                <button 
                    className="ui red basic button"
                    style={trashButtonStyle}
                    
                >
                    <i 
                        className="trash alternate outline icon" 
                    ></i>
                </button>
            </Link>
            
        </div>
    );

}

// functions: {handleDeleteContact: props.handleDeleteContact}
export default ContactCard;