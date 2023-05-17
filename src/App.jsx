//css
import './App.css'

//components
import * as React from 'react';
import { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import { MyContext } from "./MyContext";

import Button from '@mui/material/Button';
import AppNav from './components/AppNav/AppNav';

//views
import Home from './views/Home/Home';

function App() {
  const pollo = "( °)> "
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        {/* <MyContext> */}
          <BrowserRouter>
            <AppNav />
            <div>
                <h1>{pollo} {count}</h1>
                <Button variant="contained" onClick={() => setCount((count) => count - 1)}>
                  Count -
                </Button>
                {" "}
                <Button variant="contained" onClick={() => setCount((count) => count + 1)}>
                  Counter +
                </Button>
              </div>
            <Routes>
              <Route path="/" element={<Home />} />
            </Routes>
          </BrowserRouter>
        {/* </MyContext> */}
      </div>
    </>
  )
}

export default App
