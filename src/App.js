import './App.css';
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import RandomBeer from './pages/RandomBeer';
import AllBeers from './pages/AllBeers';
import NewBeer from './pages/NewBeer';
import SingleBeer from './pages/SingleBeer';


function App() {
  return (
    <div className="App">
    
    <Routes>
      <Route path="/" element={<HomePage/>}/>
      <Route path="/randomBeer" element={<RandomBeer/>}/>
      <Route path="/beers" element={<AllBeers/>}/>
      <Route path="/single-beer" element={<SingleBeer/>}/>
      <Route path="/new-beer" element={<NewBeer/>}/>
    </Routes>
    </div>
  );
}

export default App;
