import React from 'react';
import ReactDOM from 'react-dom';
import { NavBar } from './NavBar.js';
import { AiDef } from './AiDef.js';

export default class ProfilePage extends React.Component {
  render() {
    return (
      <div class="parent">
      <NavBar />
        <h1><a name="home">Umjetna inteligencija</a></h1>
        <img src="https://cdn.pixabay.com/photo/2016/10/18/19/40/anatomy-1751201_960_720.png" width="200px"/>
      <div class="child">
        <AiDef />
      </div>
      <div class="child">
        <AiDef />
      </div>
      <NavBar />
      </div>
      
    );
  }
}