//css
import './App.css'

//components
import * as React from 'react';
import { Routes, Route } from "react-router-dom";
// import { MyContext } from "./MyContext";

import AppNav from './components/AppNav/AppNav';

//views
import Home from './views/Home/Home';
import NotFound from './views/NotFound/NotFound';
import AppFooter from './components/AppFooter/AppFooter';

function App() {

  return (
    <>
      <div className="app">
        {/* <MyContext> */}
        <AppNav />
        <main>

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path='*' element={<NotFound />} />
          </Routes>

        </main>
        <AppFooter />
        {/* </MyContext> */}
      </div>
    </>
  )
}

export default App
