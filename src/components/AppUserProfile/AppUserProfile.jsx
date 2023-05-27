//css
import "./AppUserProfile.css"

//components
import { Link, NavLink } from 'react-router-dom';
import { useState } from "react";
import { useContext } from "react";
import { ContextUser } from '../../context/UserContext';
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
    const { user } = useContext(ContextUser);

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
                            // src="\imgs\User_Profile_Img_00.png"
                            src={user.profileImg}
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

                    <Box
                        sx={{
                            '& .MuiTextField-root': { m: 1, width: '40ch' },
                            display: "flex",
                            flexDirection: { xs: "column", sm: "row" },
                            my: "20px",
                            mb: "20px",
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