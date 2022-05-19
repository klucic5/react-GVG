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
        <img src="https://i1.wp.com/www.srednja.hr/app/uploads/2013/05/Gimnazija-Velika-Gorica.jpg?w=1024&ssl=1" width="200px"/>
<AiDef />
<NavBar />
      </div>
      
    );
  }
}