import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';
import Contact from './components/Contact';

export const App = (
  <>
    <h1 className="text-center">My contacts list 📱</h1>
    <div>
      <Contact
        name="Guillaume"
        phone="06 00 00 00 00"
        email="email@hotmail.fr"
        isDeletable={true}
      />
      <Contact
        name="Jean"
        phone="06 00 00 00 00"
        email="email@hotmail.fr"
        isDeletable={false}
      />
      <Contact
        name="Annabelle"
        phone="06 00 00 00 00"
        email="email@hotmail.fr"
        isDeletable={true}
      />
      <Contact
        name="Anna"
        phone="06 00 00 00 00"
        email="email@hotmail.fr"
        isDeletable={false}
      />
      <Contact
        name="Thomas"
        phone="06 00 00 00 00"
        email="email@hotmail.fr"
        isDeletable={false}
      />
    </div>
  </>
);

ReactDOM.render(App, document.getElementById('root'));
