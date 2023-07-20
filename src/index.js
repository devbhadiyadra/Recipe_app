import React from 'react';
import ReactDOM from 'react-dom/client';
import Main from './components/Main_components/Main'
import Adddata from './components/Main_components/Add_data';
import { BrowserRouter,Routes,Route } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main/>}/>
        <Route path ="/Adddata" element={<Adddata/>} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
