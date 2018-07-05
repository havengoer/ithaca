import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Slate from './Slate';

console.log("inside home")
class Home extends Component {

  constructor(props, context) {
    super(props, context);
  

    this.state = {
      urls: [],
    };
  }
  
  componentDidMount() {

  }

  render() {
    // put render logic here
    return (

        <div>

        <div>SLATE</div>
        <div>
        <Slate />
        </div>
      </div>


    );
  }
}

const styles = {
  container: {
    border: '1px black solid',
    width: '50%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '10px',
  },
};

module.exports = Home;

