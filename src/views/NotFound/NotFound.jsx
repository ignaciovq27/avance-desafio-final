// css
import "../NotFound/NotFound.css"

//components
import { Link } from "react-router-dom";

import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';


export default function NotFound() {

    return (
        <div className="notFound-container" id="notFound">
            <h1>POLLO</h1>
            <h2>✧ ERROR 404 ✧</h2>
            <h4>La ruta que intentas consultar no existe.</h4>
            <Typography
                // noWrap
                component={Link}
                to="/"
                sx={{
                    m: 0,
                    py: 0,
                    textDecoration: "none",
                }}
            >
                <Button variant="contained">
                    IR A INICIO
                </Button>
            </Typography>
        </div>
    )
}