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
                {id:'work', name: 'Job Resources', activeState: 'nope', order: 2},
                {id:'food', name: 'Food Bank',  activeState: 'nope', order: 3},
              ]// values will be 'all', 'shelter', 'food', 'jobs'
    };
  }
 
  handleClick(id, order) {
    // console.log('handleclick from HOOOME, HOMIE', id, order, this.state)
    let newButtonState = JSON.parse(JSON.stringify(this.state.buttons))
 
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

    console.log( 'rrrrrr state now', this.state.selectedFilter)
    console.log(this.state)
  }
  componentDidMount() {
    fetch('http://localhost:8080/resources')
    .then(response => response.json())
    .then(result => {
       
        this.setState(Object.assign(
          this.state,
          { resourcesList: result },
          { filtered: resourcesStore } 
        ));
      })
   .catch(err => console.error(err));
  }

  render() {
    console.log(this.state.resourcesList, "RENDERED")

    resourcesArrayComponent = this.state.resourcesList.reduce((acc, e) => {
      console.log('hereeeeeeeeeeeeeee');
      console.log(acc);
        if (this.state.selectedFilter === 'all'){
          acc.push (
            <Contacts type={e.type} company_name={e.company_name} address={e.address} contact_number={e.contact_number} key={e._id}/>
          )
         } else {
          console.log(this.state.selectedFilter.toLowerCase(), e.type.toLowerCase(), "~~~~~~~")
          if (this.state.selectedFilter.toLowerCase() === e.type.toLowerCase()) {
            acc.push (
              <Contacts type={e.type} company_name={e.company_name} address={e.address} contact_number={e.contact_number} key={e._id}/>
            )
          }
         }
      return acc;
    }, [])

    console.log("***", resourcesArrayComponent[0])


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
