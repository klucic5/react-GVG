import React from 'react';
import ReactDOM from 'react-dom';
import { NavBar } from './NavBar.js';

export default class ProfilePage extends React.Component {
  render() {
    return (
      <div>
<NavBar />
        <h1>Moja prva React stranica</h1>
        <p>Zovem se XY i idem u GVG!</p>
        <img src="https://content.codecademy.com/courses/React/react_photo-monkeyselfie.jpg" />
      </div>
    );
  }
}