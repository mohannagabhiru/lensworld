import { useState } from 'react';
import { list } from './constants';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './containers/Home';
import Header from './common/header';
import Grid from './containers/Grid';
import Poll from './containers/Poll';
import Countdown from './containers/Countdown';
function App() {

  return (
    <div className='mainCon'>
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/grid" element={<Grid />}/>
        <Route path="/pollWidget" element={<Poll />}/>
        <Route path="/countDown" element={<Countdown />}/>
      </Routes>
    </BrowserRouter>
    </div>
  )
}

export default App
