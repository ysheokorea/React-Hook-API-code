import './App.css';
import React from 'react';
import Bank from './pages/Bank'
import School from './pages/School'
import Home from './pages/Home'
import { Router, Route, Routes, BrowserRouter } from 'react-router-dom'
import ButtonAppBar from './components/Navbar';
import Page from './pages/Page';

function App() {
  

  // reducer : state를 업데이트 하는 역할
  // dispatch : -state를 업데이트 하기 위한 요구
  // action : 요구하는 내용


  return (
    <div className='App'>
      <BrowserRouter>
        <ButtonAppBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/bank" element={<Bank />} />
          <Route path="/school" element={<School />} />
          <Route path="/page" element={<Page />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
