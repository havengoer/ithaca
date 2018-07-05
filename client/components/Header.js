import React, {Component} from 'react';
import Button from './Button';

function classToggle() {
  this.classList.toggle('class1');
  this.classList.toggle('class2');
}

const Header = (props) =>{
  
  let buttonInstances =  props.buttons.map(e => 
    
    <Button handleClick={props.handleClick} 
            key={e.id} id={e.id} 
            name={e.name} 
            activeState={e.activeState} 
            handleClick={props.handleClick} 
            classNameVar={e.classNameVar}
            order={e.order}/>
  )
  return (
    
    <header>
      <img className='nav_block' src="./images/ithaca_logo.jpg" />
      {buttonInstances}
    </header>
   
  )}
;

export default Header;




// class Header extends Component {
//   render(props) {
//     console.log('at header', props.buttons)
//     return (
//         <header>
//           <img className='nav_block' src="./images/ithaca_logo.jpg" />
//           <hr  />
//           <nav>
//             <div className='nav_button' id='all'>All</div>
//             <div className='nav_button' id='shelter'>Shelter</div>
//             <div className='nav_button' id='food'>Food Banks</div>
//             <div className='nav_button' id='jobs'>Jobs</div>
//             <div className='nav_button' id='favorites'>Favorites</div>
//           </nav>
//         </header>
//     )
//   }
// }

// export default Header;