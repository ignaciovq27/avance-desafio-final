//css
import "./AppRegister.css"

//components
import { Link, NavLink } from 'react-router-dom';
import { useState } from "react";
import { useContext } from "react";
import { ContextUser } from '../../context/UserContext';
import { useNavigate } from 'react-router-dom';

import { Box, IconButton, InputAdornment, Typography } from "@mui/material";
import { Button } from "@mui/material";
import { TextField } from "@mui/material";
import AccountCircle from '@mui/icons-material/AccountCircle';
import EmailIcon from '@mui/icons-material/Email';
import VpnKeyIcon from '@mui/icons-material/VpnKey';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import AppImg from "../AppImg/AppImg";
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import defaultProfileImg from '../../../public/imgs/User_Profile_Img_00.png';

export default function AppRegister() {

    const {
        user,
        name,
        setName,
        email,
        setEmail,
        password,
        setPassword,
        register } = useContext(ContextUser);
    const navigate = useNavigate()

    // const [userName, setUserName] = useState("");
    // const [userEmail, setUserEmail] = useState("");
    // const [userPassword, setUserPassword] = useState("");
    const [passwordRepeat, setPasswordRepeat] = useState("");
    const [profileImg, setpProfileImg] = useState(defaultProfileImg);

    const handleSubmit = (e) => {
        e.preventDefault()

        if (password !== passwordRepeat) {
            return alert("error: No coinciden las contraseñas.")
        }

        // console.log("Submit")
        console.log("userName: " + name)
        console.log("userEmail: " + email)
        console.log("userPassword: " + password)
        console.log("userPasswordRepeat: " + passwordRepeat)
        console.log("userProfileImg: " + profileImg)

        register({
            name,
            email,
            password,
            profileImg,
        })
        console.log(user)
        return navigate("/login")
    }

    const [showPassword, setShowPassword] = useState(false);
    const [showPasswordRepeat, setShowPasswordRepeat] = useState(false);


    const handleClickShowPassword = () => setShowPassword((show) => !show);
    const handleClickShowPasswordRepeat = () => setShowPasswordRepeat((show) => !show);


    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    const handleMouseDownPasswordRepeat = (event) => {
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
                // className=''
                >CREA TU CUENTA
                </Typography>
                <Typography
                    variant="h6"
                    color="secondary"
                    // className=''
                    sx={{
                        pb: "20px"
                    }}
                >REGISTRA TUS DATOS
                </Typography>
                <div>
                    <div className="divTextField-style">
                        <AccountCircle
                            color="primary"
                            sx={{ my: 0.5 }} />
                        <TextField
                            id="name"
                            // label="Nombre de usuario"
                            label="NOMBRE DE USUARIO"
                            type="text"
                            variant="outlined"
                            required
                            // helperText="Ingresa un nombre de usuario valido."
                            error={false}
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            color="primary"
                        />
                    </div>

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
                            // helperText="Ingrese un correo valido."
                            error={false}
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
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
                            error={false}
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
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

                    <div className="divTextField-style">
                        <VpnKeyIcon
                            color="primary"
                            sx={{ my: 0.5 }} />
                        <TextField
                            id="passwordRepeat"
                            // label="Contraseña"
                            label="REPETIR CONTRASEÑA"
                            type={showPasswordRepeat ? 'text' : 'password'}
                            variant="outlined"
                            required
                            // helperText="La contraseña no es correcta."
                            error={false}
                            value={passwordRepeat}
                            onChange={(e) => setPasswordRepeat(e.target.value)}
                            color="primary"
                        />
                        <IconButton
                            onClick={handleClickShowPasswordRepeat}
                            onMouseDown={handleMouseDownPasswordRepeat}
                            edge="start"
                            color="secondary"
                        >
                            {showPasswordRepeat ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                    </div>
                </div>

                <Button
                    type="submit"
                    variant="contained"
                    size="small"
                    color="warning"
                    sx={{
                        mt: 1,
                        py: 2,
                        width: "200px",
                    }}
                    endIcon={<PersonAddIcon />}> REGISTRARSE </Button>
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