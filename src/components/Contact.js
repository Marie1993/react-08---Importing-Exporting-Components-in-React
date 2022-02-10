import React from 'react';
import ReactDOM from 'react-dom';
import 'style.css';

const Contact = (props) => {
  const { name, phone, email, isDeletable } = props;

  return (
    <div>
      <h3>{name}</h3>
      <h4>{phone}</h4>
      <h4>{email}</h4>
      {isDeletable ? <button>Delete</button> : null}
    </div>
  );
};

export default Contact