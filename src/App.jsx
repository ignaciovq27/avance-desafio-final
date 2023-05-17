import * as React from 'react';
import { useState } from 'react'

//components
import Button from '@mui/material/Button';
import AppNav from './components/AppNav/AppNav';

//css
import './App.css'

function App() {
  const pollo = "( °)> "
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
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
      </div>
    </>
  )
}

export default App
