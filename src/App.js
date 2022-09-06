import './App.css';
import React from 'react';
import {User} from "./User";

function App() {
  return (
    <div className="App">
      <h1>App Component</h1>
      <h1>ProjectRed</h1>
      <h1>Git Hub practice</h1>
      <User data={{name:"rafan",age:1,address:"Hingoli",mobile:8080549861}} />
    </div>
  );
}

export default App;
