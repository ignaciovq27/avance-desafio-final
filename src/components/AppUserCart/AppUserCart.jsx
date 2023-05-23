//css
import "./AppUserCart.css"

//components
import { Link, NavLink } from 'react-router-dom';
import { useState } from "react";
import AppProductCart from "../AppProductCart/AppProductCart";
import { Box, Typography } from "@mui/material";
import { Button } from "@mui/material";
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

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
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    alignContent: "center",
                    m: "auto",
                    mt: "10px",
                    mb: "40px",
                    pb: "40px",
                    maxWidth: { xs: "330px", sm: "700px", md: "880px", lg: "1040px" },
                    borderRadius: "20px",
                }}
            // className="userCard-style"
            >
                <CardContent
                    sx={{
                        m: "0", p: "0",
                        mt: 1,
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
                <Box>
                    <Box
                        sx={{
                            display: "flex",
                            flexDirection: "column",
                            // maxWidth: { xs: "280px", sm: "280px", md: "880px", lg: "1040px" },
                            // pr: { xs: 0, sm: 8, md: 8, lg: 8 },
                            py: 2,
                        }}
                        justifyContent={"center"}
                        alignItems={"center"}
                        textAlign={"center"}
                    >

                        <Box
                            sx={{
                                display: "flex",
                                flexDirection: "row",
                                flexDirection: { xs: "column", sm: "row" },
                                // maxWidth: { xs: "280px", sm: "280px", md: "880px", lg: "1040px" },
                                // pl: 1,
                            }}
                            justifyContent={"center"}
                            alignItems={"center"}
                            textAlign={"center"}
                        >
                            <Typography
                                // variant="h6"
                                color="secondary"
                                variant="h5"
                                sx={{
                                    fontWeight: "bold",
                                    fontSize: "18px",
                                    // textAlign: { xs: "center", sm: "center", md: "left", lg: "center" },
                                    fontSize: "14px",
                                }}
                            // className=''
                            >CANTIDAD DE PRODUCTOS:
                            </Typography>
                            <Typography
                                variant="h5"
                                color="primary"
                                // color="secondary"
                                sx={{
                                    // fontWeight: "bold",
                                    // fontSize: "24px",
                                    // mr: 10,
                                    // ml: 2,
                                    // py: 0.5,
                                    px: 1,
                                    textAlign: { xs: "center", sm: "center", md: "center", lg: "center" },
                                    // width: { xs: "0", sm: "0", md: "280px", lg: "100px" },
                                    mx: "auto"
                                }}
                            // className="productName-style"
                            >5
                            </Typography>
                        </Box>

                        <Box
                            sx={{
                                display: "flex",
                                flexDirection: "row",
                                flexDirection: { xs: "column", sm: "row" },
                                // maxWidth: { xs: "280px", sm: "280px", md: "880px", lg: "1040px" },
                                // pl: 1,
                            }}
                            justifyContent={"center"}
                            alignItems={"center"}
                            textAlign={"center"}
                        >
                            <Typography
                                variant="h5"
                                color="secondary"
                                sx={{
                                    fontWeight: "bold",
                                    fontSize: "18px",
                                    // mr: 10,
                                    // ml: 2,
                                    py: 0.5,
                                    // pr: { xs: 0, sm: 2, md: 5, lg: 1 },
                                    // px: 1,
                                    textAlign: { xs: "center", sm: "center", md: "center", lg: "center" },
                                    // width: { xs: 0, sm: 0, md: 0, lg: "270px" },
                                    mx: "auto"
                                }}
                            // className="productName-style"
                            >TOTAL:
                            </Typography>
                            <Typography
                                variant="h5"
                                color="primary"
                                sx={{
                                    // fontWeight: "bold",
                                    fontWeight: "600",
                                    textAlign: { xs: "center", sm: "center", md: "center", lg: "center" },
                                    fontSize: "24px",
                                    px: 1,
                                    // pb: 1,
                                }}
                            // className=''
                            >$9.990
                            </Typography>
                        </Box>

                        {/* <Typography
                            variant="h5"
                            color="primary"
                            sx={{
                                // fontWeight: "bold",
                                fontWeight: "600",
                                textAlign: { xs: "center", sm: "center", md: "center", lg: "left" },
                                fontSize: "22px"
                            }}
                        // className=''
                        >$ 9.990
                        </Typography> */}
                    </Box>

                    <Button
                        // component={Link}
                        // to="/user-favourites"
                        variant="contained"
                        // color="primary"
                        color="warning"
                        startIcon={<ShoppingCartCheckoutIcon
                            color="white"
                            className="iconInfo-style" />}
                        size="small"
                        // fullWidth
                        sx={{
                            // mt: 3,
                            // mb: 1,
                            // mx: 3,
                            py: 2,
                            px: 5,
                            // width: "200px",
                        }}
                    >CONTINUAR COMPRA
                    </Button>
                </Box>
            </Card>
        </>
    );
}