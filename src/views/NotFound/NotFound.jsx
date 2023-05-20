// css
import "../NotFound/NotFound.css"

//components
import { Link } from "react-router-dom";

import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';


export default function NotFound() {

    return (
        <div className="notFound-container" id="notFound">
            <h2>NOT FOUND</h2>
            <h3>✧ ERROR 404 ✧</h3>
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
                <Button variant="contained"
                    sx={{
                        m: 0,
                        py: 2,
                    }}
                >
                    IR A INICIO
                </Button>
            </Typography>
        </div>
    )
}