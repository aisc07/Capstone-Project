import React, { useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import SearchBar from './components/SearchBar';
import MainPage from './components/MainPage';

function App() {


  return (
    <div className="App">

          <SearchBar/>
          <MainPage/>
    </div>
  );
}

export default App;
