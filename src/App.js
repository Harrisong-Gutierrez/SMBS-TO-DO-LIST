import './App.css';
import Header from './Views/Header';
import Footer from './Views/Footer';
import Form from './Components/Form';
import React from 'react';



function App() {
  return (
    <div className="App">
      <Header/>
      <Form/>
      <Footer/>
    </div>
  );
}

export default App;
