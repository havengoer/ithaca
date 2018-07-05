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
  const googleAddress = 'https://www.google.com/maps/place/' + props.address;
  return (
    
  <div className='box'> 

      <address>
      <p className='company_name'><img src={img} className='contact_icon' />
      &#160;&#160;{props.company_name}</p> 
  <p>Address: {props.address}<br />
  Contact Number: <a href="tel:{props.contact_number}">{props.contact_number}</a> 
    </p>
    <form action={googleAddress}>
      <input type="submit" value="Get Directions" />
    </form>
    </address>
   
    

  </div>
  )}
;

export default Contacts;

