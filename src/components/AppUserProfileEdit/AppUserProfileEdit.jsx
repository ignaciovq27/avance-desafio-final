//css
import "./AppUserProfileEdit.css"

//components
import { Link, NavLink } from 'react-router-dom';
import { useState } from "react";
import { Box, IconButton, InputAdornment, Typography } from "@mui/material";
import { Container } from '@mui/material';
import { Grid } from '@mui/material';
import { Button } from "@mui/material";
import { TextField } from "@mui/material";
import AccountCircle from '@mui/icons-material/AccountCircle';
import EmailIcon from '@mui/icons-material/Email';
import VpnKeyIcon from '@mui/icons-material/VpnKey';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import AppImg from "../AppImg/AppImg";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import CheckIcon from '@mui/icons-material/Check';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CardActions from '@mui/material/CardActions';
import AppButtonUpload from "../AppButtonUpload/AppButtonUpload";

export default function AppUserProfileEdit() {

    const [userName, setUserName] = useState('"UserName"');
    const [userEmail, setUserEmail] = useState('"UserMail"');
    const [userPassword, setUserPassword] = useState('"UserPassword"');
    const [userPasswordRepeat, setUserPasswordRepeat] = useState('"UserPasswordRepeat"');


    const handleSubmit = (e) => {
        e.preventDefault()
        // console.log("Submit")
        console.log(userName)
        console.log(userEmail)
        console.log(userPassword)
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
            >✧ EDITAR PERFIL ✧
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
                    maxWidth: { xs: "330px", sm: "600px", md: "880px", lg: "1040px" },
                    borderRadius: "20px",
                }}
                className="userCard-style"
            >
                <CardContent
                    sx={{
                        m: "0", p: "0",
                    }}
                >
                    <Typography
                        variant="h6"
                        color="secondary"
                        // className=''
                        sx={{
                            pt: "30px",
                            pb: "10px",
                        }}
                    >ACTUALIZA TUS DATOS:
                    </Typography>

                    <Grid container
                        spacing={3}
                        justifyContent={"center"}
                        alignItems={"center"}
                        alignContent={"center"}
                        sx={{
                            mb: { xs: 0, sm: 3, md: 2, lg: 3 }
                        }}
                    >
                        <Grid
                            item
                            xs={12}
                            // sm={6}
                            md={9}
                            sx={{
                                // pl: { xs: 'none', sm: '0px', md: "0px", lg: "30px" },
                                display: "flex",
                            }}
                            flexDirection={"column"}
                            justifyContent={"center"}
                            alignItems={"center"}
                            textAlign={"center"}
                        >
                            <Box
                                component="form"
                                onSubmit={handleSubmit}
                                sx={{
                                    '& .MuiTextField-root': { m: 1, width: { sx: "10ch", sm: "30ch", md: "40ch" } },
                                    display: "flex",
                                    // display: { md: 'flex' },
                                    my: "20px",
                                }}
                                flexDirection={"column"}
                                justifyContent={"center"}
                                alignItems={"center"}
                                textAlign={"center"}
                            >
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
                                            // disabled
                                            // helperText="Ingresa un nombre de usuario valido."
                                            error={false}
                                            value={userName}
                                            // defaultValue={userName}
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
                                            // label="Contraseña"
                                            label="CONTRASEÑA"
                                            type={showPassword ? 'text' : 'password'}
                                            variant="outlined"
                                            required
                                            // helperText="La contraseña no es correcta."
                                            error={false}
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
                                            value={userPasswordRepeat}
                                            onChange={(e) => setUserPasswordRepeat(e.target.value)}
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
                            </Box>
                        </Grid>

                        <Grid
                            item
                            xs={12}
                            // sm={6}
                            md={3}
                            sx={{
                                // pl: { xs: 'none', sm: '0px', md: "0px", lg: "30px" },
                                display: "flex",
                            }}
                            flexDirection={"column"}
                            justifyContent={"center"}
                            alignItems={"center"}
                            textAlign={"center"}
                        >
                            <Box
                                sx={{
                                    display: "flex",
                                    // display: { md: 'flex' },
                                    mb: { xs: "40px", sm: "40px", md: "0px", lg: 0 },

                                }}
                                flexDirection={"column"}
                                justifyContent={"center"}
                                alignItems={"center"}
                                textAlign={"center"}
                            >
                                <Typography
                                    // variant="h4"
                                    color="secondary"
                                    // className=''
                                    sx={{
                                    }}
                                >IMAGEN DE PERFÍL:
                                </Typography>
                                <AppImg
                                    src="\imgs\User_Profile_Img_00.png"
                                    alt="User_Profile_Img_00.png"
                                    width="140px"
                                    imgClass="userProfileImg2-style"
                                />
                                <AppButtonUpload />
                            </Box>
                        </Grid>
                    </Grid>

                    <hr className="hr-style4" />

                    <Box
                        sx={{
                            // display: "flex",
                            // display: { md: 'flex' },
                            mb: { xs: 2, sm: 2, md: 2, lg: 2 },
                        }}>


                        <Button
                            component={Link}
                            to="/user-profile"
                            variant="contained"
                            size="small"
                            color="secondary"
                            sx={{
                                mt: 1,
                                mb: 1,
                                py: 1.5,
                                mx: 3,
                                width: "160px",
                            }}
                            startIcon={<ArrowBackIcon />}>CANCELAR
                        </Button>
                        <Button
                            component={Link}
                            to="/user-profile"
                            variant="contained"
                            size="small"
                            color="warning"
                            sx={{
                                mt: 1,
                                mb: 1,
                                py: 1.5,
                                mx: 3,
                                width: "160px",
                            }}
                            endIcon={<CheckIcon />}>CONFIRMAR
                        </Button>
                    </Box>
                </CardContent>
            </Card>

        </>
    );
}