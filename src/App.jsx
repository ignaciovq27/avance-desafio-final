//css
import './App.css'

//components
import * as React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import { MyContext } from "./MyContext";

import AppNav from './components/AppNav/AppNav';

//views
import Home from './views/Home/Home';
import NotFound from './views/NotFound/NotFound';

function App() {


  return (
    <>
      <div>
        {/* <MyContext> */}
        <BrowserRouter>
          <AppNav />

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path='*' element={<NotFound />} />
          </Routes>
        </BrowserRouter>
        {/* </MyContext> */}
      </div>
    </>
  )
}

export default App
