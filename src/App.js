import './App.css';
import React from 'react';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm'

 
function App() {
  return (
    <div className="App">
      <Navbar title="Text Utilities"/>
      <TextForm heading="Enter your text"/>
    </div>
  );
}

export default App;
 