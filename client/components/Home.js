import React, { Component } from 'react';
import Contacts from './Contacts';
import Header from './Header';

let resourcesStore = [];
let resourcesArrayComponent = [];

class Home extends Component {
  constructor(props, context) {
    super(props, context);
    this.handleClick = this.handleClick.bind(this);
    this.state = {
      resourcesList: [],
      filtered: [],
      selectedFilter: 'all', 
      buttons: [{id:'all', name: 'All', activeState: 'active', order: 0},
                {id:'shelter', name: 'Shelter', activeState: 'nope', order: 1},
                {id:'jobs', name: 'Jobs', activeState: 'nope', order: 2},
                {id:'food', name: 'Food',  activeState: 'nope', order: 3},
              ]// values will be 'all', 'shelter', 'food', 'jobs'
    };
  }
 
  handleClick(id, order) {
    // console.log('handleclick from HOOOME, HOMIE', id, order, this.state)
    let newButtonState = JSON.parse(JSON.stringify(this.state.buttons))
    console.log(newButtonState, "BUTTON STATE")
    console.log(newButtonState[order], "BEFORE")  
    newButtonState.forEach((e, i) => {
      if (i === order){
        newButtonState[i].activeState = 'active';
      } else {
        newButtonState[i].activeState = 'nope';
      }
    });
    console.log(newButtonState[order], "AFTER")  
    let newObj = {buttons: newButtonState}
    let newSelectedFilter = {selectedFilter: id}
    this.setState(Object.assign(
      this.state,
      newObj,
      newSelectedFilter,
    ))

    console.log('official state now', this.state.buttons[order])
    console.log(this.state)
  }
  componentDidMount() {
    fetch('http://localhost:8080/resources')
    .then(response => response.json())
    .then(resourcesList => {
        resourcesArrayComponent = resourcesList.map((e) => (
        <Contacts type={e.type} company_name={e.company_name} address={e.address} contact_number={e.contact_number} key={e._id}/>));
        resourcesStore = resourcesList;
        this.setState(Object.assign(
          this.state,
          { resourcesList: resourcesStore },
          { filtered: resourcesStore } 
        ));
      })
   .catch(err => console.error(err));
  }

  render() {


    if (resourcesArrayComponent[0] === undefined) {
      return (

        <div><Header buttons={this.state.buttons} handleClick={this.handleClick}/>
        <main className='slate_container'>
          <h2>Loading...</h2>
        </main></div>
      );    } else {
      return (
        <div><Header buttons={this.state.buttons}  handleClick={this.handleClick}/>
        <main className='slate_container'>
        {resourcesArrayComponent}
        </main></div>



      );    }
    // put render logic here
    
  }
}



module.exports = Home;
