import { useState } from 'react';
import { list } from './constants';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './containers/Home';
import Header from './common/header';
import Grid from './containers/Grid';
import Poll from './containers/Poll';

function App() {

  return (
    <div className='mainCon'>
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/grid" element={<Grid />}/>
        <Route path="/pollWidget" element={<Poll />}/>
      </Routes>
    </BrowserRouter>
    </div>
  )
}

export default App
