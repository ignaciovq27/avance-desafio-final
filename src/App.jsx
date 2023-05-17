import { useState } from 'react'
import './App.css'

//components
import * as React from 'react';
import Button from '@mui/material/Button';
import AppNav from './assets/components/AppNav/AppNav';

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
