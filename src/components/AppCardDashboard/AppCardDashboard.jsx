//css
import "./AppCardDashboard.css"

//components
import { Link, NavLink } from 'react-router-dom';
import { useState } from "react";
import { Box, Chip, IconButton, InputAdornment, Typography } from "@mui/material";
import { Button } from "@mui/material";
import AppImg from "../AppImg/AppImg";
import { Grid } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CardActions from '@mui/material/CardActions';

export default function AppCardDashboard() {

    const pollo = "( °)> "
    const [count, setCount] = useState(0)

    return (
        <>
            <Card
                // elevation={2}
                sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    alignContent: "center",
                    m: "auto",
                    mt: "50px",
                    mb: "40px",
                    maxWidth: { xs: "330px", sm: "600px", md: "940px", lg: "800px" },
                    borderRadius: "20px",
                }}

            >
                <CardContent
                    className="dasboardCard-style productDetailsImg-style2"
                >

                    <Grid container
                        // spacing={3}
                        justifyContent={"center"}
                        alignItems={"center"}
                        alignContent={"center"}
                    >
                        <Grid
                            item
                            // xs={12}
                            // sm={12}
                            md={6}
                            sx={{
                                display: "flex",
                            }}
                            justifyContent={"center"}
                            alignItems={"center"}
                            alignContent={"center"}

                        >
                            <CardMedia
                                component="img"
                                sx={{ width: { xs: 120, sm: 120, md: 120, lg: 120 }, mx: "auto" }}
                                image="\imgs\products\Product_01.png"
                                alt="Product_01.png"
                                className="productDetailsImg-style"
                            />
                            <Typography
                                variant="h5"
                                color="secondary"
                                sx={{
                                    fontWeight: "bold",
                                    textAlign: { xs: "center", sm: "center", md: "center" },
                                    fontSize: "22px"
                                }}
                            // className=''
                            >"NOMBRE PRODUCTO"
                            </Typography>
                        </Grid >

                        <Grid
                            item
                            // xs={12}
                            // sm={12}
                            md={6}

                            sx={{
                                // px: { xs: 'none', sm: '0px', md: "5px" },
                            }}
                        >

                            <Box
                                sx={{
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
                                > EDITAR
                                </Button>
                                <Button
                                    component={Link}
                                    to="/user-favourites"
                                    variant="outlined"
                                    size="small"
                                    sx={{
                                        // mt: 1,
                                        mb: 1,
                                        py: 2,
                                        mx: 3,
                                        width: "200px",
                                    }}
                                > ELIMINAR
                                </Button>
                            </Box>
                        </Grid >
                    </Grid>
                </CardContent>
            </Card>
        </>
    );
}