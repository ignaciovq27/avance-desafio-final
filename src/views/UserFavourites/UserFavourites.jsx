// css
import "../UserFavourites/UserFavourites.css"

//components
import { Link } from "react-router-dom";
import AppTitle from "../../components/AppTitle/AppTitle";
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';


export default function UserFavourites() {

    return (
        <div className="userFavourites-container" id="userFavourites">
            <AppTitle title="USER FAVOURITES" />

            <h3>✧ MIS FAVORITOS ✧</h3>
            {/* <h4>La ruta que intentas consultar no existe.</h4> */}
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