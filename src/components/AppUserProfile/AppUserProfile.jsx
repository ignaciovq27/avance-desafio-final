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

import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
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
            <Card
                elevation={3}
                sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    alignContent: "center",
                    m: "auto",
                    mt: "50px",
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
                    className="userCard-style"
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
                    // noValidate
                    // autoComplete="off"
                    >
                        <CardMedia
                            component="img"
                            sx={{ objectFit: "fill" }}
                            image="imgs/Card_Style_01.png"
                            alt="Card_Style_00.png"
                        />

                        <div className="imgContainer-style">
                            <AppImg
                                src="\imgs\User_Profile_Img_00.png"
                                alt="User_Profile_Img_00.png"
                                width="140px"
                            />
                        </div>

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
                                    label="Correo Electrónico"
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
                                    label="Contraseña"
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
                            px: "20px",
                            mb: "20px"
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
                                mt: 2,
                                py: 2,
                                width: "200px",
                            }}
                        > MIS PUBLICACIONES </Button>
                        <Button
                            component={Link}
                            to="/user-favourites"
                            variant="contained"
                            size="small"
                            sx={{
                                mt: 2,
                                py: 2,
                                width: "200px",
                            }}
                        > MIS FAVORITOS </Button>
                    </Box>

                    <CardMedia
                        component="img"
                        sx={{ objectFit: "fill" }}
                        image="imgs/Card_Style_01.png"
                        alt="Card_Style_00.png"
                    />
                </CardContent>
            </Card>

        </>
    );
}