import React from 'react';
import { Link } from 'react-router-dom';

const Contacts = (props) =>{
  console.log(props.type)
  let img;
  if (props.type === 'Shelter'){
    img = "./images/shelter.jpg";
  } else if (props.type === 'Food') {
    img = "./images/food.jpg";
  }else if (props.type === 'Work'){
    img = "./images/jobs.jpg";
  }
  return (
    
  <div> 

      <div className='contact_icon'>
      <img src={img} className='contact_icon' /><br /><br />
      </div>
      <address>
  <h3>{props.company_name}</h3>
  <p>Address: {props.address}<br />
  Contact Number: <a href="tel:{props.contact_number}">{props.contact_number}</a></p>
    </address>
    <hr />

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