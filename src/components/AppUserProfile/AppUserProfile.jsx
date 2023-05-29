//css
import "./AppUserProfile.css"

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
import EditIcon from '@mui/icons-material/Edit';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CardActions from '@mui/material/CardActions';

export default function AppUserProfile() {
    const { user, setName, setEmail, setPassword, } = useContext(ContextUser);
    const navigate = useNavigate()

    const nameInUpperCase = user.name.toUpperCase();

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
                    pt: "20px",
                    pb: "15px",
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
                        <Typography
                            variant="h6"
                            color="secondary"
                            // className=''
                            sx={{
                                pt: "20px",
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center"
                            }}
                        ><b> HOLA {nameInUpperCase}</b> <AutoAwesomeIcon sx={{
                            ml: "5px",
                        }} />
                        </Typography>

                        <AppImg
                            // src="\imgs\User_Profile_Img_00.png"
                            src={user.profileImg}
                            alt="User_Profile_Img_00.png"
                            width="140px"
                            imgClass="userProfileImg-style"
                        />

                        <Typography
                            // variant="h6"
                            color="secondary"
                            // className=''
                            sx={{
                                // pt: "20px",
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center"
                            }}
                        >IR A:
                        </Typography>

                        <Box
                            sx={{
                                '& .MuiTextField-root': { m: 1, width: '40ch' },
                                display: "flex",
                                flexDirection: { xs: "column", sm: "row" },
                                my: "10px",
                                mb: "10px",
                            }}
                            justifyContent={"space-around"}
                            alignItems={"center"}
                            textAlign={"center"}
                        >

                            <Button
                                component={Link}
                                to="/user-dashboard"
                                variant="contained"
                                size="small"
                                sx={{
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
                                    mb: 1,
                                    py: 2,
                                    mx: 3,
                                    width: "200px",
                                }}
                            > MIS FAVORITOS </Button>
                        </Box>
                        <hr className="hr-style2" />

                        <div>

                            <Typography
                                // variant="h6"
                                color="secondary"
                                // className=''
                                sx={{
                                    pt: "5px",
                                    display: "flex",
                                    justifyContent: "center",
                                    alignItems: "center"
                                }}
                            >DATOS DE REGISTRO:
                            </Typography>

                            <div className="divTextField-style">
                                <AccountCircle
                                    color="primary"
                                    sx={{ my: 0.5 }} />
                                <TextField
                                    id="name"
                                    label="NOMBRE DE USUARIO"
                                    type="text"
                                    variant="outlined"
                                    disabled
                                    error={false}
                                    // value={userName} 
                                    defaultValue={user.name}
                                    color="primary"
                                />
                            </div>

                            <div className="divTextField-style">
                                <EmailIcon
                                    color="primary"
                                    sx={{ my: 0.5 }} />
                                <TextField
                                    id="email"
                                    label="CORREO ELECTRÓNICO"
                                    type="email"
                                    variant="outlined"
                                    // required
                                    disabled
                                    error={false}
                                    // value={userEmail}
                                    defaultValue={user.email}
                                    color="primary"
                                />
                            </div>

                            <div className="divTextField-style">
                                <VpnKeyIcon
                                    color="primary"
                                    sx={{ my: 0.5 }} />
                                <TextField
                                    id="password"
                                    label="CONTRASEÑA"
                                    type={showPassword ? 'text' : 'password'}
                                    variant="outlined"
                                    disabled
                                    error={false}
                                    // value={userPassword}
                                    defaultValue={user.password}
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