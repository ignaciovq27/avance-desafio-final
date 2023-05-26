//css
import "./AppLogIn.css"

//components
import { Link, NavLink } from 'react-router-dom';
import { useState } from "react";
import { useContext } from "react";
import { ContextUser } from '../../context/UserContext';
import { useNavigate } from 'react-router-dom';

import { Box, IconButton, Typography } from "@mui/material";
import { Button } from "@mui/material";
import { TextField } from "@mui/material";
import EmailIcon from '@mui/icons-material/Email';
import VpnKeyIcon from '@mui/icons-material/VpnKey';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import AppImg from "../AppImg/AppImg";
import LoginIcon from '@mui/icons-material/Login';

export default function AppLogIn() {

    const { logIn, compararInfoUsuarLogIn } = useContext(ContextUser);
    // console.log(user)

    const [userEmail, setUserEmail] = useState("test@test.cl");
    const [userPassword, setUserPassword] = useState("test");
    // const [userEmail, setUserEmail] = useState("");
    // const [userPassword, setUserPassword] = useState("");

    const [userEmailError, setUserEmailError] = useState(false);
    const [userPasswordError, setUserPasswordError] = useState(false);

    const navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault()
        console.log("mail ingresado: " + userEmail)
        console.log("password ingresado: " + userPassword)

        const user = await logIn(userEmail, userPassword)
        if (user) {
            return navigate("/user-profile")
        }
        compararInfoUsuarLogIn(userEmail, userPassword, setUserEmailError, setUserPasswordError)
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
                    src="\imgs\Icon_User_01.png"
                    alt="Logo_02"
                    width="70px"
                    display="flex"
                    py="10px"
                />
                <Typography
                    disabled={false}
                    variant="h4"
                    color="primary"
                // className=''
                >¡BIENVENIDO!
                </Typography>
                <Typography
                    variant="h6"
                    color="secondary"
                    // className=''
                    sx={{
                        pb: "20px"
                    }}
                >INICIA SESIÓN
                </Typography>
                <div>

                    <div className="divTextField-style">
                        <EmailIcon
                            color="primary"
                            sx={{ my: 0.5 }} />
                        <TextField
                            id="email"
                            // label="Correo Electrónico"
                            label="CORREO ELECTRÓNICO"

                            type="email"
                            variant="outlined"
                            required
                            helperText={userEmailError
                                ? ("Ingrese un correo valido.")
                                : null}
                            error={userEmailError}
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
                            // label="Contraseña"
                            label="CONTRASEÑA"
                            type={showPassword ? 'text' : 'password'}
                            variant="outlined"
                            required
                            // helperText="La contraseña no es correcta."
                            helperText={userPasswordError
                                ? ("La contraseña no es correcta.")
                                : null}
                            error={userPasswordError}
                            value={userPassword}
                            onChange={(e) => setUserPassword(e.target.value)}
                            color="primary"
                        />
                        <IconButton
                            onClick={handleClickShowPassword}
                            onMouseDown={handleMouseDownPassword}
                            edge="start"
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
                    color="warning"
                    disabled={(userEmail !== "" && userPassword !== "") ? false : true}
                    sx={{
                        mt: 1,
                        py: 2,
                        width: "200px",
                    }}
                    endIcon={<LoginIcon />}> INGRESAR </Button>
            </Box>

            <Box
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
                >¿AÚN NO TIENES UNA CUENTA?
                </Typography>
                <Typography
                    variant="h5"
                    color="primary"
                    component={Link}
                    to="/register"
                    className="link-style"
                >REGISTRARSE
                </Typography>
            </Box>
        </>
    );
}