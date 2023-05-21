//css
import './App.css'

//components
import * as React from 'react';
import { Routes, Route } from "react-router-dom";
// import { MyContext } from "./MyContext";

import AppNav from './components/AppNav/AppNav';
import AppFooter from './components/AppFooter/AppFooter';

//views
import Home from './views/Home/Home';
import NotFound from './views/NotFound/NotFound';
import Register from './views/Register/Register';
import LogIn from './views/LogIn/LogIn';
import UserProfile from './views/UserProfile/UserProfile';

function App() {

  return (
    <>
      <div className="app">
        {/* <MyContext> */}
        <AppNav />
        <main>

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<LogIn />} />
            <Route path="/user-profile" element={<UserProfile />} />
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
