import React from 'react';
import { Link } from 'react-router-dom';

const Food = () => (
  <div>
    <div>Click <Link to="/food">here</Link> to receive a message from the server</div>
  </div>
);

export default Food;
