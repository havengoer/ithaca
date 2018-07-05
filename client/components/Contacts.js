import React from 'react';
import { Link } from 'react-router-dom';

const Contacts = (props) =>{
  console.log(props)
  return (
  <div> 

    <address>
  <h3>{props.company_name}</h3>
  <p>Address: {props.address}<br />
  Contact Number: <a href="tel:{props.contact_number}">{props.contact_number}</a></p>
    {props.type}
      <hr />
         
      
    </address>
  </div>
  )}
;

export default Contacts;

// James Rockford<br/>
//       2354 Pacific Coast Highway<br/>
//       California<br/>
//       USA<br/>
//       +311-555-2368<br/>
//       Email: <a href="mailto:j.rockford@example.com">j.rockford@example.com</a><br/>