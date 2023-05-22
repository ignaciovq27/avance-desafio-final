//css
import "./AppUserDashboard.css"

//components
import { Link, NavLink } from 'react-router-dom';
import { useState } from "react";
import { Box, Typography } from "@mui/material";
import { Button } from "@mui/material";
import AppImg from "../AppImg/AppImg";

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import AppCardDashboard from "../AppCardDashboard/AppCardDashboard";

export default function AppUserDashboard() {

    return (
        <>
            <Card
                elevation={5}
                sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    alignContent: "center",
                    m: "auto",
                    mt: "50px",
                    mb: "40px",
                    maxWidth: { xs: "330px", sm: "500px", md: "1000px" },
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
                    <Button
                        component={Link}
                        to="/user-profile"
                        variant="contained"
                        size="small"
                        color="secondary"
                        sx={{
                            mt: 1,
                            mb: 1,
                            py: 1,
                            mx: 3,
                            width: "140px",
                        }}
                    > EDITAR PERFIL
                    </Button>
                    <hr />
                    <AppCardDashboard />
                </CardContent>
            </Card>
        </>
    );
}