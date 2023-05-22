//css
import "./AppUserCart.css"

//components
import { Link, NavLink } from 'react-router-dom';
import { useState } from "react";
import { Box, Typography } from "@mui/material";
import { Button } from "@mui/material";
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import AppProductCart from "../AppProductCart/AppProductCart";

export default function AppUserCart() {

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
            >✧ MI CARRITO ✧
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
                    pb: "35px",
                    maxWidth: { xs: "330px", sm: "700px", md: "880px", lg: "1040px" },
                    borderRadius: "20px",
                }}
            // className="userCard-style"
            >
                <CardContent
                    sx={{
                        m: "0", p: "0",
                    }}
                // className="userCard-style"
                >
                    <Box
                        sx={{
                            my: 1,
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            alignContent: "center",
                        }}
                    >
                    </Box>
                    {/* <hr /> */}
                    <AppProductCart dashboardProductImg="\imgs\products\Product_01.png" />
                    <AppProductCart dashboardProductImg="\imgs\products\Product_06.png" />
                </CardContent>
            </Card>
        </>
    );
}