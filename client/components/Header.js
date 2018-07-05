import React, {Component} from 'react';

class Header extends Component {
  render() {
    return (
        <header>
          <img src="./images/ithaca_logo.jpg" />
          <nav>
            <div >All</div>
            <div>Shelter</div>
            <div>Food Banks</div>
            <div>Jobs</div>
          </nav>
        </header>
    )
  }
}

export default Header;