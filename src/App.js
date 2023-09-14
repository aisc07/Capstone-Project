import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import MainPage from './components/Pages/Main-Page';
import SearchBar from './components/Nav-Bar/Search-Bar';


export default function App() {

  return (
    <div>
         <SearchBar/>
         <MainPage/>
    </div>
  );
};
