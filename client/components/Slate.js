import React, { Component } from 'react';
import Contacts from './Contacts';
// import resources from './db/resources.json';

// Feed contains multiple FeedItems
// Put AJAX in this Component
console.log("inside slate")
let resourcesStore = [];
let resourcesArrayComponent = [];

// function fetchResources() {
//   return fetch('http://localhost:8080/resources')
//     .then(response => response.json())
//     .catch(err => {
//       console.log('error')
//       if(err) console.error(err);
//   })
// }

class Slate extends Component {
  constructor(props, context) {
    super(props, context);
  
    let contacts = [];
    this.state = {
      resourcesList: [],
    };
  }

  componentDidMount() {
    fetch('http://localhost:8080/resources')
    .then(response => response.json())
    .then(resourcesList => {
        console.log("CURRENT STATE", this.state.resourcesList)
        resourcesArrayComponent = resourcesList.map((e) => (
        <Contacts type={e.type} company_name={e.company_name} address={e.address} contact_number={e.contact_number} key={e._id}/>));
        console.log('INSIDE THEN of componentdidmount',resourcesList, resourcesArrayComponent.length, resourcesArrayComponent)
        resourcesStore = resourcesList;
        this.setState(Object.assign(
          this.state,
          { resourcesList: resourcesStore }
        ));
      })
   .catch(err => console.error(err));
  }

  render() {
    console.log("RENDERED", this.state.resourcesList, this.state.resourcesList[0], "STATE", resourcesArrayComponent)
    console.log(resourcesArrayComponent[0])
    if (resourcesArrayComponent[0] === undefined) {
      return (
        <main style={styles.container}>
          <h2>Loading...</h2>
        </main>
      );    } else {
      return (
        <main style={styles.container}>
          {resourcesArrayComponent}
        </main>
      );    }
    // put render logic here
    
  }
}

const styles = {
  container: {
    border: '1px blue solid',
    width: '50%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '10px',
  },
};

module.exports = Slate;
