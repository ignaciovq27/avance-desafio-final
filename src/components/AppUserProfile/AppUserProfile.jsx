//css
import "./AppUserProfile.css"

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
import EditIcon from '@mui/icons-material/Edit';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CardActions from '@mui/material/CardActions';

export default function AppUserProfile() {

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
            <Typography
                disabled={false}
                variant="h4"
                color="primary"
                sx={{
                    textAlign: "center",
                    py: "20px",
                    fontSize: { xs: "28px", sm: "30px", md: "34px" }
                }}
            // className=''
            >✧ MI PERFIL ✧
            </Typography>
            <Card
                elevation={5}
                sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    alignContent: "center",
                    m: "auto",
                    mt: "10px",
                    mb: "40px",
                    maxWidth: { xs: "330px", sm: "500px", md: "600px" },
                    borderRadius: "20px",
                }}
                className="userCard-style"
            >
                <CardContent
                    sx={{
                        m: "0", p: "0",
                    }}
                // className="userCard-style"
                >
                    <Box
                        sx={{
                            '& .MuiTextField-root': { m: 1, width: { sx: "10ch", sm: "30ch", md: "40ch" } },
                            display: "flex",
                            // display: { md: 'flex' },
                        }}
                        flexDirection={"column"}
                        justifyContent={"center"}
                        alignItems={"center"}
                        textAlign={"center"}
                    >
                        <AppImg
                            src="\imgs\User_Profile_Img_00.png"
                            alt="User_Profile_Img_00.png"
                            width="140px"
                            imgClass="userProfileImg-style"
                        />

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
                                    // required
                                    disabled
                                    // helperText="Ingresa un nombre de usuario valido."
                                    error={false}
                                    // value={userName}
                                    defaultValue='"UserName"'
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
                                    // label="Correo Electrónico"
                                    label="CORREO ELECTRÓNICO"
                                    type="email"
                                    variant="outlined"
                                    // required
                                    disabled
                                    // helperText="Ingrese un correo valido."
                                    error={false}
                                    // value={userEmail}
                                    defaultValue='"UserEmail"'
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
                                    // required
                                    disabled
                                    // helperText="Ingrese un correo valido."
                                    error={false}
                                    // value={userPassword}
                                    defaultValue='"UserPassword"'
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
                        <hr className="hr-style2" />
                    </Box>

                    <Box
                        sx={{
                            '& .MuiTextField-root': { m: 1, width: '40ch' },
                            display: "flex",
                            flexDirection: { xs: "column", sm: "row" },
                            my: "20px",
                            mb: "20px",
                            // pb: "20px",
                            // mx: "10px",
                            // m: "auto",
                        }}
                        justifyContent={"space-around"}
                        alignItems={"center"}
                        textAlign={"center"}
                    // noValidate
                    // autoComplete="off"
                    >
                        <Button
                            component={Link}
                            to="/user-dashboard"
                            variant="contained"
                            size="small"
                            sx={{
                                // mt: 1,
                                mb: 1,
                                py: 2,
                                mx: 3,
                                width: "200px",
                            }}
                        > MIS PUBLICACIONES </Button>
                        <Button
                            component={Link}
                            to="/user-favourites"
                            variant="contained"
                            size="small"
                            sx={{
                                // mt: 1,
                                mb: 1,
                                py: 2,
                                mx: 3,
                                width: "200px",
                            }}
                        > MIS FAVORITOS </Button>
                    </Box>
                    <hr className="hr-style2" />
                    {/* <Button
                        component={Link}
                        to="/user-profile-edit"
                        variant="contained"
                        size="small"
                        color="warning"
                        sx={{
                            mt: 1,
                            mb: 1,
                            py: 1,
                            mx: 3,
                            width: "140px",
                        }}
                    > EDITAR PERFIL
                    </Button> */}
                    <Button
                        component={Link}
                        to="/user-profile-edit"
                        variant="contained"
                        size="small"
                        color="warning"
                        sx={{
                            my: 1,
                            mx: { xs: 0, sm: 1, md: 1, lg: 1 },
                            py: 1.5,
                            width: "160px",
                        }}
                        endIcon={<EditIcon />}> EDITAR PERFIL
                    </Button>
                </CardContent>
            </Card>

        </>
    );
}