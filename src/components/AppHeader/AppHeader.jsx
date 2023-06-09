//css
import "./AppHeader.css"

//components
import AppImg from "../AppImg/AppImg"
import Typography from '@mui/material/Typography';
import { Link, NavLink } from 'react-router-dom';

export default function AppHeader() {
    return (
        <>
            <header className="appHeader-container header-img">
                <AppImg to="/" src="\imgs\Logo_02.png" width="160px" alt="Logo_Header" />
                <Typography
                    variant=""
                    // noWrap
                    component="h1"
                    sx={{ display: { xs: 'flex', sm: 'flex' }, m: 0, my: 1, px: 1.5, py: 1, lineHeight: "1.1", }}>
                    N°1 MARKETPLACE DE JUEGOS DE MESA 2023
                </Typography>

                <hr className="hr-style"></hr>
            </header>
        </>
    )
}