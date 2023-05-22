// css
import "../UserFavourites/UserFavourites.css"

//components
import { Link } from "react-router-dom";
import AppTitle from "../../components/AppTitle/AppTitle";
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import AppUserFavourites from "../../components/AppUserFavourites/AppUserFavourites";


export default function UserFavourites() {

    return (
        <div className="userFavourites-container" id="userFavourites">
            <AppTitle title="USER FAVOURITES" />
            <AppUserFavourites />
            <Typography
                // noWrap
                component={Link}
                to="/gallery-boardgames"
                sx={{
                    mx: 2,
                    py: 0,
                    textDecoration: "none",
                }}
            >
                <Button variant="contained"
                    sx={{
                        // py: 2,
                        my: 2,
                        mb: 6,
                    }}
                >VER <br></br>JUEGOS DE MESA
                </Button>
            </Typography>
            <Typography
                // noWrap
                component={Link}
                to="/"
                sx={{
                    mx: 2,
                    py: 0,
                    textDecoration: "none",
                }}
            >
                <Button variant="contained"
                    sx={{
                        py: 2,
                        my: 2,
                        mb: 6,
                    }}
                >INICIO
                </Button>
            </Typography>
        </div>
    )
}