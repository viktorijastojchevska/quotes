import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom'
import './App.css';
import Quotes from "./components/Quotes"
import RandomQuote from './components/RandomQuote';



function App() {
  return (
    <div className='app'>
      <Main />
  </div>
  );
}

export default App;


const Main = () => (
  <Routes>
    <Route
        path="*"
        element={<Navigate to="/quotes" replace />}
    />
    <Route path='/quotes' element={<Quotes/>}/>
    <Route path='/random-quote' element={<RandomQuote/>}/>
  </Routes>
);


