import React from 'react';
import './History.css';

const History = ({ history }) => (
  <ul>
    {history.map((item, index) => (
      <li key={index}>{item}</li>
    ))}
  </ul>
);


export default History;
