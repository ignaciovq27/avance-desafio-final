// css
import "../Home/Home.css"

//components
import { useState } from 'react'
import Button from '@mui/material/Button';
// import Gallery from "../../components/Gallery/Gallery";
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import AppHeader from "../../components/AppHeader/AppHeader";


export default function Home() {

  const pollo = "( °)> "
  const [count, setCount] = useState(0)

  return (
    <div className="home-container" id="Home">
      <AppHeader />
      <h1> HOME </h1>
      <div>
        <h1>{pollo} {count}</h1>
        <Button variant="contained" onClick={() => setCount((count) => count - 1)}>
          <RemoveIcon />
        </Button>
        {" "}
        <Button variant="contained" onClick={() => setCount((count) => count + 1)}>
          <AddIcon />
        </Button>
      </div>
    </div>
  );
}
