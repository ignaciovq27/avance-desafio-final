//css
import "./AppRegister.css"

//components
import { Link, NavLink } from 'react-router-dom';
import { useState } from "react";
import { Box, IconButton, InputAdornment, Typography } from "@mui/material";
import { Button } from "@mui/material";
import { TextField } from "@mui/material";
import AccountCircle from '@mui/icons-material/AccountCircle';
import EmailIcon from '@mui/icons-material/Email';
import VpnKeyIcon from '@mui/icons-material/VpnKey';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import AppImg from "../AppImg/AppImg";



export default function AppRegister() {

    const [userName, setUserName] = useState("");
    const [userEmail, setUserEmail] = useState("");
    const [userPassword, setUserPassword] = useState("");


    const handleSubmit = (e) => {
        e.preventDefault()
        // console.log("Submit")
        console.log(userName)
        console.log(userEmail)
        console.log(userPassword)
    }

    const [showPassword, setShowPassword] = useState(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    return (
        <>
            <Box
                component="form"
                onSubmit={handleSubmit}
                sx={{
                    '& .MuiTextField-root': { m: 1, width: { sx: "10ch", sm: "30ch", md: "40ch" } },
                    display: "flex",
                    // display: { md: 'flex' },
                    my: "20px",
                    mb: "40px",
                }}
                flexDirection={"column"}
                justifyContent={"center"}
                alignItems={"center"}
                textAlign={"center"}
            // noValidate
            // autoComplete="off"
            >
                <AppImg
                    // to="/"
                    src="\imgs\Icon_User_02.png"
                    alt="Logo_02"
                    width="70px"
                    display="flex"
                    py="10px"
                />
                <Typography
                    disabled={false}
                    variant="h4"
                    color="primary"
                    sx={{
                    }}
                // className=''
                >CREA TU CUENTA
                </Typography>
                <div>
                    <div className="divTextField-style">
                        <AccountCircle
                            color="primary"
                            sx={{ my: 0.5 }} />
                        <TextField
                            id="name"
                            label="Nombre de usuario"
                            type="text"
                            variant="outlined"
                            required
                            // helperText="Ingresa un nombre de usuario valido."
                            error={false}
                            value={userName}
                            onChange={(e) => setUserName(e.target.value)}
                            color="primary"
                        />
                    </div>

                    <div className="divTextField-style">
                        <EmailIcon
                            color="primary"
                            sx={{ my: 0.5 }} />
                        <TextField
                            id="email"
                            label="Correo Electrónico"
                            type="email"
                            variant="outlined"
                            required
                            // helperText="Ingrese un correo valido."
                            error={false}
                            value={userEmail}
                            onChange={(e) => setUserEmail(e.target.value)}
                            color="primary"
                        />
                    </div>

                    <div className="divTextField-style">
                        <VpnKeyIcon
                            color="primary"
                            sx={{ my: 0.5 }} />
                        <TextField
                            id="password"
                            label="Contraseña"
                            type={showPassword ? 'text' : 'password'}
                            variant="outlined"
                            required
                            // helperText="Ingrese un correo valido."
                            error={false}
                            value={userPassword}
                            onChange={(e) => setUserPassword(e.target.value)}
                            color="primary"
                        />
                        <IconButton
                            onClick={handleClickShowPassword}
                            onMouseDown={handleMouseDownPassword}
                            edge="end"
                            color="secondary"
                        >
                            {showPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                    </div>

                </div>

                <Button
                    type="submit"
                    variant="contained"
                    size="small"
                    sx={{
                        mt: 1,
                        py: 2,
                        width: "200px",
                    }}
                > REGISTRARSE </Button>
            </Box>

            <Box
                component="form"
                onSubmit={handleSubmit}
                sx={{
                    '& .MuiTextField-root': { m: 1, width: '40ch' },
                    display: "flex",
                    // display: { md: 'flex' },
                    my: "40px",
                    px: "40px",
                    mb: "100px"
                    // pb: "20px",
                    // mx: "10px",
                    // m: "auto",
                }}
                flexDirection={"column"}
                justifyContent={"center"}
                alignItems={"center"}
                textAlign={"center"}
            // noValidate
            // autoComplete="off"
            >
                <hr className="hr-style2" />
                <Typography
                    variant="h6"
                    color="secondary"
                // className=''
                >¿YA TIENES UNA CUENTA?
                </Typography>
                <Typography
                    variant="h5"
                    color="primary"
                    component={Link}
                    to="/login"
                    className="link-style"
                >INICIAR SESIÓN
                </Typography>
            </Box>
        </>
    );
}